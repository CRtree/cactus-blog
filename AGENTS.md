# AGENTS.md

Guidance for AI coding agents working in this repository. Read this before making
changes so you don't break the deploy or re-discover project facts.

## What this project is

Samuel Zuo's personal website — <https://samuelzuo.me>. It's an Astro static site
whose home page lists the apps and tools Samuel builds (Sundial, Youtube Scroll
Saver, JetBrains plugins, etc.). It started from the "cactus" Astro theme, so a
blog (`/posts`), `/about`, and `/tags` still exist in the code but are **hidden**
(not in the nav and excluded from the sitemap).

## Quick facts

|                       |                                                                            |
| --------------------- | -------------------------------------------------------------------------- |
| Framework             | Astro `4.8.2`, static output, TypeScript strict                            |
| Styling               | Tailwind CSS `3.4` (+ `@tailwindcss/typography`)                           |
| Content               | Astro content collections (`post`) + MDX                                   |
| Extras                | `astro-expressive-code`, `astro-icon`, `satori` OG images, Pagefind search |
| Package manager       | **pnpm** on the deploy builder (pnpm 8.7.1); `npm` also works locally      |
| Lockfiles             | `pnpm-lock.yaml` (**lockfileVersion 6.0**) **and** `package-lock.json`     |
| Node on deploy        | **18.17.1** (local Node 23 also builds fine)                               |
| Git remote            | `https://github.com/CRtree/cactus-blog.git` (repo name is legacy)          |
| Default branch        | `master`                                                                   |
| Hosting               | Cloudflare Pages project `samuel-blog` (subdomain `cactus-blog.pages.dev`) |
| Custom domain         | `samuelzuo.me` (site URL is set in `astro.config.ts`)                      |
| Cloudflare account ID | `13ccd36b14ae9ce7eef9d22f2bae1835`                                         |
| Build command (on CF) | `npm run build`                                                            |
| Output dir            | `dist`                                                                     |

> `netlify.toml` is a leftover stub. The site is **not** deployed on Netlify.

## Commands

```bash
pnpm install --frozen-lockfile   # install (or: npm ci)
npm run dev                      # local dev server
npm run check                    # astro check (types/content)
npm run build                    # astro check && astro build, then pagefind postbuild
npm run preview                  # preview the built site
npm run format                   # prettier (incl. astro + tailwind class sorting)
```

Always run `npm run check` and `npm run build` before committing.

## Directory map

```
astro.config.ts          # site URL, integrations, sitemap filter, vite tweaks
package.json             # scripts, deps, pnpm.overrides
pnpm-lock.yaml           # MUST stay lockfileVersion 6.0 (see Gotchas)
src/
  pages/
    index.astro          # HOME PAGE — "Build Applications" list lives here
    about.astro          # hidden from nav/sitemap, still built
    sundial/             # Sundial product pages (index, privacy, support)
    posts/               # blog list + post pages (hidden)
    tags/                # tag pages (hidden)
    og-image/[slug].png.ts  # satori-generated social images
    404.astro, rss.xml.ts
  content/
    config.ts            # post collection zod schema
    post/                # blog posts as .md/.mdx (directory doesn't exist yet)
  layouts/               # Base.astro, BlogPost.astro
  components/            # UI, incl. layout/{Header,Footer}.astro, sundial/
  site.config.ts         # site metadata + menu links
  data/post.ts           # post query helpers
  utils/                 # date, toc, webmentions, etc.
public/                  # icons, manifest, robots.txt
.github/workflows/ci.yml # CI: pnpm + astro check + build on master
```

Path alias: `@/*` maps to `src/*` (e.g. `@/layouts/Base.astro`, `@/site-config`).

## Common tasks

### Update the "Build Applications" list on the home page

Edit the `projects` array in `src/pages/index.astro`. Each entry is
`{ title, desc, href }`; array order is display order. Links whose `href` starts
with `http` automatically get `target="_blank"` + `rel="noopener noreferrer"`.
Prefer an official product/store page over a GitHub repo when the app has one
(e.g. Youtube Scroll Saver → its Chrome Web Store listing).

