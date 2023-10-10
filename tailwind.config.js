const defaultTheme = require('tailwindcss/defaultTheme');
const colorTheme = require('./src/config/tailwind.conf').colorTheme;
const spacingTheme = require('./src/config/tailwind.conf').spacingTheme;
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{pug,html,js}"],
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
      },

      fontFamily: {
        'sans': ['Tektur', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",  
      }
    },
    screens: {
      xs: '100%',
      sm: '480px',
      md: '720px',
      lg: '1024px',
      '2lg': '1280px',
      xl: '1440px',
      '2xl' : '1920px'
    },
    spacing: {
      ...spacingTheme,
    },
    colors: {
      'violet': 'var(--violet)',
      'dark-violet': 'var(--dark-violet)',
      'dark': 'var(--dark)',
      'white': 'var(--white)',
      'vwhite': 'var(--vwhite)',
      'blue': 'var(--blue)',
      'pink': 'var(--pink)',
      'silver': 'var(--silver)',
      'header-text-var': 'var(--header-text-var)'
    },
    borderColor: {
      ...colorTheme,
    },
    backgroundColor: {
      ...colorTheme,
    },  
  },
  plugins: [

    require('@tailwindcss/line-clamp'),

    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          margin:'auto', 
          padding:'0 11px', 
          '@screen sm': {
            maxWidth: '480px',
            padding:'0 21px'
          },
          '@screen md': {
            maxWidth: '720px',
            padding: '0 27px',
          },
          '@screen lg': {
            maxWidth: '1024px', 
            padding: '0 43px',
          },
          '@screen 2lg': {
            maxWidth: '1280px', 
            padding: '0 67px', 
          }, 
          '@screen xl': {
            maxWidth: '1440px', 
            padding: '0 70px', 
          }, 
          '@screen 2xl': {
            maxWidth: '1920px', 
            padding: '0 130px', 
          }, 
        },

        '.section-title-style' : {
          fontSize : '20px',
          lineHeight : '110%',
          letterSpacing : '0.6px',
          fontWeight: '600',
          textWrap: 'balance',
          color : 'var(--dark-violet)',
          textWrap : 'balance',
          '@screen sm': {
            fontSize : '35px',
            letterSpacing : '1.05px',
          },
          '@screen md': {
            fontSize : '50px',
            letterSpacing : '1.5px',
          },
          '@screen lg': {
            fontSize : '60px',
            letterSpacing : '1.8px',
          },
        },
        '.section-description-style' : {
          fontSize : '14px',
          lineHeight : '120%',
          letterSpacing : '0.48px',
          textWrap : 'balance',
          '@screen sm': {
            fontSize : '16px',
            letterSpacing : '1.05px',
          },
          '@screen md': {
            fontSize : '25px',
            letterSpacing : '0.75px',
          },
          '@screen lg': {
            fontSize : '30px',
            letterSpacing : '0.9px',
          },
        },
        '.section-subtitle-style' : {
          fontSize : '24px',
          lineHeight : '120%',
          letterSpacing : '0.72px',
          textWrap : 'balance',
        },
      })
    })
  ],
}
