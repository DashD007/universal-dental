"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Clock, Menu, Phone, X } from "lucide-react";
import Logo from "@/components/brand/Logo";
import { buttonClasses } from "@/lib/ui/button";
import { cn } from "@/lib/cn";
import { site } from "@/lib/data/site";

/**
 * Full-screen mobile menu built on the native <dialog>:
 * showModal() gives focus trapping, Escape-to-close and an inert page for free.
 * Page scroll is locked via `html:has(dialog[open])` in globals.css.
 */
export default function MobileNav() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  const openMenu = () => dialogRef.current?.showModal();
  const closeMenu = () => dialogRef.current?.close();

  // Close after any navigation, including browser back/forward.
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={openMenu}
        aria-haspopup="dialog"
        aria-controls="mobile-menu"
        className={buttonClasses({ variant: "secondary", size: "icon" })}
      >
        <Menu aria-hidden="true" />
        <span className="sr-only">Open menu</span>
      </button>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        aria-label="Menu"
        className={cn(
          "m-0 h-dvh max-h-none w-full max-w-none border-0 bg-background p-0 text-foreground",
          "translate-y-2 opacity-0 transition-[opacity,translate,display,overlay] transition-discrete duration-300 ease-soft",
          "open:translate-y-0 open:opacity-100 starting:open:translate-y-2 starting:open:opacity-0",
          "motion-reduce:transition-none",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-header shrink-0 items-center justify-between border-b border-line px-4">
            <Link href="/" onClick={closeMenu} aria-label={`${site.name} — home`} className="rounded-lg">
              <Logo />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className={buttonClasses({ variant: "secondary", size: "icon" })}
            >
              <X aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4">
            <ol className="divide-y divide-line">
              {site.nav.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className="group flex items-center gap-4 py-5"
                    >
                      <span
                        className={cn(
                          "flex-1 font-display text-display-md font-medium",
                          active ? "text-primary" : "text-foreground",
                        )}
                      >
                        {item.label}
                      </span>
                      <ArrowUpRight
                        className="size-5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="shrink-0 space-y-3 border-t border-line bg-surface px-4 pb-8 pt-6">
            <Link
              href={site.quoteHref}
              onClick={closeMenu}
              className={buttonClasses({ size: "lg", className: "w-full" })}
            >
              Request a quote <ArrowRight aria-hidden="true" />
            </Link>
            <a
              href={site.phone.href}
              className={buttonClasses({ variant: "secondary", size: "lg", className: "w-full" })}
            >
              <Phone aria-hidden="true" /> {site.phone.display}
            </a>
            <p className="flex items-center justify-center gap-2 pt-2 text-xs text-muted">
              <Clock className="size-3.5" aria-hidden="true" /> {site.hours}
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}
