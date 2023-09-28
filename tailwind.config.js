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
        // lg: "1280px",
        // xl: "1400px",
      }
    },
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl:': '1920px',
    },
    spacing: {
      ...spacingTheme,
    },
    colors: {
      'blue':'var(--blue)',
      'pink':'var(--pink)',
      'white':'var(--white)',
      'semi-cyan':'var(--semi-cyan)', 
    },
    borderColor: {
      ...colorTheme,
    },
    backgroundColor: {
      ...colorTheme,
    },  
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          // maxWidth: '100%',
          margin:'auto',
          // padding:'0 5px',
          // '@screen xs': {
          //   maxWidth: '100%',
          //   padding:'0 15px'
          // },
          // '@screen sm': {
          //   maxWidth: '480px',
          //   padding:'0 15px'
          // },
          // '@screen md': {
          //   maxWidth: '768px',
          // },
          // '@screen lg': {
          //   maxWidth: '980px', 
          // },
          '@screen xl': {
            maxWidth: '1602px',
            paddingLeft : '2%',
            paddingRight : '2%', 
          }, 
        }
      })
    })
  ],
}
