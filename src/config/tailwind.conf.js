const colorTheme = {
  'pink':'var(--pink)',
     'blue':'var(--blue)',
     'white':'var(--white)', 
     'semi-cyan':'var(--semi-cyan)', 
  }
  
  const spacingTheme = Array(31).fill(null)
    .reduce((acc, _, index) => ({ ...acc, ...{ [index]: `${(index) * 4}px` } }), {});
  
  module.exports = {
    colorTheme,
    spacingTheme,
  }