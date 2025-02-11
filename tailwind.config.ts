/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          8: "var(--primary-8)",
          10: "var(--primary-10)",
          50: "var(--primary-50)",
          inverted: {
            DEFAULT: "var(--primary-inverted)",
            8: "var(--primary-inverted-8)",
            10: "var(--primary-inverted-10)",
            50: "var(--primary-inverted-50)",
          },
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          inverted: {
            DEFAULT: "var(--secondary-inverted)",
          },
        },
        tertiary: {
          DEFAULT: "var(--tertiary)",
          inverted: {
            DEFAULT: "var(--tertiary-inverted)",
          },
        },
        "smoke-eerie": "var(--smoke-eerie)",
        "smoke-eerie-inverted": "var(--smoke-eerie-inverted)",
        "seasalt-black": "var(--seasalt-black)",
        "platinum-black": "var(--platinum-black)",
        "platinum-black-inverted": "var(--platinum-black-inverted)",
        "battleship-davys-gray": "var(--battleship-davys-gray)",
      },
      backgroundImage: {
        "accent-duo": "var(--accent-duo)",
        "silver-duo": "var(--silver-duo)",
        "sky-blue-burst": "var(--sky-blue-burst)",
      },
      boxShadow: {
        "neumorphic-layered": "var(--shadow-neumorphic-layered)",
        "light-dark-soft": "var(--shadow-light-dark-soft)",
        "primary-btn":
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 32px 0px rgba(37, 166, 249, 0.3)",
        "primary-btn-hover":
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 64px 0px rgba(37, 166, 249, 0.1), 0px 2px 32px 0px rgba(37, 166, 249, 0.5)",
      },
      fontFamily: {
        metropolis: ["metropolis", "sans-serif"],
        degular: ["degular", "sans-serif"],
      },
    },
  },
  plugins: [
    // Utilities
    function ({ addUtilities }) {
      addUtilities({
        ".border-gradient": {
          background:
            "linear-gradient(to bottom, var(--battleship-davys-gray),  var(--timberwolf-eerie-black))",
        },
      });
    },
    // Theme variants
    function ({
      addVariant,
    }: {
      addVariant: (name: string, selector: string) => void;
    }) {
      addVariant("light", '[theme="light"] &');
      addVariant("dark", '[theme="dark"] &');
    },
  ],
};
