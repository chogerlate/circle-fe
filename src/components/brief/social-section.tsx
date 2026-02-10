
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Facebook, Instagram, Twitter, Linkedin, Hash } from "lucide-react";

interface SocialItem {
    name: string;
    update: string;
    source: string;
    avatar?: string;
}

interface TrendingItem {
    topic: string;
    summary: string;
    source: string;
}

interface SocialSectionProps {
    data: {
        friends: SocialItem[];
        following: SocialItem[];
        trending: TrendingItem[];
    };
}

const SourceIcon = ({ source }: { source: string }) => {
    switch (source.toLowerCase()) {
        case 'facebook': return <Facebook className="w-3 h-3 text-blue-600" />;
        case 'instagram': return <Instagram className="w-3 h-3 text-pink-600" />;
        case 'twitter': return <Twitter className="w-3 h-3 text-sky-500" />;
        case 'linkedin': return <Linkedin className="w-3 h-3 text-blue-700" />;
        default: return <Hash className="w-3 h-3 text-gray-500" />;
    }
};

export function SocialSection({ data }: SocialSectionProps) {
    return (
        <div className="space-y-10">
            {/* Stories / Friends Updates */}
            <section>
                <h2 className="text-2xl font-medium mb-6 text-white tracking-tight flex items-center gap-3">
                    <span className="bg-gradient-to-r from-orange-500 to-rose-500 w-1 h-6 rounded-full"></span>
                    Circle Stories
                </h2>
                <ScrollArea className="w-full whitespace-nowrap">
                    <div className="flex w-max space-x-6 p-1">
                        {data.friends.map((friend, i) => (
                            <div key={i} className="flex flex-col items-center space-y-3 w-[84px] cursor-pointer group">
                                <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-orange-400 via-rose-500 to-purple-600 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-rose-500/10">
                                    <Avatar className="w-16 h-16 border-[3px] border-[#09090B]">
                                        <AvatarImage src={friend.avatar} className="object-cover" />
                                        <AvatarFallback className="bg-zinc-900 text-white font-semibold">{friend.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <span className="text-xs font-medium truncate w-full text-center text-zinc-300 group-hover:text-white transition-colors">{friend.name}</span>
                            </div>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </ScrollArea>
            </section>

            {/* Following Updates - Feed Style */}
            <section>
                 <h2 className="text-2xl font-medium mb-6 text-white tracking-tight">Following</h2>
                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                     {data.following.map((item, i) => (
                         <Card key={i} className="bg-zinc-900/40 border-zinc-800/50 hover:border-zinc-700/50 transition-all hover:bg-zinc-900/60 group shadow-xl shadow-black/20 backdrop-blur-sm">
                             <CardHeader className="flex flex-row items-center gap-4 p-5 pb-3">
                                 <Avatar className="w-10 h-10 ring-1 ring-zinc-800">
                                     <AvatarImage src={item.avatar} className="object-cover" />
                                     <AvatarFallback className="bg-zinc-800 text-zinc-300">{item.name.substring(0, 2)}</AvatarFallback>
                                 </Avatar>
                                 <div className="flex flex-col">
                                     <span className="font-medium text-white text-sm group-hover:text-indigo-400 transition-colors">{item.name}</span>
                                     <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                                         <SourceIcon source={item.source} />
                                         <span>{item.source}</span>
                                     </div>
                                 </div>
                             </CardHeader>
                             <CardContent className="p-5 pt-2">
                                 <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors">{item.update}</p>
                             </CardContent>
                         </Card>
                     ))}
                 </div>
            </section>

            {/* Trending */}
            <section>
                 <h2 className="text-2xl font-medium mb-6 text-white tracking-tight">Trending Now</h2>
                 <div className="flex flex-wrap gap-3">
                     {data.trending.map((item, i) => (
                         <Badge 
                            key={i} 
                            variant="secondary" 
                            className="bg-zinc-900/60 border-zinc-800 text-zinc-300 px-4 py-2 text-xs flex items-center gap-3 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer rounded-full border shadow-sm"
                         >
                             <span className="text-indigo-400 font-bold">#</span>
                             {item.topic.replace('#', '')}
                             <span className="text-[10px] text-zinc-600 font-medium border-l border-zinc-800 pl-3 ml-1 uppercase tracking-tight">
                                 {item.source}
                             </span>
                         </Badge>
                     ))}
                 </div>
            </section>
        </div>
    );
}
