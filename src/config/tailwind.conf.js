const colorTheme = {
  'violet': 'var(--violet)',
  'dark-violet': 'var(--dark-violet)',
  'dark': 'var(--dark)',
  'white': 'var(--white)',
  'blue': 'var(--blue)',
  'pink': 'var(--pink)',
  'silver': 'var(--silver)',
  }
  
  const spacingTheme = Array(31).fill(null)
    .reduce((acc, _, index) => ({ ...acc, ...{ [index]: `${(index) * 4}px` } }), {});
  
  module.exports = {
    colorTheme,
    spacingTheme,
  }