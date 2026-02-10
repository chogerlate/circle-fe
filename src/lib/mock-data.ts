
export const mockBrief = {
    date: new Date().toISOString().split('T')[0],
    featured: {
        headline: "The Future of Artificial Intelligence: Beyond LLMs",
        summary: "As Large Language Models reach their saturation point, researchers are looking towards neuro-symbolic AI and embodied intelligence as the next frontier in achieving AGI.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
        source: "TechCrunch",
        time: "12 minutes ago",
        category: "Technology"
    },
    social: {
        friends: [
            { name: "Alex Young", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150", update: "Just visited the new art exhibition in Bangkok! 🎨 The lighting and scale were incredible.", source: "Facebook" },
            { name: "Sarah Lee", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150", update: "Anyone up for a hiking trip this weekend? 🏔️ Thinking about Khao Yai national park.", source: "Instagram" },
            { name: "Mike Chen", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150", update: "Finally finished the marathon! 🏃‍♂️ Personal best achieved. Thanks for the support everyone!", source: "Twitter" },
            { name: "Priya Sharma", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150", update: "Just launched a new UI kit for designers! Check it out in the bio. 💅", source: "Dribbble" },
            { name: "John Doe", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150", update: "Testing out the new coffee shop in Thonglor. Best latte in town? ☕", source: "Instagram" },
            { name: "Emily Watson", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150", update: "Deep dive into React Server Components today. The future is bright! ⚛️", source: "Twitter" }
        ],
        following: [
            { name: "Elon Musk", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150", update: "Starship is ready for launch 🚀 Aiming for orbital test flight next week.", source: "Twitter" },
            { name: "Bill Gates", avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=150", update: "Climate change requires immediate action. Scaling green energy is the priority.", source: "LinkedIn" },
            { name: "Sam Altman", avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=150", update: "New model capabilities are exceeding our internal benchmarks. Exciting times.", source: "Twitter" },
            { name: "Mark Zuckerberg", avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150", update: "Metaworld is expanding. New social features rolling out to Horizon OS soon! 🕶️", source: "Facebook" },
            { name: "Satya Nadella", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150", update: "Empowering every person and Every organization on the planet to achieve more. AI is the tool.", source: "LinkedIn" }
        ],
        trending: [
            { topic: "#BKKFoodie", summary: "Street food guide for 2024 is out! Top 10 hidden gems revealed.", source: "Instagram" },
            { topic: "#TechTrends", summary: "AI agents are taking over software development and redefining workflows.", source: "Twitter" },
            { topic: "Bitcoin", summary: "Crypto markets are seeing high volatility today following major institutional moves.", source: "News" },
            { topic: "Quantum Computing", summary: "Major breakthrough in qubit stability reported by IBM researchers.", source: "Reddit" },
            { topic: "#SummerVibes", summary: "Top beach destinations for this summer season are trending now.", source: "Instagram" }
        ]
    },
    news: {
        latest: [
            { headline: "Verstappen backs Alonso for 2025", summary: "Max Verstappen believes Fernando Alonso still has 'a lot more' seasons in Formula 1 and has lauded the Spaniard properly.", image: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&q=80&w=800", source: "Formula 1", time: "5 hours ago", category: "Sport" },
            { headline: "Liverpool hammer Leeds for first win", summary: "Mohamed Salah and Cody Gakpo both scored twice as Liverpool claimed a first league win in five games with a scintillating performance.", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800", source: "BBC", time: "10 hours ago", category: "Sport" },
            { headline: "Pope 41 dead in hunt for kidnapped pilot", summary: "At least 41 people have been killed in a joint operation by the Indonesian military and police in the search for a kidnapped pilot.", image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=800", source: "NY Times", time: "12 hours ago", category: "World" },
            { headline: "Israel's uncertain road ahead", summary: "The road ahead for Israelis is uncertain as the nation faces multiple challenges and internal divisions.", image: "https://images.unsplash.com/photo-1516670428252-df97bba108d1?auto=format&fit=crop&q=80&w=800", source: "BBC", time: "14 hours ago", category: "Middle East" },
            { headline: "New sustainable skyscrapers in NYC", summary: "A new wave of biophilic architecture is transforming the Manhattan skyline with vertical forests.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", source: "Architectural Digest", time: "1 hour ago", category: "Architecture" },
            { headline: "The hidden history of Venice", summary: "Recent excavations reveal secret tunnels used during the Renaissance period for diplomatic escapes.", image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800", source: "National Geographic", time: "3 hours ago", category: "History" }
        ],
        mustRead: [
            { headline: "Ukraine's silence along southern front", summary: "Kyiv remains tight-lipped about its plans for the spring counter-offensive as troops mass in rural areas.", image: "https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?auto=format&fit=crop&q=80&w=800", source: "CNN", time: "15 hours ago", category: "War" },
            { headline: "Taylor Swift's powerful message", summary: "On her latest tour, Taylor Swift is sending a clear message about artistic ownership and women's empowerment.", image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=800", source: "CNN", time: "3 hours ago", category: "Culture" },
            { headline: "Inside Qatar's city of the future", summary: "Lusail is being built from the ground up as a smart, sustainable metropolis for the 21st century.", image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80&w=800", source: "BBC", time: "21 hours ago", category: "World" }
        ],
        business: [
            { headline: "Fruit producers turn to tech", summary: "Agricultural technology is helping farmers increase yields and reduce water consumption through smart sensors.", image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800", source: "BBC", time: "8 hours ago", category: "Business" },
            { headline: "Low employee engagement?", summary: "New study reveals that managers can help turn it around by focusing on clear communication and recognition.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", source: "BBC", time: "11 hours ago", category: "Business" }
        ]
    },
    creators: [
        { name: "Alex Young", role: "UI Designer", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" },
        { name: "Joe Alan", role: "Tech Writer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" },
        { name: "Alexa Timber", role: "Photographer", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" },
        { name: "Ashley Star", role: "Journalist", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" }
    ],
    finance: {
        trendingStocks: [
            { symbol: "AAPL", change: "+3.2%", reason: "Strong quarterly earnings report and expansion of service revenue streams." },
            { symbol: "NVDA", change: "+5.1%", reason: "Increased demand for AI chips from major cloud providers." },
            { symbol: "TSLA", change: "-1.5%", reason: "Price cuts in several markets impacting profit margins." },
            { symbol: "MSFT", change: "+2.4%", reason: "New AI integrations in Office 365 seeing high adoption rates." }
        ],
        marketSummary: "Global markets are bullish as inflation data comes in lower than expected. Technology and Green Energy sectors lead the rally."
    },
    topics: [
        { topic: "Healthy Living", update: "5 essential tips to maximize your morning routine for peak productivity.", source: "HealthBlog" },
        { topic: "Travel", update: "Why Japan is the top destination this year: A guide to hidden rural gems.", source: "TravelMag" },
        { topic: "Artificial Intelligence", update: "The rise of specialized LLMs: Why smaller models are the future of enterprise.", source: "AIWeekly" }
    ]
};
