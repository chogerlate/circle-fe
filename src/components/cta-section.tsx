export function CTASection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white tracking-tight">
            Your morning in one screen.
          </h2>
          <div className="flex items-center gap-4">
            <a href="/login" className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20 text-sm uppercase tracking-widest">
              Get Started
            </a>
            <a href="/waitlist" className="px-6 py-3 border border-zinc-800 text-zinc-300 font-bold rounded-xl hover:bg-zinc-900 transition-colors text-sm uppercase tracking-widest">
              Join waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
