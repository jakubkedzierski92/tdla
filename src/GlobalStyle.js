import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    font-family: "Lato", sans-serif;
    box-sizing: border-box;
}
*,
  ::after, ::before {
    box-sizing: inherit;
  }
body {
    background-color: rgba(241, 239, 239, 0.909);
}
`