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
        body: "#EEEEEE",
        primary: "#1D38D0",
        text: "#1F1F1F",
        gray: {
          light: "#E9E9E9"
        }
      }
    },
  },
  plugins: [],
};
export default config;
