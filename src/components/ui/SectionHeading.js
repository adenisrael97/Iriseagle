const SIZES = {
  sm: {
    title: "text-2xl md:text-3xl",
    subtitle: "text-base md:text-lg",
  },
  md: {
    title: "text-2xl sm:text-3xl md:text-4xl",
    subtitle: "text-base md:text-xl",
  },
  lg: {
    title: "text-3xl sm:text-4xl md:text-5xl",
    subtitle: "text-lg md:text-xl",
  },
};

const TONES = {
  dark: { title: "text-gray-900", subtitle: "text-gray-600" },
  light: { title: "text-white", subtitle: "text-gray-200" },
  accent: { title: "text-red-700", subtitle: "text-gray-700" },
};

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "center",
  tone = "dark",
  size = "md",
  className = "",
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const sizeCfg = SIZES[size] ?? SIZES.md;
  const toneCfg = TONES[tone] ?? TONES.dark;

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <p className="text-red-500 font-semibold uppercase tracking-wide text-sm md:text-base mb-2">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className={`${sizeCfg.title} font-bold ${toneCfg.title}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`mt-2 ${sizeCfg.subtitle} ${toneCfg.subtitle} max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
