"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/logo.svg"
            alt="FreshPress Laundry"
            className="h-8 w-auto"
          />
          <span className="text-lg font-bold text-foreground tracking-tight">
            FreshPress
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="inline-flex">
            <Button>Free Pickup</Button>
          </Link>
        </div>

        {/* Mobile Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-muted transition-colors">
            <FontAwesomeIcon icon={faBars} className="size-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] p-0">
            <SheetHeader className="border-b px-6 py-4">
              <SheetTitle>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <img
                    src="/logo.svg"
                    alt="FreshPress Laundry"
                    className="h-7 w-auto"
                  />
                  <span className="text-lg font-bold text-foreground tracking-tight">
                    FreshPress
                  </span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col px-3 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto border-t px-6 py-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full"
              >
                <Button className="w-full">Free Pickup</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
