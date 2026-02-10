
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface TopicItem {
    topic: string;
    update: string;
    source: string;
}

interface TopicSectionProps {
    data: TopicItem[];
}

export function TopicSection({ data }: TopicSectionProps) {
    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-medium text-white tracking-tight flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-amber-400" />
                Featured Topics
            </h2>
            <div className="grid gap-4">
                {data.map((item, i) => (
                    <div key={i} className="group relative flex flex-col gap-2 p-5 rounded-xl border border-zinc-800/50 bg-zinc-900/40 shadow-xl shadow-black/10 hover:bg-zinc-900/60 hover:border-zinc-700/50 transition-all duration-300 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-amber-500/80 uppercase tracking-widest px-2.5 py-1 rounded-md bg-amber-500/5 border border-amber-500/10 w-fit">
                                {item.source}
                            </span>
                            <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                        </div>
                        <h3 className="font-semibold text-lg text-white leading-tight transition-colors">
                            {item.topic}
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 group-hover:text-zinc-300 transition-colors">
                            {item.update}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
