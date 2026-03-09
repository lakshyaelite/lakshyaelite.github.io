# Blog Cover Images

This Eleventy blog supports cover images for blog posts. Cover images appear on:

- Individual post pages (at the top of the article)
- Blog listing page (`/blog/`)
- Home page blog cards

## How to Add Cover Images

1. **Add images to the `images/` directory**
   - Place your cover images in the `images/` folder
   - Recommended size: 800x400px for optimal display
   - Supported formats: JPG, PNG, SVG, GIF, WebP

2. **Add cover field to post front matter**
   ```yaml
   ---
   title: "Your Post Title"
   description: "Post description"
   date: 2026-03-07
   layout: layouts/post.njk
   tags: post
   cover: /images/your-cover-image.jpg
   ---
   ```

3. **Build the site**
   ```bash
   npm run build
   ```

## Cover Image Guidelines

- **Aspect Ratio**: 2:1 (width:height) works best
- **File Size**: Keep under 500KB for fast loading
- **Alt Text**: Images automatically use the post title as alt text
- **Optional**: Posts without cover images display normally without images

## Example

```yaml
---
title: "Building Accessible Web Components"
description: "Learn how to create web components that work for everyone"
date: 2026-03-03
layout: layouts/post.njk
tags: post
cover: /images/web-components-cover.jpg
---
```

The cover image will automatically appear in all post displays throughout the site.