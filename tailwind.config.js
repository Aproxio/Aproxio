/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "canvas": "#FAF8F5",
        "primary": "#0A0A0A",
        "on-primary": "#FAF8F5",
        "primary-container": "#1E1E1E",
        "on-primary-container": "#8A8780",
        "text-primary": "#0A0A0A",
        "text-secondary": "#57534E",
        "text-tertiary": "#8A857D",
        "surface": "#FFFFFF",
        "surface-bright": "#FFFFFF",
        "surface-dim": "#EDEAE3",
        "surface-muted": "#F3F0EA",
        "surface-container": "#EAE5DC",
        "surface-container-low": "#F6F4EE",
        "surface-container-high": "#E0DBD1",
        "surface-container-highest": "#DAD5CB",
        "surface-container-lowest": "#FFFFFF",
        "hairline": "#E8E3D9",
        "hairline-subtle": "#F0ECE3",
        "accent-electric": "#7293F3",
        "outline": "#78746E",
        "outline-variant": "#D0CBC2",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        gutter: "1.5rem",
        "gutter-mobile": "1rem",
        margin: "4rem",
        "margin-mobile": "1.25rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-2xl": "4rem",
        "space-3xl": "6rem"
      },
      fontFamily: {
        sans: ["'Hanken Grotesk'", "sans-serif"],
        display: ["'Hanken Grotesk'", "sans-serif"],
        headline: ["'Hanken Grotesk'", "sans-serif"],
        title: ["'Hanken Grotesk'", "sans-serif"],
        body: ["'Hanken Grotesk'", "sans-serif"],
        geist: ["'Geist'", "sans-serif"],
      },
      fontSize: {
        "display": ["72px", { lineHeight: "76px", letterSpacing: "-0.04em", fontWeight: "600" }],
        "display-mobile": ["44px", { lineHeight: "48px", letterSpacing: "-0.03em", fontWeight: "600" }],
        "headline-lg": ["48px", { lineHeight: "52px", letterSpacing: "-0.03em", fontWeight: "500" }],
        "headline-lg-mobile": ["32px", { lineHeight: "36px", letterSpacing: "-0.02em", fontWeight: "500" }],
        "headline-md": ["32px", { lineHeight: "38px", letterSpacing: "-0.02em", fontWeight: "500" }],
        "headline-sm": ["24px", { lineHeight: "30px", letterSpacing: "-0.015em", fontWeight: "500" }],
        "title": ["18px", { lineHeight: "24px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body-lg": ["16px", { lineHeight: "26px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "22px", letterSpacing: "0em", fontWeight: "400" }],
        "label-md": ["13px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" }],
        "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.06em", fontWeight: "600" }]
      }
    },
  },
  plugins: [],
};
