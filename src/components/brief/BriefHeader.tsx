export function BriefHeader({ userName }: { userName: string }) {
    const today = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    })
  
    return (
      <header className="mb-8">
        <p className="text-gray-500 uppercase tracking-wide text-sm mb-2">{today}</p>
        <h1 className="text-3xl font-bold">Good morning, {userName}.</h1>
      </header>
    )
  }
