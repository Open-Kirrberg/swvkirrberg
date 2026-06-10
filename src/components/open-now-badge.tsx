"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui";
import { isOpenAt } from "@/lib/opening-hours";

/**
 * Live-Status der Hütte. Wird erst nach dem Mount berechnet, damit
 * Server- und Client-HTML nicht auseinanderlaufen.
 */
export function OpenNowBadge() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(isOpenAt(new Date()));
  }, []);

  if (open === null) return null;

  return open ? (
    <Badge className="bg-primary text-primary-foreground">Jetzt geöffnet</Badge>
  ) : (
    <Badge variant="secondary">Derzeit geschlossen</Badge>
  );
}
