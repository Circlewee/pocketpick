import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
  @font-face {
    font-family: 'GangwonEdu_OTFLightA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFLightA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  
  body * {
    font-family: 'Nunito', 'GangwonEdu_OTFLightA', sans-serif;
  }
`;
