# Mediocre Engineering: static site

A plain Jekyll site that GitHub Pages builds by itself. No Node, no .NET, no build step of your own.

- `index.html` is the landing page with the quotes (they live in `_data/quotes.yml`, one per line).
- `blog/index.html` lists every post in `_posts/`.
- Styling is in `assets/css/style.css`, quote animation and beach sounds in `assets/js/quotes.js`.

## Writing a post

1. Add `_posts/YYYY-MM-DD-some-title.md`. Start from `_drafts/example-post.md`.
2. Commit and push. GitHub Pages rebuilds in a minute or so.

Front matter needs only `title`. `description` is optional and shows in the blog list.

## Beach sounds

Set `beach_video_id` in `_config.yml` to the YouTube video ID (the part after `v=`).
Browsers won't autoplay sound, so the page shows a "Havsljud" button that starts and pauses it.

## GitHub Pages and your domain

1. Repo → Settings → Pages → Source: "Deploy from a branch", pick the branch and the `/docs` folder.
2. Custom domain: type the domain there (it adds a `docs/CNAME` file), then at your DNS provider add
   - for `www.example.com`: a `CNAME` record pointing to `<your-github-username>.github.io`
   - for the bare `example.com`: `A` records to 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
3. Tick "Enforce HTTPS" once the certificate is issued.

## Preview locally (optional)

```bash
gem install jekyll kramdown-parser-gfm webrick
```

```bash
jekyll serve -s docs --drafts
```
