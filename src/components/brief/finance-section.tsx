
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Info } from "lucide-react";

interface Stock {
    symbol: string;
    change: string;
    reason: string;
}

interface FinanceSectionProps {
    data: {
        trendingStocks: Stock[];
        marketSummary: string;
    };
}

export function FinanceSection({ data }: FinanceSectionProps) {
    return (
        <section className="space-y-6">
             <h2 className="text-2xl font-medium text-white tracking-tight flex items-center gap-3">
                 <TrendingUp className="w-6 h-6 text-emerald-400" />
                 Market Pulse
             </h2>
             
             <div className="space-y-4">
                 {data.trendingStocks.map((stock, i) => {
                     const isPositive = stock.change.startsWith('+');
                     
                     // First one is prominent
                     if (i === 0) {
                        return (
                            <Card key={stock.symbol} className="bg-gradient-to-br from-zinc-900/60 to-zinc-900/20 border-zinc-800/50 shadow-xl shadow-black/20 backdrop-blur-sm overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <TrendingUp className="w-24 h-24 text-emerald-500" />
                                </div>
                                <CardHeader className="pb-3 p-6 relative z-10">
                                    <CardTitle className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                                        Stock of the Day
                                    </CardTitle>
                                    <div className="flex items-end justify-between mt-2">
                                        <h3 className="text-4xl font-semibold tracking-tighter text-white">{stock.symbol}</h3>
                                        <span className={`flex items-center text-xl font-bold ${isPositive ? 'text-emerald-400' : 'text-rose-500'}`}>
                                            {stock.change}
                                            {isPositive ? <ArrowUpRight className="w-5 h-5 ml-1" /> : <ArrowDownRight className="w-5 h-5 ml-1" />}
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="px-6 pb-6 relative z-10">
                                    <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                                        {stock.reason}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                     }

                     // Others are compact
                     return (
                        <div key={stock.symbol} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60 transition-all cursor-pointer group">
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white uppercase tracking-wider">{stock.symbol}</span>
                                <span className="text-[10px] text-zinc-500 font-medium truncate max-w-[180px]">{stock.reason}</span>
                            </div>
                            <div className={`flex items-center text-sm font-bold ${isPositive ? 'text-emerald-400' : 'text-rose-500'}`}>
                                {stock.change}
                                {isPositive ? <ArrowUpRight className="w-4 h-4 ml-1" /> : <ArrowDownRight className="w-4 h-4 ml-1" />}
                            </div>
                        </div>
                     );
                 })}
             </div>

             <Card className="bg-zinc-900/40 border-zinc-800/50 shadow-xl shadow-black/20 backdrop-blur-sm">
                 <CardHeader className="pb-3 p-5 flex flex-row items-center gap-2.5 space-y-0">
                     <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                        <Info className="w-4 h-4 text-indigo-400" />
                     </div>
                     <CardTitle className="text-sm font-semibold text-white tracking-tight">Market Summary</CardTitle>
                 </CardHeader>
                 <CardContent className="px-5 pb-5">
                     <p className="text-xs text-zinc-400 leading-relaxed italic">
                         {data.marketSummary}
                     </p>
                 </CardContent>
             </Card>
        </section>
    );
}
