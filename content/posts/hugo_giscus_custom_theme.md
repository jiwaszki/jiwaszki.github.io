+++
title = "Clash of Styles: Giscus Meets Hugo in Dynamic Fashion"
date = "2024-12-15T05:07:57+01:00"
#dateFormat = "2006-01-02" # This value can be configured for per-post date formatting
author = "jiwaszki"
authorTwitter = "" #do not include @
cover = ""
tags = ["hugo", "website", "giscus"]
keywords = ["hugo", "website", "giscus"]
description = ""
showFullContent = false
readingTime = false
hideComments = false
+++

I wanted to make my Hugo site more interactive, so I added comments. At first, the default Giscus styles didn’t match my site, which was a bit annoying. I couldn’t find a solution online that worked out of the box, so I figured out how to customize them so they matched my theme. Here's how I set it up and some tips to make it work smoothly, including live preview updates to instantly see style changes in action.

---

## Adjusting Giscus in Hugo

Adjusting Giscus to fit your needs involves configuring server headers, tweaking styles, and making it easier to use. Below is a step-by-step guide:

### Update Your Server Configuration

Add the following settings to your Hugo configuration file (e.g., `hugo.toml`) to ensure Giscus will be allowed to render:

```toml
[server]
	[[server.headers]]
		for = "/*"

	[server.headers.values]
		# Alternatively use "*" as a workaround when multiple origins are required:
		Access-Control-Allow-Origin = "https://giscus.app"

# Giscus parameters
[params.giscus]

repo = "jiwaszki/jiwaszki.github.io"
repo_id = "R_kgDONabawQ"
category = "Announcements"
category_id = "DIC_kwDONabawc4ClBlj"
mapping = "pathname"
strict = "0"
reactions_enabled = "1"
emit_metadata = "0"
input_position = "top"
lang = "en"
loading = "lazy"
```

This setup allows the browser to exchange data with external scripts from Giscus and removes hardcoded values in the `comments.html` code.

### Embed Giscus in Your Layout

Add the following script to your Hugo theme's layout file (e.g., `layouts/partials/comments.html`):

```html
{{ $giscusCSS := resources.Get "css/giscus.css" }}
<script
src="https://giscus.app/client.js"
data-repo={{ .Site.Params.giscus.repo }}
data-repo-id={{ .Site.Params.giscus.repo_id }}
data-category={{ .Site.Params.giscus.category }}
data-category-id={{ .Site.Params.giscus.category_id }}
data-mapping={{ .Site.Params.giscus.mapping }}
data-strict={{ .Site.Params.giscus.strict }}
data-reactions-enabled={{ .Site.Params.giscus.reactions_enabled }}
data-emit-metadata={{ .Site.Params.giscus.emit_metadata }}
data-input-position={{ .Site.Params.giscus.input_position }}
data-theme="{{ $giscusCSS.Permalink }}"
data-lang={{ .Site.Params.giscus.lang }}
data-loading={{ .Site.Params.giscus.loading }}
crossorigin="anonymous"
async
></script>
```

This code dynamically injects Giscus using the parameters set in `hugo.toml`. Ensure you include any custom CSS (in my case, `giscus.css`) to style the comments section.

---

## Running Your Hugo Site

Once Giscus is set up, use the following commands to build and serve your Hugo site with enhanced functionality:

```shell
# Run this command once to allow the Hugo server to trust your local development environment:
hugo server trust

# New "go-to" command to run the server:
hugo && npx pagefind --site "public" && hugo server --tlsAuto --ignoreCache --disableFastRender -D
```

### Key Notes:

1. **Secure Connections:** Use `--tlsAuto` to enforce the new HTTPS protocol for your local development server. Open your browser and go to `https://localhost:1313/` to check it out.
2. **Refresh for CSS:** If your custom CSS doesn’t show right away, **just refresh the page and it’ll load.**
3. **Caching and Fresh Builds:** The `--ignoreCache` and `--disableFastRender` options ensure the site is freshly built every time you make a change, so you can see your updates immediately.

---

## Wrapping Up

Adding Giscus to my Hugo site has been a game-changer. It not only gave me a great commenting system but also allowed me to tweak and customize it to fit perfectly with my theme. The steps I shared here should make it easier for you to do the same.

You can let me know in the comments if there's anything you'd like me to explain further! 🚀
