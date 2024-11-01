// FIXME: Update this configuration file based on your project information
import { headers } from "next/headers";

const headerList = headers();
const currentUrl = headerList.get("x-current-url");

const AppConfig = {
  getBaseUrl: (url = "") => {
    // remove it if config trailingSlash: true, on next.config
    if (url?.endsWith("/")) {
      url = url.slice(0, -1);
    }
    return process.env.APP_URL
      ? `${process.env.APP_URL}${url}`
      : `${currentUrl}${url}`;
  },

  getBaseAssetUrl: (path = "") => {
    return `${process.env.PUBLIC_BASE_ASSET_URL || ""}${path}?v=${process.env.PUBLIC_ASSET_VERSION || ""}` as string;
  },

  getApiBaseUrl: (path = "") => {
    return `${process.env.NEXT_PUBLIC_BASE_API_URL || ""}${path}` as string;
  },

  locale: "vi",

  icons: {
    favicon: "/images/favicon.png",
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
    other: {
      rel: "images/favicon.png",
      url: "/images/favicon.png",
    },
  },
};

export default AppConfig;
