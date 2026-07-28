'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'

import { LinkButton } from '@/components/link-button'
import { mainNav } from '@/lib/site-data'
import { cn } from '@/lib/utils'
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
   <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container-page flex h-16 items-center justify-between gap-10 lg:h-20"
      >
        <BrandLogo />
       

        <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
          {mainNav.map((item) => {
            const active =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary',
                  active ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className={cn(
              'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary',
              pathname.startsWith('/contact') ? 'text-primary' : 'text-muted-foreground',
            )}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          <LinkButton href="/contact" className="hidden sm:inline-flex">
            Request Quotation
          </LinkButton>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-primary xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X className="size-5" /> : <Menu className="size-8" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background xl:hidden">
          <nav aria-label="Mobile navigation" className="container-page flex flex-col py-3">
            {[...mainNav, { label: 'Contact', href: '/contact' }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <LinkButton href="/contact" className="mt-3">
              Request Quotation
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  )
}
