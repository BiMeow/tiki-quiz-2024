// FIXME: Update this configuration file based on your project information

const AppConfig = {
  getBaseUrl: (url = "") => {
    // remove it if config trailingSlash: true, on next.config
    if (url?.endsWith("/")) {
      url = url.slice(0, -1);
    }
    return process.env.APP_URL
      ? `${process.env.APP_URL}${url}`
      : `http://localhost:3000${url}`;
  },

  getBaseAssetUrl: (path = "") => {
    return `${process.env.PUBLIC_BASE_ASSET_URL || ""}${path}?v=${process.env.PUBLIC_ASSET_VERSION || ""}` as string;
  },

  getApiBaseUrl: (path = "") => {
    return `${process.env.NEXT_PUBLIC_BASE_API_URL || ""}${path}` as string;
  },

  locale: "vi",

  icons: {
    favicon: "/images/favicon.jpg",
    icon: "/images/favicon.jpg",
    shortcut: "/images/favicon.jpg",
    apple: "/images/favicon.jpg",
    other: {
      rel: "images/favicon.jpg",
      url: "/images/favicon.jpg",
    },
  },
};

export default AppConfig;
