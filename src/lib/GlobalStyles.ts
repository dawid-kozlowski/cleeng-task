import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
  --surface: #393e46;
  --text: #eeeeee;
  --background: #222831;
  --accent: #00adb5;

  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: var(--text);
  background-color: var(--background);
  }

body{
  margin: 0;
  display: flex;
  place-items: center;
  justify-content: center;
  min-width: 320px;
  min-height: 100vh;
  }

  #root{
  width:80%;
  }
`;
