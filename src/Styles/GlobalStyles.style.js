import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --clr-bg: #FFFDF3;
        --clr-text: #F8533A;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;   
        background-color: var(--clr-bg);
    }
`;

export default GlobalStyles;
