export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {},
      animation: {},
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
