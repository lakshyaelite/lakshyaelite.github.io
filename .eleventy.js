module.exports = function(eleventyConfig) {

  /* -----------------------------
  Passthrough files
  ----------------------------- */

  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("lakshya.jpg");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.jpeg");
  eleventyConfig.addPassthroughCopy("*.gif");
  eleventyConfig.addPassthroughCopy("*.svg");


  /* -----------------------------
  Filters
  ----------------------------- */

  eleventyConfig.addFilter(
    "dateDisplay",
    require("./filters/date-display.js")
  );

  eleventyConfig.addFilter(
    "readingTime",
    require("./filters/reading-time.js")
  );

  eleventyConfig.addFilter("dateToRfc3339", function(dateObj) {
    const { DateTime } = require("luxon");
    return DateTime.fromJSDate(dateObj).toISO();
  });


  /* -----------------------------
  Absolute URL filter (FIX)
  ----------------------------- */

  eleventyConfig.addFilter("absoluteUrl", function(path, base) {

    if (!path) return base || "";

    if (
      typeof path === "string" &&
      (path.startsWith("http://") || path.startsWith("https://"))
    ) {
      return path;
    }

    const baseClean = (base || "").replace(/\/$/, "");
    const pathClean = (path || "").replace(/^\//, "");

    return `${baseClean}/${pathClean}`;
  });


  /* -----------------------------
  Global data
  ----------------------------- */

  eleventyConfig.addGlobalData(
    "year",
    () => new Date().getFullYear()
  );


  /* -----------------------------
  Posts collection
  ----------------------------- */

  eleventyConfig.addCollection("posts", function(collectionApi) {

    return collectionApi
      .getFilteredByTag("posts")
      .sort((a, b) => b.date - a.date);

  });


  /* -----------------------------
  Markdown setup
  ----------------------------- */

  const markdownIt = require("markdown-it");
  const markdownItPrism = require("markdown-it-prism");
  const markdownItAttrs = require("markdown-it-attrs");

  const markdownLib = markdownIt({
    html: true,
    linkify: true
  })
  .use(markdownItPrism, {
    defaultLanguage: "text"
  })
  .use(markdownItAttrs);   // enables {: .prompt-tip }

  /* Convert prompt blocks to Bootstrap alerts with icons */

  const defaultBlockquoteOpen =
    markdownLib.renderer.rules.blockquote_open ||
    function () { return "<blockquote>"; };

  markdownLib.renderer.rules.blockquote_open = function(tokens, idx) {

    const token = tokens[idx];
    const cls = token.attrGet("class");

    if (!cls) {
      return defaultBlockquoteOpen(tokens, idx);
    }

    if (cls.includes("prompt-tip")) {
      return `
  <div class="alert alert-info d-flex align-items-start" role="alert">
  <i class="bi bi-lightbulb-fill me-2 mt-1"></i>
  <div>
  `;
    }

    if (cls.includes("prompt-warning")) {
      return `
  <div class="alert alert-warning d-flex align-items-start" role="alert">
  <i class="bi bi-exclamation-triangle-fill me-2 mt-1"></i>
  <div>
  `;
    }

    if (cls.includes("prompt-danger")) {
      return `
  <div class="alert alert-danger d-flex align-items-start" role="alert">
  <i class="bi bi-x-octagon-fill me-2 mt-1"></i>
  <div>
  `;
    }

    if (cls.includes("prompt-info")) {
      return `
  <div class="alert alert-primary d-flex align-items-start" role="alert">
  <i class="bi bi-info-circle-fill me-2 mt-1"></i>
  <div>
  `;
    }

    return defaultBlockquoteOpen(tokens, idx);
  };

  markdownLib.renderer.rules.blockquote_close = function() {
    return `
  </div>
  </div>
  `;
  };


  /* -----------------------------
  Code block toolbar
  ----------------------------- */

  const defaultFence = markdownLib.renderer.rules.fence;

  markdownLib.renderer.rules.fence = function(tokens, idx, opts, env, self) {

    const token = tokens[idx];
    const lang = (token.info || "text").trim() || "text";

    const highlightedCode = defaultFence(tokens, idx, opts, env, self);

    return `
<div class="code-block-wrapper">
  <div class="code-toolbar">
    <span class="language-label">${lang.toUpperCase()}</span>
    <button class="copy-button" onclick="copyCode(this)" title="Copy to clipboard">
      <i class="bi bi-clipboard"></i> Copy
    </button>
  </div>
  ${highlightedCode}
</div>
`;

  };

  eleventyConfig.setLibrary("md", markdownLib);


  /* -----------------------------
  Eleventy config
  ----------------------------- */

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