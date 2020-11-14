import Document, { Html, Head, Main, NextScript } from "next/document";

const themeColor = "#14213d";
const title = "PM+BUD";

const icon = (transformation) =>
  `https://res.cloudinary.com/next-pmplusbud/${transformation}/new-logo/LOGO_MARGINS_s6ctti.png`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          {/* Essential */}
          {/* <meta httpEquiv="X-UA-Compatible" content="IE=edge" /> */}
          <link href="/manifest.json" rel="manifest" />

          {/* Android */}
          <meta name="theme-color" content={themeColor} />
          <meta name="mobile-web-app-capable" content="yes" />

          {/* iOS */}
          <meta name="apple-mobile-web-app-title" content={title} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          <meta name="nightmode" content="enable/disable" />
          <meta name="screen-orientation" content="portrait" />

          {/* Android */}
          {[16, 32, 48, 96, 128, 192, 512].map((dim) => (
            <link
              key={dim}
              href={icon(`w_${dim},h_${dim}`)}
              rel="icon"
              type="image/png"
              sizes={`${dim}x${dim}`}
            />
          ))}

          {/* Apple */}
          {/* There may be more icons needed */}
          <link href={icon("w_180,h_180")} rel="apple-touch-icon" />
          {[72, 76, 120, 144, 152].map((dim) => (
            <link
              key={dim}
              href={icon(`w_${dim},h_${dim}`)}
              rel="apple-touch-icon"
              sizes={`${dim}/${dim}`}
            />
          ))}

          <link
            href={icon(`c_fit,w_320,h_480`)}
            rel="apple-touch-startup-image"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
