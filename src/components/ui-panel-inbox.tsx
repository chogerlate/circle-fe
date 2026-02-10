export function UIPanelInbox() {
  return (
    <div className="w-full h-full bg-zinc-900 border-r border-zinc-800 flex flex-col">
      <div className="h-14 border-b border-zinc-800 flex items-center px-4">
        <span className="text-zinc-200 font-medium">Inbox</span>
      </div>
      <div className="flex-1 p-2 space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-3 bg-zinc-800/50 rounded-lg">
            <div className="h-3 w-2/3 bg-zinc-700/50 rounded mb-2" />
            <div className="h-2 w-1/2 bg-zinc-700/30 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}
