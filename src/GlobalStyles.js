import { createGlobalStyle } from "styled-components";

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

/* Global CSS variables */
:root {
  /* text shouldn't be too wide to read easily */
  --max-prose-width: 80ch;
  --font-sans-serif: Inter, "SF Pro", "Segoe UI", Roboto, Oxygen, Ubuntu, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-serif: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

html {
  font-family: var(--font-sans-serif);
}
`;

export default GlobalStyles;
