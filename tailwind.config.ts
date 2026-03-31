import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: 'clamp(1.5rem, 4vw, 4rem)',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Consolas', 'monospace'],
      },
      // Keep clamp-based scales available as Tailwind font sizes
      fontSize: {
        'heading-xl': ['clamp(3.5rem, 10vw, 9rem)', { lineHeight: '0.95', fontWeight: '300' }],
        'heading-lg': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1.05', fontWeight: '300' }],
        'heading-md': ['clamp(1.8rem, 4vw, 3.5rem)', { lineHeight: '1.15', fontWeight: '400' }],
        'heading-sm': ['clamp(1.2rem, 2.5vw, 2rem)', { lineHeight: '1.3', fontWeight: '400' }],
        label: ['clamp(0.65rem, 1vw, 0.8rem)', { lineHeight: '1.4' }],
        'label-lg': ['clamp(0.8rem, 1.2vw, 1rem)', { lineHeight: '1.4' }],
        'body-text': ['clamp(0.95rem, 1.2vw, 1.1rem)', { lineHeight: '1.7' }],
        'body-text-sm': ['clamp(0.8rem, 1vw, 0.95rem)', { lineHeight: '1.6' }],
      },
      spacing: {
        'section-padding': 'clamp(4rem, 10vw, 10rem)',
      },
      maxWidth: {
        'container-max': '1400px',
      },
      animation: {
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
