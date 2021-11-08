const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  xxl: customMediaQuery(1450),
  xl: customMediaQuery(1280),
  lg: customMediaQuery(1000),
  md: customMediaQuery(800),
  sm: customMediaQuery(576),
};
