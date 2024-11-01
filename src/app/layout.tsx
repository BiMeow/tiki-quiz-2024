/* eslint-disable @next/next/no-page-custom-font */
import FacebookPixel from "@/components/common/tracking-code/FacebookPixel";
import Providers from "@/components/context/compose/Providers";
import DefaultLayout from "@/components/layout/DefaultLayout";
import AppConfig from "@/config/AppConfig";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "swiper/css";
import "swiper/css/effect-fade";
import "./globals.scss";
import { headers } from "next/headers";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: any
) {
  // read route params
  const locale = params.locale;
  const headerList = headers();
  const currentUrl: any = headerList.get("x-current-url");

  let title: any = "Tiki quiz";
  let desc: any = "Tiki quiz";

  return {
    metadataBase: new URL(currentUrl),
    title: title,
    description: desc,

    openGraph: {
      title: title,
      description: desc,
      url: currentUrl,
      siteName: title,
      images: [
        {
          url: `${currentUrl}/images/thumbshare.jpg`, // Must be an absolute URL
          width: 1200,
          height: 630,
        },
      ],
      locale: AppConfig.locale,
      type: "website",
    },

    icons: AppConfig.icons,

    robots: {
      follow: true,
      index: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <Providers>
          <DefaultLayout>{children}</DefaultLayout>
        </Providers>
      </body>
      {/* <GoogleAnalytics gaId={'G-PYTMHM0JFC'} />
			<GoogleTagManager gtmId={'GTM-PZPH4PV'} />
			<FacebookPixel key={'726556831350736'} fbId={'726556831350736'} /> */}
    </html>
  );
}
