import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color tokens
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Base colors (for direct use if needed)
        white: "hsl(var(--color-white))",
        black: "hsl(var(--color-black))",
        blue: "hsl(var(--color-blue))",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        mono: "var(--font-ibm-plex-mono)",
      },
    },
  },
  plugins: [],
};
export default config;

