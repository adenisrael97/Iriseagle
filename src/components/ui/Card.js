import Image from "next/image";

const VARIANTS = {
  solid: "bg-white",
  glass: "bg-white/95 backdrop-blur-sm",
  tinted: "bg-red-500/80 backdrop-blur-sm text-white",
  muted: "bg-white/90",
};

const PADDING = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-6 sm:p-8 md:p-10",
};

const ROUNDED = {
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-2xl",
};

const SHADOW = {
  none: "",
  sm: "shadow",
  md: "shadow-lg",
  xl: "shadow-2xl",
};

export default function Card({
  title,
  description,
  image,
  imageAlt = "",
  imageHeight = "h-48",
  media,
  href,
  variant = "solid",
  padding = "md",
  rounded = "md",
  shadow = "sm",
  align = "left",
  hover = true,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  children,
  footer,
  imagePriority = false,
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const classes = [
    "flex flex-col overflow-hidden",
    VARIANTS[variant] ?? VARIANTS.solid,
    ROUNDED[rounded] ?? ROUNDED.md,
    SHADOW[shadow] ?? SHADOW.sm,
    hover ? "transition-shadow duration-200 hover:shadow-lg" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const body = (
    <>
      {image && !media && (
        <div className={`relative w-full ${imageHeight}`}>
          <Image
            src={image}
            alt={imageAlt || title || "card image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={imagePriority}
          />
        </div>
      )}
      <div className={`flex flex-col ${alignment} ${PADDING[padding] ?? PADDING.md}`}>
        {media && <div className={`mb-4 ${align === "center" ? "self-center" : ""}`}>{media}</div>}
        {title && (
          <h3 className={`text-lg xs:text-xl font-bold mb-2 ${titleClassName || "text-gray-900"}`}>
            {title}
          </h3>
        )}
        {description && (
          <p className={`text-sm xs:text-base leading-relaxed ${descriptionClassName || "text-gray-700"}`}>
            {description}
          </p>
        )}
        {children && <div className={title || description ? "mt-3" : ""}>{children}</div>}
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${classes} focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500`}>
        {body}
      </a>
    );
  }

  return <div className={classes}>{body}</div>;
}
