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
  background-color: #f5efed;
}

header {
  background-color: green;
  display: flex;
  width: 100%;
  
  @media screen and (min-width: 768px) {
    position: fixed;
    
  }
}

main {
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size:2rem;

}

footer {
  background-color: black;
  display: flex;
  width: 100%;
}
`;

export default GlobalStyles;
