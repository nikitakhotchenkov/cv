# Nikita Khotchenkov CV

Bilingual CV web application (EN/UA) built with React + Vite and deployed via GitHub Pages.

## Scope

- Locale switch (`en`, `uk`) with persisted preference
- Theme switch (light/dark) with system-default fallback
- One-page PDF export per locale from the same content source
- Print profile aligned to the original CV section structure

## Stack

- React 18
- TypeScript
- Vite 5
- Playwright (PDF generation)
- GitHub Actions (Pages deployment)

## Project Structure

- `src/content/cv.en.ts` - English CV content
- `src/content/cv.uk.ts` - Ukrainian CV content
- `src/content/types.ts` - shared content contracts
- `src/App.tsx` - application layout and locale/theme behavior
- `src/styles.css` - screen + print styles
- `scripts/export-pdf.mjs` - EN/UA PDF export pipeline
- `.github/workflows/deploy.yml` - CI build and Pages deployment

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run pdf:export
```

## PDF Outputs

Export command produces:

- `public/cv-en.pdf`
- `public/cv-uk.pdf`
- `Nikita_Khotchenkov_CV_EN.pdf`
- `Nikita_Khotchenkov_CV_UA.pdf`

## Deployment

- Deployment target: GitHub Pages project site (`https://<user>.github.io/<repo>/`)
- CI entrypoint: `.github/workflows/deploy.yml`
- Pages source must be set to `GitHub Actions`

## Assets

- Website profile photo: `public/profile.jpg`
- Original baseline file retained: `Nikita_Khotchenkov_CV.pdf`
