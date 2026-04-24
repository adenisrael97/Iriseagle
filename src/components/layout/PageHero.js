import Image from "next/image";

const HEIGHTS = {
  sm: "min-h-[40vh]",
  md: "min-h-[60vh]",
  lg: "min-h-[70vh]",
  xl: "min-h-[80vh]",
  fixed: "h-85 md:h-120 lg:h-135",
};

const OVERLAYS = {
  none: "",
  light: "bg-black/30",
  medium: "bg-black/50",
  dark: "bg-black/70",
  gradient: "bg-linear-to-b from-black/60 via-black/30 to-transparent",
};

export default function PageHero({
  image,
  imageAlt = "Background",
  title,
  subtitle,
  height = "md",
  overlay = "medium",
  children,
  imageQuality = 72,
  priority = true,
  className = "",
}) {
  return (
    <section
      className={`relative w-full flex items-center justify-center px-4 overflow-hidden ${HEIGHTS[height] ?? HEIGHTS.md} ${className}`}
    >
      <div className="absolute inset-0 z-0">
        {image && (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority={priority}
            quality={imageQuality}
            sizes="100vw"
          />
        )}
        {overlay !== "none" && (
          <div className={`absolute inset-0 ${OVERLAYS[overlay] ?? OVERLAYS.medium}`} />
        )}
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center py-12">
        {title && (
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-2 drop-shadow max-w-2xl">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-4 w-full">{children}</div>}
      </div>
    </section>
  );
}
