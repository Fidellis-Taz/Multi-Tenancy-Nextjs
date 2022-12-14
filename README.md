# nextjs-multi-domain-locale

> Multiple domains and languages on the same Next.js site

This is an example of hosting **multiple domains on the same Next.js site** (while maintaining **multiple languages** and [static site generation (SSG, getStaticProps)](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)), using [Next.js

## Concept

- Domain mapped to Next.js’ i18n `locale` is used to determine the _site_.
- _Language_ is instead handled via a `pseudoLocale` prop (pages inside a `/[pseudoLocale]` folder).
- A _redirect_ from `/` to `/en`.
- TODO: Automatic language detection using the [Accept-Language header](https://nextjs.org/docs/advanced-features/i18n-routing#automatic-locale-detection).

See `next.config.js` for setup.

## Set Up

```bash
git clone https://github.com/Fidellis-Taz/Multi-Tenancy-Nextjs.git
```

### Install dependencies

```bash
npm install
```

#### run project

```bash
npm run dev
```

## test the project

http://localhost:3301/site1/en

http://localhost:3301/site2/en
