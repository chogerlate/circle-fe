export function UIPanelSidebar() {
  return (
    <div className="w-64 h-full bg-zinc-900 border-r border-zinc-800 flex flex-col">
      <div className="h-14 border-b border-zinc-800 flex items-center px-4">
        <div className="w-6 h-6 bg-zinc-800 rounded" />
      </div>
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="h-3 w-20 bg-zinc-800 rounded" />
          <div className="h-3 w-24 bg-zinc-800 rounded" />
          <div className="h-3 w-16 bg-zinc-800 rounded" />
        </div>
      </div>
    </div>
  )
}
