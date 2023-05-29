import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Montserrat";
  background-color:  #f5efed;
}

main {
  width: 100%;
}
`;

export default GlobalStyles;
