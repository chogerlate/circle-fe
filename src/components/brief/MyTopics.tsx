export function MyTopics({ topics }: { topics: any[] }) {
    if (!topics || topics.length === 0) return null
  
    return (
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-purple-100 p-1 rounded">💡</span> My Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                {topic.topic}
              </span>
              <p className="text-gray-800 mt-2">{topic.update}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
