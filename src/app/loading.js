export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-5">
      {/* Spinning ring */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-gray-800" />
        <div className="absolute inset-0 rounded-full border-4 border-t-red-500 animate-spin" />
      </div>

      {/* Brand wordmark */}
      <div className="flex items-center gap-1.5">
        <span className="text-lg font-bold text-red-500 tracking-widest">IRISE</span>
        <span className="text-lg font-semibold text-white">EAGLE</span>
      </div>

      <p className="text-gray-500 text-sm">Loading, please wait…</p>
    </div>
  );
}
