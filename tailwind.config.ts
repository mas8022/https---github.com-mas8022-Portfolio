import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xxm: "380px",
        xm: "500px",
        sm: "640px",
        md: "768px",
        xd: "815px",
        xxd: "875px",
        mmd: "940px",
        ld: "1000px",
        lg: "1024px",
        lgg: "1112px",
        xl: "1280px",
        xxl: "1312px",
        "2xl": "1536px",
      },
      colors: {
        first: "#ffffff",
        second: "#6d28d9",
        third: "#000",
      },
    },
  },
  plugins: [
    function ({
      addVariant,
    }: {
      addVariant: (name: string, style: string) => void;
    }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
} satisfies Config;
