import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
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
      </body>
    </Html>
  );
}
