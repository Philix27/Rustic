const { remarkCodeHike } = require("@code-hike/mdx");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme: "nord" }]],
  },
});
module.exports = withMDX(nextConfig);
