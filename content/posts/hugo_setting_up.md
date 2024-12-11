+++
title = "Setting Up Your Website with Hugo"
date = "2024-12-11T02:45:03+01:00"
#dateFormat = "2006-01-02" # This value can be configured for per-post date formatting
author = "jiwaszki"
authorTwitter = "" #do not include @
cover = ""
tags = ["hugo", "website"]
keywords = ["hugo", "website"]
description = ""
showFullContent = false
readingTime = false
hideComments = false
+++

Setting up your personal page can be a challenging yet rewarding experience. I wanted to share my thoughts in a blog and experimented with various approaches and frameworks. Not all of them suited my needs. In the end, I’m just a _chill_ engineer who focuses on performance and memory optimization. Finally, I discovered `hugo`. This framework makes it easy to create a fast and customizable static site. **Most importantly, it allows me to copy directly from my Obsidian notes while retaining most of the styling!** Here's a short guide to get you started.

## Getting Started

To install `hugo` on macOS (my primary OS for writing), use `Homebrew`:
```shell
brew install hugo
```

To create and set up your site:
```shell
# Getting Hugo ready (replace all jiwaszki-based names!):
hugo new site jiwaszki.github.io
cd jiwaszki.github.io
git init
git submodule add -f https://github.com/panr/hugo-theme-terminal.git themes/terminal
echo "theme = 'terminal'" >> hugo.toml

# Connect my repository:
git remote add origin https://github.com/jiwaszki/jiwaszki.github.io.git
# Important if you have anyhting there already like README.md
git pull origin main
```

To run the site generation and server locally for previewing, use:
```shell
hugo server
```

Now open your browser and go to `http://localhost:1313/`. The page should be ready for preview!

## Setting Up Comments with Giscus

Set up comments with [Giscus](https://giscus.app/):

1. Generate the comment integration code using `Giscus`.
2. Create a `layouts/partials/comments.html` file and paste the generated code.

You can hide comments for individual posts by editing the header metadata:

```markdown
hideComments = true  # Use false to enable comments
```

_(TODO: I need to change the style of comments section to match the page 👀)_

## Adding a Search Bar

Make your site easier to navigate by adding a search bar. Here’s how:

1. **Ensure you have Node.js installed**

    Install Node.js from [Node.js Downloads](https://nodejs.org/en/download/package-manager) or via `Homebrew`. Remember to export it to the `PATH`:
    ```shell
    `export PATH="/opt/homebrew/opt/node@22/bin:$PATH"`
    ```
2. **Add Pagefind for search functionality**

    Insert the following code into your site to include the `pagefind` script and UI:
    ```html
    <link href="/pagefind/pagefind-ui.css" rel="stylesheet" />
	<script src="/pagefind/pagefind-ui.js"></script>

	<div id="search" class="" style=""></div>
	<script>
	    window.addEventListener("DOMContentLoaded", (event) => {
	        new PagefindUI({
	            element: "#search",
	            showSubResults: false,
	        });
	    });
	</script>
    ```
3. **Build and Serve**

    Update the search index and serve the site:
	```shell
	hugo && npx pagefind --site "public"  # updates indexes
	hugo server -D  # alternative use `hugo server`

	# Combined for convinience:
	hugo && npx pagefind --site "public" && hugo server -D
	```

Your search bar should now be visible and functional.

## Create a Simple Post

To create a post, run:

```shell
hugo new content content/posts/test-post.md
```

... and that's about it. Use Markdown to add the content... done!

## How Was It?

I hope this guide makes setting up the site less daunting. Now it's time to fill the blank pages. If you have any questions or want to share your experiences, drop a comment (in the Giscus below ⬇️).
