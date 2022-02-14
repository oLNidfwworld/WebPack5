const colorTheme = {
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
  }
  
  const spacingTheme = Array(31).fill(null)
    .reduce((acc, _, index) => ({ ...acc, ...{ [index]: `${(index) * 4}px` } }), {});
  
  module.exports = {
    colorTheme,
    spacingTheme,
  }