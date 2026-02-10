export function MyCircle({ people }: { people: any[] }) {
    if (!people || people.length === 0) return null
  
    return (
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-blue-100 p-1 rounded">👥</span> My Circle
        </h2>
        <div className="space-y-4">
          {people.map((person, i) => (
            <div key={i} className="border-l-4 border-blue-500 pl-4 py-1">
              <p className="font-semibold text-gray-900">{person.name}</p>
              <p className="text-gray-600">{person.update}</p>
              <p className="text-xs text-gray-400 mt-1">via {person.source}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
