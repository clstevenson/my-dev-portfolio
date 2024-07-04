import { createGlobalStyle } from "styled-components";
import { COLORS } from "./util/constants";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body, #root {
  height: 100%;
}

/* Typographic tweaks  */
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* Remove built-in form typography styles */
input, button, textarea, select {
  font: inherit;
}

/* Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* Create a root stacking context */
#root, #__next {
  isolation: isolate;
}

/* eliminate link underlines by default */
a {
  text-decoration: none;
}

a:link, a:visited {
  color: hsl(206deg 75% 40%);
}

a:hover {
  color: hsl(206deg 55% 70%);
}

:root {
  /* text shouldn't be too wide to read easily */
  --max-prose-width: 80ch;
  /* first font-stack is from Bulma, second is JWC's "system font stack" suggestion */
  /* --font-sans-serif: Inter, "SF Pro", "Segoe UI", Roboto, Oxygen, Ubuntu, "Helvetica Neue", Helvetica, Arial, sans-serif; */
  --font-sans-serif: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
  --font-serif: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

html {
  font-family: var(--font-sans-serif);
  /* background-color: ${COLORS.gray[100]}; */
}
`;

export default GlobalStyles;
