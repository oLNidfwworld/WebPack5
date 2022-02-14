const defaultTheme = require('tailwindcss/defaultTheme');
const colorTheme = require('./src/config/tailwind.conf').colorTheme;
const spacingTheme = require('./src/config/tailwind.conf').spacingTheme;
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{pug,html,js}"],
  important: true,
  purge: false,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      width: {
        ...defaultTheme.width,
        fit: 'fit-content'
      },
      height: {
        ...defaultTheme.height,
        fit: 'fit-content'
      }
    },
    container: {
      center: true,
      padding: '46px',
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1280px",
        xl: "1400px",
      }
    },
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '720px',
      'hl': '970px',
      'lg': '1024px',
      '1xl': '1200px',
      'xl': '1280px',
      'xxl': '1400px',
      'xxxl': '1600px',
    },
    spacing: {
      ...spacingTheme,
    },
    colors: {
    'black':'var(--black)',
    'blue-grey':'var(--blue-grey)',
    'malin':'var(--malin)',
    'plombir':'var(--plombir)',
    'light-grey':'var(--light-grey)',
    'light-cream':'var(--light-cream)',
    'light-blue':'var(--light-blue)',
    'grey-cream':'var(--grey-cream)',
    'black-warm':'var(--black-warm)',
    'white':'var(--white)',
    'rose':'var(--rose)',
    'green':'var(--green)',
    'generic-grey':'var(--generic-grey)',
    'transparent':'var(--transparent)',
    },
    borderColor: {
      ...colorTheme,
    },
    backgroundColor: {
      ...colorTheme,
    },
    fontSize: {
      xs: '10px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      '2lg': '20px',
      '3lg': '24px',
      '4lg': '30px',
      'xl': '36px',
      '2xl': '40px',
      '3xl': '48px',
    },
    lineHeight: {
      ...defaultTheme.lineHeight,
      tight: '1.2',
      relaxed: '1.6',
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '14px',
          paddingRight: '14px',
          '@screen xs': {
            maxWidth: '100%',
          },
          '@screen sm': {
            maxWidth: '444px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '1022px', 
          },
          '@screen xl': {
            maxWidth: '1244px',
            paddingLeft: '18px',
            paddingRight: '18px',
          },
          '@screen xxl': {
            maxWidth: '1401px',
          },
          '@screen xxxl': {
            maxWidth: '1601px',
          },
        }
      })
    })
  ],
}
