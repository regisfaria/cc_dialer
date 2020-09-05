import { createGlobalStyle } from 'styled-components';
import bgImage from '../assets/bg.jpg';

export default createGlobalStyle`
  :root {
    --accent-blue: #109CF1;
    --yellow: #FFb946;
    --red: #F7685B;
    --green: #2ED47A;
    --purple: #885AF8;
    --black: #192A3E;
    --table-black: #323C47;
    --table-gray: #707683;
    --dark-blue-text: #334D6E;
    --gray: #90A0B7;
    --icon-gray: #C2CFE0;
    --white: #fff;
    --divider: #EBEFF2;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #E5E5E5 url(${bgImage});
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Poppins, sans-serifa;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