### Add or edit a blog post

Add a Markdown/MDX file under `src/content/post/` (create the directory first —
it doesn't exist yet). The frontmatter schema is in `src/content/config.ts` (`title`, `description` 50–160 chars, `publishDate`,
optional `tags`, `coverImage`, `draft`, `updatedDate`). Drafts are hidden in
production. Note the blog is currently hidden from nav and sitemap.

### Edit Sundial pages

`src/pages/sundial/{index,privacy,support}.astro`. Screenshots live in
`src/assets/sundial/`.

## Deployment

Cloudflare Pages is **Git-connected** to this repo's `master` branch: pushing to
`master` automatically kicks off a production build and publishes it to
`samuelzuo.me`. There is usually no manual deploy step.

### Normal flow

```bash
git add -A && git commit -m "..."
git push origin master
```

### Verify a deployment

Wrangler is already authenticated via OAuth (creds at
`~/.wrangler/config/default.toml`; check with `npx wrangler whoami`).

```bash
# List recent deployments and their status
npx wrangler pages deployment list --project-name samuel-blog
```

The list's `Status` can read `Active` while a build is still running, so to get a
definitive result, inspect the deployment's build stages:

```bash
TOKEN=$(grep oauth_token ~/.wrangler/config/default.toml | cut -d'"' -f2)
ACC=13ccd36b14ae9ce7eef9d22f2bae1835
DEP=<deployment-id>
curl -s "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/samuel-blog/deployments/$DEP" \
  -H "Authorization: Bearer $TOKEN" | python3 -m json.tool
```

Then confirm the live site actually changed (Cloudflare's cache is `DYNAMIC`, so a
cache-buster is a good habit):

```bash
curl -s "https://samuelzuo.me/?cb=$(date +%s)" | grep "some-new-string"
```

### Manual deploy / rollback

```bash
# Build locally, then push the dist/ folder directly to production
npm run build
npx wrangler pages deploy dist --project-name samuel-blog --branch master
```

Rollback: Cloudflare dashboard → Workers & Pages → `samuel-blog` → Deployments →
choose a previous good deployment → Rollback. Prefer this over force-pushing.

## Gotchas / constraints

- **Keep `pnpm-lock.yaml` at `lockfileVersion 6.0`.** The deploy builder uses pnpm
  8.7.1 on Node 18.17.1. A v9 lockfile is ignored, the builder resolves deps
  fresh, and it pulls Node-22-only packages that break the Astro 4.8 stack. Do not
  regenerate this lockfile with pnpm 9+. If deps change, sync it from the npm
  lockfile (`pnpm import`) rather than resolving fresh.
- **Deploy runs Node 18.17.1.** Don't add dependencies or use APIs that require
  Node ≥ 20/22.
- **`astro-icon` is pinned to `1.1.0`** and `pnpm.overrides` pins `sitemap` to
  `7.1.1` in `package.json` for the same Node 18 reason. Don't loosen these.
- The builder installs with **pnpm** (it detects `pnpm-lock.yaml`) but runs the
  build with `npm run build`. Keep both lockfiles consistent when changing deps.
- **Indentation is tabs** (see `.prettierrc.js`); `prettier-plugin-tailwindcss`
  sorts Tailwind classes. Run `npm run format`.
- Pagefind indexes only elements marked `data-pagefind-body`; currently only the
  home page has it, so the search index contains 1 page.
- The sitemap intentionally filters out `/about`, `/posts`, and `/tags`
  (`astro.config.ts`). Menu links are defined in `src/site.config.ts`.

## Conventions

- Use the `@/` import alias instead of long relative paths.
- Match the existing Astro component style (frontmatter at top, Tailwind utility
  classes, `PageLayout` wrapper from `@/layouts/Base.astro`).
- Keep changes focused; rebuild and verify before pushing to `master` (it deploys
  straight to production).
