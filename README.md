# eggs.email studio site

Marketing site for eggs.email inspired by Spiral Capital's structured presentation while using original content, typography, and spacing choices tailored to the studio.

## Tech stack

- [Next.js 16 App Router](https://nextjs.org/docs/app) with TypeScript
- Tailwind CSS (v4) for utility-first styling
- Contentlayer + MDX to manage News and Article entries
- `next-seo` for default SEO meta tags
- `framer-motion` for light interaction details

## Local development

```bash
npm install
npm run dev
```

The `dev` script runs Contentlayer in watch mode and starts Next.js on [http://localhost:3000](http://localhost:3000).

## Adding MDX content

Content lives under the `content/` directory:

- `content/news/*.mdx` — frontmatter requires `title`, `date`, `summary`, and `tags`
- `content/articles/*.mdx` — frontmatter requires `title`, `date`, and `summary`

After adding or editing files run:

```bash
npx contentlayer build
```

This regenerates the `.contentlayer/` cache used by the application.

## Adding imagery

The repository intentionally excludes binary assets. When working on visuals:

1. Save images locally under `public/` without committing them to Git.
2. Update components to reference those local paths or remote URLs as needed.
3. Before running `git push`, double-check `git status` and ensure no binary files are staged.
4. Optionally use `git update-index --skip-worktree` or `.git/info/exclude` for long-lived local assets.

This workflow keeps the upstream repository free of binaries while allowing CodeX teams to manage imagery locally.

## Running a production build

```bash
npm run build
npm start
```

`npm run build` runs Contentlayer followed by `next build`. Use `npm start` to launch the production server locally.

## Deploying to Vercel

1. Push the repository to your Git provider.
2. Create a new project on [Vercel](https://vercel.com/) and import the repo.
3. Set the build command to `npm run build` and output directory to `.next`.
4. Add any necessary environment variables (none are required for the mock APIs).
5. Deploy — Vercel will install dependencies, build with Contentlayer, and serve the production build.

## Mock APIs

- `GET /api/github-stars` — Edge runtime handler fetching the public star count for `vercel/next.js`.
- `POST /api/contact` — Accepts JSON payloads and returns a success response (email sending is mocked).
