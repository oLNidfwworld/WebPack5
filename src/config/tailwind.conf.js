const colorTheme = {
  'black':'var(--black)',
    'dblue':'var(--dark-blue)',
    'magenta':'var(--magenta)',
    'white':'var(--white',
    'grey':'var(--grey)',
    'bej':'var(--bej)',
    'blue':'var(--blue)',
    'transparent':'var(--transparent)',
    'fucsia':'var(--fucsia)'
  }
  
  const spacingTheme = Array(31).fill(null)
    .reduce((acc, _, index) => ({ ...acc, ...{ [index]: `${(index) * 4}px` } }), {});
  
  module.exports = {
    colorTheme,
    spacingTheme,
  }