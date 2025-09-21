/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'canela-deck': ['Georgia', 'Times New Roman', 'serif'],
        'gt-america': ['Inter', 'Arial', 'sans-serif'],
        'source-sans': ['Inter', 'Arial', 'sans-serif'],
        // Set Roboto as default fonts
        'sans': ['Roboto', 'Arial', 'sans-serif'], // Roboto for body
        'serif': ['Roboto', 'Arial', 'sans-serif'], // Roboto for headers too
      },
      fontSize: {
        // H1 (Hero Title) - Fluid scaling
        'h1': ['clamp(28px, 6vw, 40px)', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h1-lg': ['clamp(32px, 4.5vw, 52px)', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        
        // H2 (Section Title) - Fluid scaling
        'h2': ['clamp(22px, 4.5vw, 28px)', {
          lineHeight: '1.3',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h2-lg': ['clamp(26px, 3vw, 36px)', {
          lineHeight: '1.3',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        
        // H3 (Card/Subhead) - Fluid scaling
        'h3': ['clamp(18px, 3.5vw, 20px)', {
          lineHeight: '1.4',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h3-lg': ['clamp(20px, 2.2vw, 24px)', {
          lineHeight: '1.4',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        
        // Body Text
        'body': ['15px', {
          lineHeight: '1.6',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'body-lg': ['16px', {
          lineHeight: '1.6',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        
        // Small Text (Captions/Badges)
        'small': ['12px', {
          lineHeight: '1.4',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'small-lg': ['13px', {
          lineHeight: '1.4',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        
        // Buttons/UI
        'button': ['14px', {
          lineHeight: '1.4',
          letterSpacing: '0',
          fontWeight: '600',
        }],
        'button-lg': ['15px', {
          lineHeight: '1.4',
          letterSpacing: '0',
          fontWeight: '600',
        }],
      },
    },
  },
  plugins: [],
}