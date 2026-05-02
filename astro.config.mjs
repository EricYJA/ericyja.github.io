import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

export default defineConfig({
  site: "https://ericyja.github.io",
  // This repository is named ericyja.github.io, so GitHub Pages serves it at the root.
  // If this site is later moved to a project repository, set base: "/repository-name".
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
