
import { db } from "@/lib/db";
import { briefs } from "@/lib/schema";
import { desc } from "drizzle-orm";
import { SocialSection } from "@/components/brief/social-section";
import { NewsSection } from "@/components/brief/news-section";
import { FinanceSection } from "@/components/brief/finance-section";
import { TopicSection } from "@/components/brief/topic-section";
import { mockBrief } from "@/lib/mock-data";
import { Search, Bell, BookOpen, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const revalidate = 0; // Disable static caching for this demo

export default async function BriefPage() {
    // Using mock data directly as requested
    const briefData = mockBrief; 

    return (
        <main className="min-h-screen bg-[#09090B] text-zinc-100 pb-24">
            {/* Top Navigation / Breadcrumb style welcome */}
            <div className="border-b border-zinc-800/50 bg-[#09090B]/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <a href="/" className="text-xl font-bold tracking-tighter text-white hover:text-indigo-400 transition-colors">Circle</a>
                        <div className="h-4 w-px bg-zinc-800" />
                        <nav className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-zinc-500">
                             <a href="#" className="text-white hover:text-indigo-400 transition-colors">Daily Brief</a>
                             <a href="#global-news" className="hover:text-white cursor-pointer transition-colors">Global News</a>
                             <a href="#business" className="hover:text-white cursor-pointer transition-colors">Business</a>
                             <a href="#culture" className="hover:text-white cursor-pointer transition-colors">Culture</a>
                        </nav>
                    </div>

                    <div className="flex items-center gap-5">
                        <button className="text-zinc-500 hover:text-white transition-colors">
                            <Search className="w-4 h-4" />
                        </button>
                        <button className="text-zinc-500 hover:text-white transition-colors relative">
                            <Bell className="w-4 h-4" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full border-2 border-[#09090B]" />
                        </button>
                        <div className="h-6 w-px bg-zinc-800 mx-1" />
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="text-right hidden sm:block">
                                <p className="text-[10px] font-bold text-white uppercase tracking-wider">Siwarat S.</p>
                                <p className="text-[9px] text-zinc-500 font-medium uppercase tracking-tighter">Premium Member</p>
                            </div>
                            <Avatar className="w-8 h-8 ring-2 ring-zinc-800 group-hover:ring-indigo-500 transition-all">
                                <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100" />
                                <AvatarFallback className="bg-zinc-800 text-xs font-bold text-white">SS</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl space-y-16 animate-in fade-in duration-700 pt-12">
                {/* Welcome Message */}
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">FEBRUARY 10, 2026</p>
                    <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
                         Your Daily <span className="text-indigo-400 italic">Synthesis.</span><br />
                         Everything you need. <span className="text-zinc-500">Nothing you don't.</span>
                    </h1>
                </div>

                {/* Featured Story Section */}
                <section className="group cursor-pointer">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-zinc-900/30 rounded-3xl overflow-hidden border border-zinc-800/50 hover:bg-zinc-900/50 transition-all duration-500 p-1 md:p-2 shadow-2xl">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                            <img 
                                src={briefData.featured.image} 
                                alt={briefData.featured.headline}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4">
                                <Badge className="bg-orange-600 hover:bg-orange-700 border-none px-3 py-1 uppercase tracking-widest text-[9px] font-bold">Key Signal</Badge>
                            </div>
                        </div>
                        <div className="p-6 md:p-10 space-y-6">
                            <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                                <span>{briefData.featured.source}</span>
                                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                                <span>{briefData.featured.time}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-medium leading-[1.1] text-white group-hover:text-orange-400 transition-colors">
                                {briefData.featured.headline}
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                                {briefData.featured.summary}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left/Main Column - Spans 8 cols */}
                    <div className="lg:col-span-8 space-y-20">
                        {/* Latest News Grid */}
                        <div id="global-news" className="space-y-8 scroll-mt-24">
                             <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                                <h2 className="text-2xl font-medium text-white tracking-tight">Global News</h2>
                                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">6 Total Updates</span>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {briefData.news.latest.slice(0, 4).map((item, i) => (
                                    <div key={i} className="group space-y-4 cursor-pointer">
                                        <div className="relative aspect-video overflow-hidden rounded-xl border border-zinc-800/50 shadow-lg">
                                            <img src={item.image} alt={item.headline} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                                            <div className="absolute top-3 left-3">
                                                 <Badge className="bg-black/50 backdrop-blur-md border-zinc-700/50 text-[9px] uppercase tracking-widest">{item.category}</Badge>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                                                <span>{item.source}</span>
                                                <span>•</span>
                                                <span>{item.time}</span>
                                            </div>
                                            <h3 className="text-lg font-medium leading-tight text-white group-hover:text-indigo-400 transition-colors">
                                                {item.headline}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </div>

                        {/* Social/Friends Section (Synthesized) */}
                        <div className="space-y-8">
                             <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                                <h2 className="text-2xl font-medium text-white tracking-tight">Social Circles</h2>
                                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Synthesized Updates</span>
                             </div>
                             <SocialSection data={briefData.social} />
                        </div>

                        {/* Stories / Analysis */}
                        <div className="space-y-8">
                             <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                                <h2 className="text-2xl font-medium text-white tracking-tight">Deep Dives</h2>
                                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Required Reading</span>
                             </div>
                             <NewsSection data={briefData.news} />
                        </div>
                    </div>

                    {/* Right Sidebar - Spans 4 cols */}
                    <div className="lg:col-span-4 space-y-20">
                        <div id="business" className="scroll-mt-24">
                            <FinanceSection data={briefData.finance} />
                        </div>
                        
                        <div id="culture" className="scroll-mt-24">
                            <TopicSection data={briefData.topics} />
                        </div>
                    </div>
                </div>

                {/* Hard Stop / Completion Visual */}
                <div className="pt-24 pb-48 text-center border-t border-zinc-900/50">
                    <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-500 text-xs font-bold uppercase tracking-[0.4em] mb-8">
                        <Sparkles className="w-3 h-3 text-indigo-500" />
                        You are all caught up
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-6">
                        That's your world <br /> for today.
                    </h2>
                    <p className="text-zinc-500 text-lg max-w-lg mx-auto leading-relaxed mb-12">
                        You've reached the bottom. No more infinite scrolling. No more engagement loops. 
                        Go live your life. We'll see you tomorrow morning.
                    </p>
                    <a href="/">
                        <Button variant="outline" className="rounded-full px-8 py-6 border-zinc-800 hover:bg-white hover:text-black transition-all font-bold uppercase tracking-widest text-xs">
                            Return to Homepage
                        </Button>
                    </a>
                </div>
            </div>
        </main>
    );
}
