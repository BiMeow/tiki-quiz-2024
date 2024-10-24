import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SF_PRO_ROUNDED: `'SF Pro Rounded', sans-serif`,
      },
      screens: {
        "dt-exl": { min: "1660px" },
        "dt-l-min": { min: "1366px" },
        "dt-xl": { max: "1660px" },
        "dt-l": { max: "1440px" },
        "dt-sm": { max: "1366px" },
        "tl-l": { max: "1280px" },
        "tl-p": { max: "1000px" },
        mb: { max: "767px" },
      },

      colors: {
        blue: "#0A68FF",
        yellow: "#FFB700",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
