import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" style={{ colorScheme: "dark" }} data-theme="dark">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* {process.env.NODE_ENV === "production" ? ( */}
        {/* <> */}
        <Script
          id="gtag_src"
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RYZZL8PZG7"
        />
        <Script
          id="gtag_init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-RYZZL8PZG7');
                `,
          }}
        />
        {/* </> */}
        {/* ) : null} */}
      </body>
    </Html>
  );
}
