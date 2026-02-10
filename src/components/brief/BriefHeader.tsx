export function BriefHeader({ userName, isAdmin }: { userName: string, isAdmin?: boolean }) {
    const today = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    })
  
    return (
      <header className="mb-8 flex justify-between items-start">
        <div>
          <p className="text-gray-500 uppercase tracking-wide text-sm mb-2">{today}</p>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">Good morning, {userName}.</h1>
            {isAdmin && (
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full border border-amber-200">
                Admin
              </span>
            )}
          </div>
        </div>
      </header>
    )
  }
