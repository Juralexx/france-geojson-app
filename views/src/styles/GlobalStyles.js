import { createGlobalStyle } from 'styled-components';
import { Normalize } from './Normalize';
import variables from './variables';

/**
 * Styles globaux
 */

const GlobalStyles = createGlobalStyle`
    ${variables}
    ${Normalize}

    * {
        margin          : 0;
        padding         : 0;
        box-sizing      : border-box;
        text-decoration : none;
        z-index         : 1;
    }

    html {
        min-height      : 100vh;
        width           : 100%;
        margin          : 0;
        padding         : 0;
        scroll-behavior : smooth;
        scrollbar-width : thin;
        scrollbar-color : var(--body);
        box-sizing      : border-box;
    }

    body {
        width             : 100vw;
        height            : 100%;
        margin            : 0;
        padding           : 0;
        font-family       : var(--font-fam1);
        color             : var(--text);
        font-size         : 14px;
        background-color  : var(--body);
        background-repeat : repeat;
        overflow-y        : auto;
        overflow-x        : hidden;
    }

    ::selection {
        background-color : rgba(var(--primary-rgb), 0.25);
        color            : var(--primary);
    }

    :focus {
        outline        : 2px dashed var(--primary);
        outline-offset : 3px;
    }

    :focus-visible {
        outline        : 2px dashed var(--primary);
        outline-offset : 3px;
    }

    :focus:not(:focus-visible) {
        outline        : none;
        outline-offset : 0px;
    }

    ::-webkit-scrollbar {
        width : 8px;
    }
    ::-webkit-scrollbar-track {
        background : var(--body);
    }
    ::-webkit-scrollbar-thumb {
        background-color : var(--light-border);
        border           : 3px solid var(--body);
        border-radius    : 10px;
    }

    a {
        background-color : transparent;
        color            : var(--text);
    }

    p {
        font-size   : 14px;
        line-height : 22px;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        margin      : 0 0 10px 0;
        font-weight : 600;
        color       : var(--title);
    }

    h1 {
        font-size   : 32px;
        line-height : 36px;
    }
    h2 {
        font-size   : 28px;
        line-height : 32px;
    }
    h3 {
        font-size   : 20px;
        line-height : 24px;
    }
    h4 {
        font-size   : 18px;
        line-height : 22px;
    }
    h5 {
        font-size   : 16px;
        line-height : 20px;
    }

    @media(max-width:768px) {
        h1 {
            font-size   : 28px;
            line-height : 32px;
        }
        h2 {
            font-size   : 24px;
            line-height : 28px;
        }
        h3 {
            font-size   : 20px;
            line-height : 24px;
        }
        h4 {
            font-size   : 18px;
            line-height : 22px;
        }
        h5 {
            font-size   : 16px;
            line-height : 20px;
        }
    }
`;

export default GlobalStyles;