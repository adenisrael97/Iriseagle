const siteUrl = "https://iriseagle.com";

const blogSlugs = ["toyota", "lexus", "mercedes", "bus", "electric"];

export default function sitemap() {
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/financing",
    "/more/preorder",
    "/more/book-after-sales",
    "/more/history",
    "/showroom/latest-vehicles",
    "/showroom/our-vehicles",
    "/showroom/blog",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${siteUrl}/showroom/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
