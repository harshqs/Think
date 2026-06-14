import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"]
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" }
        },
        "glitch-shift": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "15%": { transform: "translate3d(-2px, 0, 0)" },
          "30%": { transform: "translate3d(2px, 0, 0)" },
          "45%": { transform: "translate3d(-1px, 0, 0)" },
          "60%": { transform: "translate3d(1px, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" }
        },
        "scan": {
          "0%": { transform: "translateY(-120%)" },
          "100%": { transform: "translateY(120%)" }
        }
      },
      animation: {
        "float-slow": "float-slow 8s ease-in-out infinite",
        "glitch-shift": "glitch-shift 1.2s steps(2, end) infinite",
        scan: "scan 6s linear infinite"
      },
      boxShadow: {
        "lift-ominous": "0 24px 70px rgba(0, 0, 0, 0.65)"
      }
    }
  },
  plugins: []
} satisfies Config
