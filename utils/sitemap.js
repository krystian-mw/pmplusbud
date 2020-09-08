module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, options) {
    if (process.env.NODE_ENV !== "production") return config;
    const { writeFileSync } = require("fs");
    const sitemap = require("../public/sitemap.json");
    const format = require("xml-formatter");

    try {
      let out = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

      sitemap.forEach((page) => {
        out += `<url><loc>${page.loc}</loc>
                <lastmod>${page.lastmod}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>${page.priority}</priority></url>`;
      });
      out += `</urlset>`;

      writeFileSync(
        "public/sitemap.xml",
        format(out, { indentation: "    ", collapseContent: true })
      );
      console.log(
        "🚀",
        "\x1b[32m",
        "Sitemap generated successfully!",
        "\x1b[0m",
        "\n"
      );
    } catch (e) {
      console.error(
        "❌",
        "\x1b[31m",
        "Failed to build sitemap",
        "\x1b[0m",
        "\n",
        e
      );
    }
    return config;
  },
});
