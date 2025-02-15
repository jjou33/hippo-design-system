import { vars } from "@hippods/themes";
import type { Config } from "tailwindcss";

export const shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
  base: "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
  md: "2px 2px 4px -1px rgba(0, 0, 0, 0.06), 5px 5px 6px -1px rgba(0, 0, 0, 0.10)",
  lg: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
  xl: "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
  "2xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "0px 2px 4px 0px rgba(0, 0, 0, 0.06) inset",
  darkLg:
    "0px 15px 40px 0px rgba(0, 0, 0, 0.40), 0px 5px 10px 0px rgba(0, 0, 0, 0.20), 0px 0px 0px 1px rgba(0, 0, 0, 0.10)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  custom: "3px 5px 5px rgba(0, 0, 0, 0.1), -5px -1px 15px rgba(0, 0, 0, 0.1)", // 균형 잡힌 상하좌우
  "custom-dark":
    "3px 5px 5px rgba(255, 255, 255, 0.1), -5px -1px 15px rgba(255, 255, 255, 0.1)", // 다크 모드
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      lg: "780px",
      dark: { raw: "(prefers-color-scheme: dark)" },
    },
    extend: {
      fontFamily: {
        gmarket: "var(--font-gmarket-sans)",
      },
      colors: {
        ...require("tailwindcss/colors"),
        blackAlpha: { ...vars.colors.$scale.blackAlpha },
        gray: { ...vars.colors.$scale.gray },
        grayText: { ...vars.colors.$scale.grayText },
        red: { ...vars.colors.$scale.red },
        cyan: { ...vars.colors.$scale.cyan },
        reverseGray: { ...vars.colors.$scale.reverseGray },
        deepGray: "#A0AEC0",
      },
      boxShadow: shadows,
      borderRadius: {
        "card-top": "0.375rem 0.375rem 0 0",
      },
      margin: {
        "68": "16.370rem",
      },
    },

    container: {
      center: true,
      padding: "16px",
    },
  },
  plugins: [],
};
export default config;
