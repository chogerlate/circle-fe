
import { db } from "@/lib/db";
import { briefs } from "@/lib/schema";
import { desc } from "drizzle-orm";
import { SocialSection } from "@/components/brief/social-section";
import { NewsSection } from "@/components/brief/news-section";
import { FinanceSection } from "@/components/brief/finance-section";
import { TopicSection } from "@/components/brief/topic-section";
import { mockBrief } from "@/lib/mock-data";
import { Search, Bell, BookOpen } from "lucide-react";
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
                    <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Good morning, User</p>
                    <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
                         Craft narratives ✍️ that ignite <span className="text-orange-500 italic">inspiration</span> 💡, <br className="hidden md:block" />
                         <span className="text-indigo-400">knowledge</span> 📚 , and <span className="text-rose-500">entertainment</span> 🎬
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
                                <Badge className="bg-orange-600 hover:bg-orange-700 border-none px-3 py-1 uppercase tracking-widest text-[9px] font-bold">Featured</Badge>
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
                            <div className="pt-4">
                                <Button variant="link" className="text-white p-0 text-sm flex items-center gap-2 group/btn">
                                    Read story <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left/Main Column - Spans 8 cols */}
                    <div className="lg:col-span-8 space-y-20">
                        {/* Latest News Grid */}
                        <div id="global-news" className="space-y-8 scroll-mt-24">
                             <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-medium text-white tracking-tight">Latest News</h2>
                                <Button variant="ghost" className="text-xs text-zinc-500 uppercase tracking-widest hover:text-white">See all <span className="ml-2">→</span></Button>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {briefData.news.latest.map((item, i) => (
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

                        {/* Stories (Already Updated for Dark Theme) */}
                        <SocialSection data={briefData.social} />

                        {/* Editor's Pick / Vertical Grid */}
                        <NewsSection data={briefData.news} />
                    </div>

                    {/* Right Sidebar - Spans 4 cols */}
                    <div className="lg:col-span-4 space-y-20">
                        <div id="business" className="scroll-mt-24">
                            <FinanceSection data={briefData.finance} />
                        </div>
                        
                        {/* Top Creators / Experts */}
                        <div className="space-y-8">
                             <h2 className="text-2xl font-medium text-white tracking-tight flex items-center justify-between">
                                Top Creators
                                <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">See all</span>
                             </h2>
                             <div className="grid gap-6">
                                {briefData.creators.map((creator, i) => (
                                    <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-white/5 p-3 rounded-2xl transition-all duration-300 border border-transparent hover:border-zinc-800">
                                        <div className="flex items-center gap-4">
                                            <Avatar className="w-12 h-12 ring-2 ring-zinc-800 group-hover:ring-orange-500/50 transition-all">
                                                <AvatarImage src={creator.avatar} />
                                                <AvatarFallback className="bg-zinc-800 font-bold">{creator.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-white">{creator.name}</span>
                                                <span className="text-xs text-zinc-500">{creator.role}</span>
                                            </div>
                                        </div>
                                        <Button size="sm" variant="outline" className="rounded-full text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">Follow</Button>
                                    </div>
                                ))}
                             </div>
                        </div>

                        <div id="culture" className="scroll-mt-24">
                            <TopicSection data={briefData.topics} />
                        </div>
                    </div>
                </div>

                {/* Footer Style Newsletter */}
                <div className="bg-indigo-600 rounded-3xl p-10 md:p-16 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/20 transition-colors duration-700" />
                    <div className="relative z-10 max-w-2xl space-y-6">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-bold">Stay ahead of the curve</p>
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                            Get the news in front line by subscribing ✍️ our latest updates
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-md"
                            />
                            <Button className="bg-white text-indigo-600 hover:bg-zinc-100 h-auto rounded-2xl px-8 py-4 font-bold uppercase tracking-widest text-xs">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
