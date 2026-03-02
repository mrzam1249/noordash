export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" className="text-primary-foreground" />
              </svg>
            </div>
            <span className="text-lg font-bold text-foreground">NoorDash</span>
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
