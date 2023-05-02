import Head from 'next/head'
import { useRouter } from 'next/router'

const SiteHead = ({ page, title, description, keywords }) => {
  const router = useRouter()
  return (
    <Head>
      <title>{`Christian B. Martinez | ${page}`}</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
      <link
        rel='canonical'
        href={`https://www.christianbmartinez.com${router.asPath}`}
      />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='keywords' content={keywords} />
      <meta name='author' content='Christian B. Martinez' />
      <meta name='robots' content='index, follow' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='/img/me-banner.jpg' />
    </Head>
  )
}

export default SiteHead
