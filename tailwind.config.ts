import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        foreground: "hsl(var(--foreground))",
        "foreground-secondary": "hsl(var(--foreground-secondary))",
        "accent-50": "hsl(var--(color-accent-50))",
        "accent-100": "hsl(var(--color-accent-100))",
        "accent-200": "hsl(var(--color-accent-200))",
        "accent-300": "hsl(var(--color-accent-300))",
        "accent-400": "hsl(var(--color-accent-400))",
        "accent-500": "hsl(var(--color-accent-500))",
        "accent-600": "hsl(var(--color-accent-600))",
        "accent-700": "hsl(var(--color-accent-700))",
        "accent-800": "hsl(var(--color-accent-800))",
        "accent-900": "hsl(var(--color-accent-900))",
        "accent-950": "hsl(var(--color-accent-950))",
        primary: "hsl(var(--color-primary))",
        secondary: "hsl(var(--color-secondary))",
        danger: "hsl(var(--color-danger))",
        "muted-foreground": "hsl(var(--muted-foreground))",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
