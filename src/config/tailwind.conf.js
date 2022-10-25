const colorTheme = {
  'pink':'var(--pink)',
     'black':'var(--black)',
      'white':'var(--white)',
      'violet':'var(--violet)',
      'gray':'var(--gray)',
    'transparent':'var(--transparent)',
  }
  
  const spacingTheme = Array(31).fill(null)
    .reduce((acc, _, index) => ({ ...acc, ...{ [index]: `${(index) * 4}px` } }), {});
  
  module.exports = {
    colorTheme,
    spacingTheme,
  }