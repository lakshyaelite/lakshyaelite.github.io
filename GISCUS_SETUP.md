# Giscus Comments Setup

This site uses [Giscus](https://giscus.app/) for comments, which integrates GitHub Discussions with your static site.

## Setup Instructions

1. **Enable GitHub Discussions** on your repository:
   - Go to your repository settings
   - Scroll down to "Features"
   - Check "Discussions"

2. **Install Giscus app**:
   - Visit [https://github.com/apps/giscus](https://github.com/apps/giscus)
   - Click "Install" and select your repository

3. **Configure Giscus**:
   - Go to [https://giscus.app/](https://giscus.app/)
   - Enter your repository details
   - Choose discussion category (create one if needed)
   - Copy the generated script configuration

4. **Update the script** in `_includes/layouts/post.njk`:
   - Replace `YOUR_REPO_ID` with your actual repository ID
   - Replace `YOUR_CATEGORY_ID` with your discussion category ID
   - Adjust other settings as needed (theme, language, etc.)

## Configuration Options

- `data-repo`: Your GitHub username/repository
- `data-repo-id`: Repository ID (found in Giscus app)
- `data-category`: Discussion category name
- `data-category-id`: Category ID (found in Giscus app)
- `data-mapping`: How to map discussions to pages (pathname, URL, title, etc.)
- `data-theme`: light, dark, or custom
- `data-lang`: Language for the interface

## Example Configuration

```html
<script src="https://giscus.app/client.js"
        data-repo="username/repository"
        data-repo-id="R_kgDOXXXXXXX"
        data-category="Comments"
        data-category-id="DIC_kwDOXXXXXXX"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
```

## Troubleshooting

- Make sure GitHub Discussions are enabled
- Verify the repository ID and category ID are correct
- Check that the Giscus app is installed on your repository
- Ensure the discussion category exists and is public