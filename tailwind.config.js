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
      //'hl': '970px',
      'lg': '1024px',
      //'1xl': '1200px',
      'xl': '1280px',
      //'xxl': '1400px',
      //'xxxl': '1600px',
    },
    spacing: {
      ...spacingTheme,
    },
    colors: {
      'black':'var(--black)',
      'dblue':'var(--dark-blue)',
      'magenta':'var(--magenta)',
      'white':'var(--white)',
      'grey':'var(--grey)',
      'bej':'var(--bej)',
      'blue':'var(--blue)',
      'transparent':'var(--transparent)',
      'fucsia':'var(--fucsia)'
    },
    borderColor: {
      ...colorTheme,
    },
    backgroundColor: {
      ...colorTheme,
    },
    fontSize: {
      '60px':'60px',
      '90px':'90px',
      '32px':'32px',
      '56px':'56px',
      '24px':'24px',
      '40px':'40px',
      '12px':'12px',
      '18px':'18px',
      '28px':'28px'
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
          '@screen xs': {
            maxWidth: '100%',
            padding:'20px 20px 0 20px'
          },
          '@screen sm': {
            maxWidth: '476px',
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
          //'@screen xxl': {
          //  maxWidth: '1401px',
          //},
          //'@screen xxxl': {
          //  maxWidth: '1601px',
          //},
        }
      })
    })
  ],
}
