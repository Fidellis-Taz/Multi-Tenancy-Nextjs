import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import getConfig from "next/config";

import styles from "../../styles/Home.module.css";
import packageJson from "../../package.json";

export default function Home({ pseudoLocale }) {
  const { locales, locale, defaultLocale } = useRouter();
  const {
    publicRuntimeConfig: { sites, pseudoLocales },
  } = getConfig();

  const nextLocale = pseudoLocales.find(
    (otherLocale) => otherLocale !== pseudoLocale
  );
  const nextSiteNr = locale === "site2" ? 1 : 2;

  const siteAndLocale = sites[locale] && sites[locale].locales[pseudoLocale];

  return (
    <div className={[styles.container, locale, pseudoLocale].join(" ")}>
      <Head>
        <title>Multi Domain SSG </title>
        <meta name="description" content={packageJson.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {siteAndLocale
            ? siteAndLocale.title
            : `Site not found: '${locale}</strong>`}
        </h1>
        {siteAndLocale && (
          <p className={styles.description}>{siteAndLocale.description}</p>
        )}

        <p className={styles.description}>{packageJson.description}</p>
      </main>
    </div>
  );
}

export async function getStaticProps({
  params: { pseudoLocale = "en" },
  locale = "site1",
}) {
  return {
    props: {
      pseudoLocale,
    },
    revalidate: 60, // Seconds. This refresh time could be longer depending on how often data changes.
  };
}

export async function getStaticPaths({ locales }) {
  return {
    paths: [{ params: { pseudoLocale: "en" }, locale: "site1" }],
    fallback: true, // true -> build page if missing, false -> serve 404
  };
}
