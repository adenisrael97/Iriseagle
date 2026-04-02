export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Hero skeleton */}
      <div className="w-full h-72 md:h-112 bg-gray-200" />

      <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col gap-6">
        {/* Title */}
        <div className="h-8 bg-gray-200 rounded w-3/4" />
        <div className="h-5 bg-gray-200 rounded w-1/4" />

        {/* Body paragraphs */}
        <div className="flex flex-col gap-3 mt-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`h-4 bg-gray-200 rounded ${i % 3 === 2 ? "w-2/3" : "w-full"}`} />
          ))}
        </div>

        {/* Image placeholder */}
        <div className="w-full h-64 bg-gray-200 rounded-xl mt-4" />

        {/* More paragraphs */}
        <div className="flex flex-col gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`h-4 bg-gray-200 rounded ${i % 3 === 2 ? "w-1/2" : "w-full"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
