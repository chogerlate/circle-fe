export function MyWorld({ news }: { news: any[] }) {
    if (!news || news.length === 0) return null
  
    return (
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-green-100 p-1 rounded">🌍</span> My World
        </h2>
        <div className="space-y-6">
          {news.map((item, i) => (
            <article key={i} className="group cursor-pointer">
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600">
                {item.headline}
              </h3>
              <p className="text-gray-600 mt-1">{item.summary}</p>
              <p className="text-xs text-gray-400 mt-1">{item.source}</p>
            </article>
          ))}
        </div>
      </section>
    )
  }
