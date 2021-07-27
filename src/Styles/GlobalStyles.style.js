import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --clr-bg: #FFFDF3;
        --clr-text: #F8533A;
        --clr-dark: #5d5d5a;
        --clr-grid: #ccffcc;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        height: 100%;   
        background-color: var(--clr-bg);
        font-family: 'Permanent Marker', sans-serif;
    }
`;

export default GlobalStyles;
