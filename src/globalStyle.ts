import { createGlobalStyle } from "styled-components";
import { pallete } from "./theme";

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 10px;
}
* {
  margin: 0;
  padding: 0;
}
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  direction: ltr;
  font-family: "Sora", sans-serif;
  background: ${pallete.darkColor};
  color: ${pallete.whiteColor};
  font-weight: 600;
}
a {
  text-decoration: none;
}
ul, ol {
  list-style: none;
}
.container {
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
}
.flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.grid {
  display: grid;
}
.align-center {
  align-items: center;
}
.align-start {
  align-items: start;
}
.align-end {
  align-items: end;
}
.justify-between {
  justify-content: space-between;
}
.justify-around {
  justify-content: space-around;
}
.justify-start {
  justify-content: start;
}
.justify-center {
  justify-content: center;
}
.justify-end {
  justify-content: end;
}
.gap-5 {
  gap: 5px;
}
.gap-10 {
  gap: 10px;
}
.gap-15 {
  gap: 15px;
}
.gap-20 {
  gap: 20px;
}
`;
