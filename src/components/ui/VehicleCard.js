"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function VehicleCard({
  src,
  name,
  href = "/contact",
  footer,
  ctaLabel = "Request Quote",
  ctaHref = "/contact",
  imageHeight = "h-48",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  align = "center",
  className = "",
}) {
  const [loaded, setLoaded] = useState(false);
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden flex flex-col ${alignment} transition-shadow hover:shadow-lg ${className}`}
    >
      <Link
        href={href}
        className={`relative w-full ${imageHeight} block group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500`}
      >
        {!loaded && (
          <div className="absolute inset-0 z-10 bg-gray-200 animate-pulse" />
        )}
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover group-hover:opacity-90 transition-opacity duration-200"
          sizes={sizes}
          quality={85}
          priority={priority}
          onLoad={() => setLoaded(true)}
        />
        <span className="sr-only">Contact us about {name}</span>
      </Link>
      <div className={`flex flex-col gap-3 p-4 w-full ${alignment}`}>
        <p className="font-semibold text-base xs:text-lg text-gray-800 capitalize">
          {name}
        </p>
        {footer
          ? footer
          : (
            <Button href={ctaHref} variant="primary" size="sm" shape="pill">
              {ctaLabel}
            </Button>
          )}
      </div>
    </div>
  );
}
