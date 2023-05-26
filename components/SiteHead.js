import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'

const SiteHead = ({ page, title, description, keywords }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{`Christian B. Martinez | ${page}`}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='canonical'
          href={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content={keywords} />
        <meta name='author' content='Christian B. Martinez' />
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/img/me-banner.webp`}
        />
      </Head>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-M592GMXCBQ'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-M592GMXCBQ');
  `}
      </Script>
    </>
  )
}

export default SiteHead
