
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Globe, MapPin } from "lucide-react";
import Link from "next/link";

interface NewsItem {
    headline: string;
    summary: string;
    image?: string;
    source: string;
    time: string;
    category: string;
}

interface NewsSectionProps {
    data: {
        mustRead: NewsItem[];
        business: NewsItem[];
    };
}

const NewsCard = ({ item }: { item: NewsItem }) => (
    <Card className="bg-zinc-900/40 border-zinc-800/50 hover:bg-zinc-900/60 transition-all group overflow-hidden border-none shadow-xl shadow-black/10">
        <div className="flex flex-col sm:flex-row h-full">
            {item.image && (
                <div className="sm:w-1/3 h-48 sm:h-auto relative overflow-hidden">
                    <img 
                        src={item.image} 
                        alt={item.headline} 
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
            )}
            <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                        <span>{item.source}</span>
                        <span className="h-1 w-1 rounded-full bg-zinc-800" />
                        <span>{item.time}</span>
                    </div>
                    <h3 className="text-xl font-medium leading-tight text-white group-hover:text-rose-400 transition-colors">
                        {item.headline}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                        {item.summary}
                    </p>
                </div>
                <div className="pt-4 flex items-center justify-between">
                    <Badge variant="outline" className="text-[9px] uppercase tracking-[0.2em] bg-zinc-900/50 border-zinc-800 text-zinc-500 font-bold px-2 py-0.5">{item.category}</Badge>
                    <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                </div>
            </div>
        </div>
    </Card>
);

export function NewsSection({ data }: NewsSectionProps) {
    return (
        <div className="space-y-20">
            {/* Must Read Section */}
            <section className="space-y-8">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                    <h2 className="text-2xl font-medium text-white tracking-tight flex items-center gap-3">
                        Must Read
                    </h2>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold cursor-pointer hover:text-white transition-colors">See all</span>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                    {data.mustRead.map((item, i) => (
                        <NewsCard key={i} item={item} />
                    ))}
                </div>
            </section>

            {/* Business Section */}
            <section className="space-y-8">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                    <h2 className="text-2xl font-medium text-white tracking-tight flex items-center gap-3">
                        Business & Finance
                    </h2>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold cursor-pointer hover:text-white transition-colors">See all</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.business.map((item, i) => (
                        <div key={i} className="group space-y-4 cursor-pointer">
                            <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-800/50 group-hover:border-zinc-700/50 transition-colors">
                                <img src={item.image} alt={item.headline} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
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
            </section>
        </div>
    );
}
