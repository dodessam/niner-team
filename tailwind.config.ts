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
        background: "#1a1a1a",
        card: "#242424",
        cardHover: "#2d2d2d",
        border: "#333333",
        textPrimary: "#ffffff",
        textSecondary: "#a0a0a0",
        accent: "#6366f1",
        accentHover: "#5558e3",
        success: "#22c55e",
        warning: "#f59e0b",
        disabled: "#404040",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
