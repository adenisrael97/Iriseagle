import Link from "next/link";

const VARIANTS = {
  primary:
    "bg-red-600 text-white shadow hover:bg-red-700 focus-visible:ring-red-500",
  secondary:
    "bg-white text-red-700 shadow hover:bg-red-50 focus-visible:ring-red-500",
  outline:
    "bg-transparent text-red-700 border border-red-700 hover:bg-red-50 focus-visible:ring-red-500",
  danger:
    "bg-red-700 text-white shadow hover:bg-red-800 focus-visible:ring-red-500",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-400",
  whatsapp:
    "bg-green-600 text-white shadow hover:bg-green-700 focus-visible:ring-green-500",
};

const SIZES = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-sm md:text-base",
  lg: "px-8 py-3 text-base md:text-lg",
};

const SHAPES = {
  rounded: "rounded-lg",
  pill: "rounded-full",
  square: "rounded-md",
};

const BASE =
  "inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  shape = "square",
  fullWidth = false,
  className = "",
  external = false,
  ...props
}) {
  const classes = [
    BASE,
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? SIZES.md,
    SHAPES[shape] ?? SHAPES.square,
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
