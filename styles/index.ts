const mediaQuery = (min: number) => `@media (min-width: ${min}px)`;

const breakPoints = {
  sm: 321,
  md: 769,
  lg: 1027,
};

export const mq = {
  md: mediaQuery(breakPoints.sm),
  lg: mediaQuery(breakPoints.md),
};
