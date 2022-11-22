import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}
*,
  ::after, ::before {
    box-sizing: inherit;
  }
body {
    font-family: "Lato", sans-serif;
    background-color: rgba(241, 239, 239, 0.909);
}
`;
