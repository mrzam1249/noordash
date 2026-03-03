import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Image 
              src="/images/logo.png" 
              alt="NoorDash" 
              width={32} 
              height={32}
              className="h-8 w-auto"
            />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground" aria-label="Footer">
            <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms of Service</a>
            <a href="mailto:support@noordash.app" className="transition-colors hover:text-foreground">support@noordash.app</a>
          </nav>
        </div>

        {/* Compliance & copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Designed for parents; we do not knowingly collect data from children without parental involvement.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            {"© 2026 NoorDash. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
