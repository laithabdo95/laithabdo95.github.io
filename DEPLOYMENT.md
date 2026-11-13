# Portfolio setup and deployment

The original README.md is preserved unchanged. This project targets https://laithabdo95.github.io/ using React, TypeScript, Vite, and Tailwind CSS.

## Preview locally

Use Node.js 22.12 or newer, then run `npm ci` and `npm run dev`.
Run `npm run build` for TypeScript validation and a production build. `npm run preview` serves that build.

## Publish

1. In laithabdo95/laithabdo95.github.io, open Settings → Pages and choose **GitHub Actions** as the source.
2. Review the portfolio, contact email, and public resume before publishing. The supplied resume includes your phone number and email.
3. From this checkout, review `git status`, then commit the new files and push to `main`. The workflow runs automatically; it can also be started from Actions.
4. Wait for the Deploy portfolio to GitHub Pages workflow to finish, then visit https://laithabdo95.github.io/.

Nothing has been pushed or published by the project preparation process. The workflow assumes `main`; update its branch filter if the repository default changes. Root base `/` is intentional for this user-site repository.

## Editing

- Career, skills, links, and case-study placeholders: `src/main.tsx`.
- Responsive design: `src/style.css` (Tailwind is enabled through the Vite plugin).
- Downloadable resume: `public/Laith_Abdo_iOS_Lead_Resume.pdf`.
- SEO: `index.html`.

Career details and contact email come from the resume attached to the referenced chat. LinkedIn could not be read, so no claims were inferred from it. The phone illustration and project artwork are original CSS illustrations, not screenshots or client media. Project cards are explicitly planned case studies, not claims of shipped projects. Add only approved project descriptions, outcomes, screenshots, and links.
