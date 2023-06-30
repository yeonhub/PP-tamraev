import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .list_empty {
    width: 100%;
    color: #999;
    font-size: 25px;
    text-align: center;
    padding: 100px 0;
  }

  #wrap {
    overflow: hidden;
    position: relative;
    width: 100%;
    min-width: 1280px;
    max-width: 1920px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
