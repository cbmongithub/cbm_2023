import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'

const SiteHead = ({ page, title, description, keywords }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <title>{`Christian B. Martinez | ${page}`}</title>
        <meta
          name='description'
          content={description}
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <link
          rel='canonical'
          href={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <meta
          name='keywords'
          content={keywords}
        />
        <meta
          name='author'
          content='Christian B. Martinez'
        />
        <meta
          name='robots'
          content='index, follow'
        />
        <meta
          property='og:title'
          content={title}
        />
        <meta
          property='og:description'
          content={description}
        />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/img/me-banner.webp`}
        />
      </Head>
    </>
  )
}

export default SiteHead
