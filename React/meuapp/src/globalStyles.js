// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   body {
      margin: 0;
      padding: 0;
      background: #121214;
      color: #fff;
      font-family: Open-Sans, Helvetica, Sans-Serif;
   }

   html{
      height:100%;
   }
`;

export default GlobalStyle;