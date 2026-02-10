import { BookOpen } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Product: ["How it works", "Methodology", "Pricing", "AI Engines"],
    Company: ["Manifesto", "Research", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "Data Policy"],
    Connect: ["Twitter", "Thread", "LinkedIn"],
  }

  return (
    <footer className="border-t border-zinc-800/50 py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-24">
          {/* Brand */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span className="text-white font-bold tracking-tighter text-xl">Circle</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                The anti-feed for high-performance minds. 
                Sourced from the signal, delivered in silence.
            </p>
            <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                © 2026 Circle Technologies Inc.
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h3 className="text-zinc-300 font-bold text-[10px] uppercase tracking-[0.2em] mb-8">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
