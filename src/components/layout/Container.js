const SIZES = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

const PADDING = {
  none: "",
  sm: "px-4 py-6",
  md: "px-4 py-10 md:py-14",
  lg: "px-4 py-12 md:py-20",
};

export default function Container({
  children,
  size = "xl",
  padding = "md",
  className = "",
  as: Tag = "section",
}) {
  return (
    <Tag
      className={`w-full mx-auto ${SIZES[size] ?? SIZES.xl} ${PADDING[padding] ?? PADDING.md} ${className}`}
    >
      {children}
    </Tag>
  );
}
