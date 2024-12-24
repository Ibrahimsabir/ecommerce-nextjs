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
        primaryFont:"Rye",
        secondaryFont:"Satoshi"
      },
      colors: {
        background:" #f0e2bc ",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
