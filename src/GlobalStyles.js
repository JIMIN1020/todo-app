import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Noto Sans KR", sans-serif;
  }
  body {
    background-color: rgba(79, 176, 111, 0.623);
    color: rgb(39, 39, 39);
    
  }
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default GlobalStyles;
