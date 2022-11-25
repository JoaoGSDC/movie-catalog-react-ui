import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --light-color: #fff;
    --text-color: var(--light-color);
    --main-color: #de0c4d;
    --background-color: #0e0b12;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body {
    background: var(--background-color);
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: var(--text-color);
    height: 100%;
  }
 `;
