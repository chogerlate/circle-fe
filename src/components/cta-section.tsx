export function CTASection() {
  return (
    <section className="py-40 px-6 relative overflow-hidden" style={{ backgroundColor: "#09090B" }}>
      {/* Artistic Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="flex flex-col items-center gap-10">
          <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tighter leading-none">
                Stop scrolling. <br /><span className="text-zinc-600 italic">Start knowing.</span>
              </h2>
              <p className="text-zinc-500 text-lg">The internet is infinite. Your attention isn't. Join 12,000+ others who replaced their feed with a hard stop.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="/login" className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-500/20 text-[10px] uppercase tracking-[0.3em]">
              Start your brief
            </a>
            <a href="/waitlist" className="px-10 py-5 border border-zinc-800 text-zinc-300 font-bold rounded-2xl hover:bg-zinc-900 transition-colors text-[10px] uppercase tracking-[0.3em]">
              Join waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
