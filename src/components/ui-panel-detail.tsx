export function UIPanelDetail() {
  return (
    <div className="w-full h-full bg-zinc-900 border-l border-zinc-800 flex flex-col">
      <div className="h-14 border-b border-zinc-800 flex items-center px-4 justify-between">
        <div className="flex items-center gap-2">
          <span className="text-zinc-400 text-sm">PRO-123</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-200 text-sm font-medium">Update checkout flow</span>
        </div>
      </div>
      <div className="p-6">
        <div className="h-4 w-3/4 bg-zinc-800 rounded mb-4" />
        <div className="space-y-2">
          <div className="h-3 w-full bg-zinc-800/50 rounded" />
          <div className="h-3 w-5/6 bg-zinc-800/50 rounded" />
          <div className="h-3 w-4/6 bg-zinc-800/50 rounded" />
        </div>
      </div>
    </div>
  )
}
