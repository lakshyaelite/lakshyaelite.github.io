module.exports = function(eleventyConfig) {
  // Copy static files
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("lakshya.jpg");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.jpeg");
  eleventyConfig.addPassthroughCopy("*.gif");
  eleventyConfig.addPassthroughCopy("*.svg");

  // Add date filter for posts
  eleventyConfig.addFilter("dateDisplay", require("./filters/date-display.js"));
  eleventyConfig.addFilter("dateToRfc3339", function(dateObj) {
    const { DateTime } = require("luxon");
    return DateTime.fromJSDate(dateObj).toISO();
  });
  eleventyConfig.addFilter("readingTime", require("./filters/reading-time.js"));

  // Current year for footer
  eleventyConfig.addGlobalData("year", () => new Date().getFullYear());

  // Absolute URL for OpenGraph (base + path, handles relative images)
  eleventyConfig.addFilter("absoluteUrl", function (path, base) {
    if (!path) return base || "";
    if (typeof path === "string" && (path.startsWith("http://") || path.startsWith("https://"))) return path;
    const baseClean = (base || "").replace(/\/$/, "");
    const pathClean = (path || "").replace(/^\//, "/");
    return baseClean + (pathClean.startsWith("/") ? pathClean : "/" + pathClean);
  });

  // Create posts collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts")
      .sort((a, b) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0));
  });

  // Markdown configuration with Prism highlighting and custom toolbar
  let markdownIt = require("markdown-it");
  let markdownItPrism = require("markdown-it-prism");

  let options = {
    html: true,
    breaks: true,
    linkify: true
  };

  let markdownLib = markdownIt(options).use(markdownItPrism, {
    defaultLanguage: "text"
  });

  // Wrap fenced code blocks with a toolbar and copy button
  const defaultFence = markdownLib.renderer.rules.fence;
  markdownLib.renderer.rules.fence = function (tokens, idx, opts, env, self) {
    const token = tokens[idx];
    const lang = (token.info || "text").trim() || "text";

    const highlightedCode = defaultFence(tokens, idx, opts, env, self);

    return `<div class="code-block-wrapper">
  <div class="code-toolbar">
    <span class="language-label">${lang.toUpperCase()}</span>
    <button class="copy-button" onclick="copyCode(this)" title="Copy to clipboard">
      <i class="bi bi-clipboard"></i> Copy
    </button>
  </div>
  ${highlightedCode}
</div>`;
  };

  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: {
      input: ".",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};