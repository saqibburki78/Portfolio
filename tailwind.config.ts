import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: {
          dark: "var(--theme-dark)",
          secondary: "var(--theme-secondary)",
          accent: "var(--theme-accent)",
          light: "var(--theme-light)",
        },
      },
      fontFamily: {
        // Add your Bowlby One font as the default sans font
        sans: ["var(--font-bowlby-one)", "system-ui", "sans-serif"],
        // Or add it as a custom font family you can use with font-bowlby
        bowlby: ["var(--font-bowlby-one)", "sans-serif"],
        "rubik-wet-paint": ["var(--font-rubik-wet-paint)", "sans-serif"],
      },
      cursor: {
        custom: "url(/public/cursor.png), auto",
      },
    },
  },
  plugins: [],
};

export default config;
