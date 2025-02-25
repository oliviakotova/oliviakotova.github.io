import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* PWA manifest */}
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#000000" />
          {/* Add any other global head elements here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
