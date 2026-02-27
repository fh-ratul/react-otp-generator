# React OTP Generator

Simple OTP generator built with React + Vite.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

This repository is configured for GitHub Pages with GitHub Actions.

- Push to `main`
- Workflow at `.github/workflows/deploy.yml` builds and deploys automatically
- Vite `base` is set to `/react-otp-generator/` in `vite.config.js`

After the first successful workflow run, your site will be available at:

`https://fh-ratul.github.io/react-otp-generator/`
