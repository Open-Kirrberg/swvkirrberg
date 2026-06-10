"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  cn,
} from "@/components/ui";
import { asset } from "@/lib/asset";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/huette", label: "Hütte" },
  { href: "/vermietung", label: "Vermietung" },
  { href: "/termine", label: "Termine" },
  { href: "/verein", label: "Verein" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={asset("/images/wappen.png")}
            alt="Wappen SWV Kirrberg"
            width={40}
            height={46}
            className="h-10 w-auto"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="font-bold">SWV Kirrberg</span>
            <span className="text-xs text-muted-foreground">
              Ski- und Wanderverein e.V.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "border-b-2 border-transparent px-3 py-1.5 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary",
                isActive(item.href) && "border-primary text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menü öffnen">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>SWV Kirrberg</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-base font-semibold hover:bg-accent",
                    isActive(item.href) && "bg-accent text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
