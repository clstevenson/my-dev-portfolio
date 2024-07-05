export const COLORS = {
  white: "hsl(0deg 0% 100%)",
  offblack: "hsl(24deg 5% 6%)",
  gray: {
    100: "hsl(40deg 12% 95%)",
    300: "hsl(35deg 8% 80%)",
    500: "hsl(30deg 4% 60%)",
    700: "hsl(28deg 5% 40%)",
    900: "hsl(24deg 6% 16%)",
  },
  primary: "hsl(224deg 30% 40%)",
  primary_dark: "hsl(224deg 30% 25%)",
  primary_light: "hsl(224deg 30% 55%)",
  secondary: "hsl(180deg 40% 40%)",
  secondary_dark: "hsl(180deg 40% 25%)",
  secondary_light: "hsl(180deg 40% 55%)",
  urgent: "hsl(0deg 75% 40%)",
};

export const WEIGHTS = {
  normal: 400,
  medium: 550,
  bold: 700,
};

export const BREAKPOINTS = {
  phoneMax: 550,
  tabletMax: 1100,
  laptopMax: 1500,
};

export const QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabletAndLess: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptopAndLess: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.phoneMax / 16}rem) and
    (max-width: ${(BREAKPOINTS.tabletMax - 1) / 16}rem)`,
};
