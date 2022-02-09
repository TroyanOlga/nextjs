import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'

const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div className='container'>
        <h1 className='header'>{slug}</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </div>
    <style jsx>{`
      .container {
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
      }
      a {
        color: #0070f3;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      h1, h2 {
        font-size: 4rem;
      }
    `}</style>
    </>

  )
}

export default Post
