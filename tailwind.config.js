/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorText: '#101828',
        background: '#F9FAFB',
        'gray': {
          900: '#101828',
          800: '#1D2939',
          700: '#344054',
          600: '#475467',
          500: '#667085',
          400: '#98A2B3',
          300: '#D0D5DD',
          200: '#EAECF0',
          100: '#F2F4F7',
          25: '#FCFCFD'
        },
        'blue': {
          100: "#B2DDFF",
          200: "#1570EF",
          300: "#175CD3",
          400: "#1570EF",
        },
        error: '#F83F23',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        'headline-1': [
          '72px',
          {
            lineHeight: '90px',
            letterSpacing: '-0.02em'
          }
        ],
        'headline-1-medium': [
          '72px',
          {
            lineHeight: '60px',
            letterSpacing: '-0.02em',
            fontWeight: 500
          }
        ],
        'headline-1-bold': [
          '72px',
          {
            lineHeight: '60px',
            letterSpacing: '-0.02em',
            fontWeight: 600
          }
        ],
        'headline-2': [
          '60px',
          {
            lineHeight: '72px',
            letterSpacing: '-0.02em'
          }
        ],
        'headline-2-medium': [
          '60px',
          {
            lineHeight: '72px',
            letterSpacing: '-0.02em',
            fontWeight: 500
          }
        ],
        'headline-3': [
          '48px',
          {
            lineHeight: '58px',
            letterSpacing: '0em'
          }
        ],
        'headline-3-medium': [
          '48px',
          {
            lineHeight: '58px',
            letterSpacing: '0em',
            fontWeight: 500
          }
        ],
        'headline-4': [
          '36px',
          {
            lineHeight: '44px',
            letterSpacing: '0.0025em'
          }
        ],
        'headline-4-medium': [
          '36px',
          {
            lineHeight: '44px',
            letterSpacing: '0.0025em',
            fontWeight: 500
          }
        ],
        'headline-5': [
          '36px',
          {
            lineHeight: '44px',
            letterSpacing: '0em'
          }
        ],
        'headline-5-medium': [
          '36px',
          {
            lineHeight: '44px',
            letterSpacing: '0em',
            fontWeight: 500
          }
        ],
        body: [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0.005em'
          }
        ],
        "body-2": [
          '20px',
          {
            lineHeight: '30px',
            letterSpacing: '0.005em'
          }
        ],
        button: [
          '18px',
          {
            lineHeight: '28px',
            letterSpacing: '0.015em',
            fontWeight: 500
          }
        ],
        caption: [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '0.004em'
          }
        ],
        caption: [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '0.004em'
          }
        ],
        'caption-medium': [
          '14px',
          {
            lineHeight: '17px',
            letterSpacing: '0.004em',
            fontWeight: 500
          }
        ],
        'subtile-1': [
          '12px',
          {
            lineHeight: '15px',
            letterSpacing: '0.004em'
          }
        ],
        'subtile-2': [
          '8px',
          {
            lineHeight: '10px',
            letterSpacing: '0.004em'
          }
        ],
        'subtile-2-medium': [
          '8px',
          {
            lineHeight: '10px',
            letterSpacing: '0.004em',
            fontWeight: 500
          }
        ]
      }
    }
  },
  plugins: []
};
