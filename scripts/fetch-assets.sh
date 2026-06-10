#!/usr/bin/env bash
# Downloads the real photos and PDFs from the live Duda site (swvkirrberg.de).
# The CDN URLs are signed; we scrape fresh signatures from each page on every run.
set -euo pipefail

BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
RAW_DIR="$BASE_DIR/public/images/raw"
DL_DIR="$BASE_DIR/public/downloads"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

mkdir -p "$RAW_DIR" "$DL_DIR"

pages=(
  "home https://www.swvkirrberg.de/"
  "huette https://www.swvkirrberg.de/h%C3%BCtte"
  "pavillon https://www.swvkirrberg.de/grillh%C3%BCtte"
  "aktivitaeten https://www.swvkirrberg.de/aktivit%C3%A4ten"
  "vorstand https://www.swvkirrberg.de/vorstand"
)

for entry in "${pages[@]}"; do
  name="${entry%% *}"; url="${entry#* }"
  curl -fsS "$url" -o "$TMP_DIR/$name.html"
done

# Images: every -1920w optimized rendition referenced by the content pages.
grep -ohE 'https://le-cdn\.website-editor\.net/[^"]*-1920w[^"]*' \
  "$TMP_DIR"/huette.html "$TMP_DIR"/pavillon.html "$TMP_DIR"/aktivitaeten.html "$TMP_DIR"/home.html \
  | sed 's/&amp;/\&/g' | sort -u -t'?' -k1,1 > "$TMP_DIR/img-urls.txt"

while IFS= read -r url; do
  fname="$(basename "${url%%\?*}")"
  fname="${fname//+/_}"
  out="$RAW_DIR/$fname"
  [ -s "$out" ] && continue
  curl -fsS "$url" -o "$out"
  echo "img  $fname  $(du -h "$out" | cut -f1)"
done < "$TMP_DIR/img-urls.txt"

# PDFs: Speisekarte + Getraenkekarte (huette), Satzung (vorstand).
grep -ohE 'https://cdn\.website-editor\.net/[^"]*\.pdf[^"]*' \
  "$TMP_DIR"/huette.html "$TMP_DIR"/vorstand.html \
  | sed 's/&amp;/\&/g' | sort -u -t'?' -k1,1 > "$TMP_DIR/pdf-urls.txt"

while IFS= read -r url; do
  fname="$(basename "${url%%\?*}")"
  out="$DL_DIR/$fname"
  [ -s "$out" ] && continue
  curl -fsS "$url" -o "$out"
  echo "pdf  $fname  $(du -h "$out" | cut -f1)"
done < "$TMP_DIR/pdf-urls.txt"

echo "done: $(ls "$RAW_DIR" | wc -l | tr -d ' ') images, $(ls "$DL_DIR" | wc -l | tr -d ' ') pdfs"
