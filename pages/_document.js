import { Html, Head, Main, NextScript, } from "next/document"

export default function MyDocument() {
  return (
    <Html lang="fa">
      <Head>
        <title> نهاد فرهنگی میرزا تازه گل خان </title>
        <meta name="description" content="Nuristani.info"/>
        <meta name="keywords" content="نورستانی, کلشه الا, کلښه الا, افغانستان, نورستان" />
        <link rel="icon" href="/logo_favicon.png" />
        <link rel="apple-touch-icon" href="/logo-favicon.png"></link>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
