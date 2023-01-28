import { css } from 'styled-components'

export const Normalize = css`
    /**
    * 1. Correct the line height in all browsers.
    * 2. Prevent adjustments of font size after orientation changes in iOS.
    */

    html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        font-feature-settings: normal;
    }

    /**
    * Remove the margin in all browsers.
    */

    body {
        margin: 0;
    }

    /**
    * Render the 'main' element consistently in IE.
    */

    main {
        display: block;
    }

    /*
    Remove the default font size and weight for headings.
    */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
    }

    /**
    * Remove the gray background on active links in IE 10.
    */

    a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    /**
    * 1. Remove the bottom border in Chrome 57-
    * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
    */

    abbr[title] {
        border-bottom: none; /* 1 */
        text-decoration: underline; /* 2 */
        text-decoration: underline dotted; /* 2 */
    }

    /**
    * Add the correct font weight in Chrome, Edge, and Safari.
    */

    b,
    strong {
        font-weight: bolder;
    }

    /**
    * 1. Add the correct box sizing in Firefox.
    * 2. Show the overflow in Edge and IE.
    */

    hr {
        box-sizing: content-box; /* 1 */
        height: 0; /* 1 */
        overflow: visible; /* 2 */
        border-top-width: 1px;
        color: inherit;
    }

    /**
    * 1. Correct the inheritance and scaling of font size in all browsers.
    * 2. Correct the odd 'em' font sizing in all browsers.
    */

    pre {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 1em; /* 2 */
    }

    /**
    * 1. Correct the inheritance and scaling of font size in all browsers.
    * 2. Correct the odd 'em' font sizing in all browsers.
    */

    code,
    kbd,
    samp {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 1em; /* 2 */
    }

    /**
    * Add the correct font size in all browsers.
    */

    small {
        font-size: 80%;
    }

    /**
    * Prevent 'sub' and 'sup' elements from affecting the line height in
    * all browsers.
    */

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    /*
    1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
    2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
    3. Remove gaps between table borders by default.
    */

    table {
        text-indent: 0;
        /* 1 */
        border-color: inherit;
        /* 2 */
        border-collapse: collapse;
        /* 3 */
    }

    /**
    * Remove the border on images inside links in IE 10.
    */

    img {
        border-style: none;
    }

    /**
    * 1. Change the font styles in all browsers.
    * 2. Remove the margin in Firefox and Safari.
    */

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
        padding: 0;
        color: inherit;
    }

    /**
    * Show the overflow in IE.
    * 1. Show the overflow in Edge.
    */

    button,
    input { /* 1 */
        overflow: visible;
    }

    /**
    * Remove the inheritance of text transform in Edge, Firefox, and IE.
    * 1. Remove the inheritance of text transform in Firefox.
    */

    button,
    select { /* 1 */
        text-transform: none;
    }

    /**
    * Correct the inability to style clickable types in iOS and Safari.
    */

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    /**
    * Remove the inner border and padding in Firefox.
    */

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    /**
    * Restore the focus styles unset by the previous rule.
    */

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    /*
    Use the modern Firefox focus style for all focusable elements.
    */

    :-moz-focusring {
        outline: auto;
    }

    /*
    Remove the additional ':invalid' styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
    */

    :-moz-ui-invalid {
        box-shadow: none;
    }

    /**
    * Correct the padding in Firefox.
    */

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }

    /**
    * 1. Correct the text wrapping in Edge and IE.
    * 2. Correct the color inheritance from 'fieldset' elements in IE.
    * 3. Remove the padding so developers are not caught out when they zero out
    *    'fieldset' elements in all browsers.
    */

    legend {
        box-sizing: border-box; /* 1 */
        color: inherit; /* 2 */
        display: table; /* 1 */
        max-width: 100%; /* 1 */
        padding: 0; /* 3 */
        white-space: normal; /* 1 */
    }

    /**
    * Add the correct vertical alignment in Chrome, Firefox, and Opera.
    */

    progress {
        vertical-align: baseline;
    }

    /**
    * Remove the default vertical scrollbar in IE 10+.
    */

    textarea {
        overflow: auto;
    }

    /*
    Prevent resizing textareas horizontally by default.
    */

    textarea {
        resize: vertical;
    }

    /**
    * 1. Add the correct box sizing in IE 10.
    * 2. Remove the padding in IE 10.
    */

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
    }

    /**
    * Correct the cursor style of increment and decrement buttons in Chrome.
    */

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    /*
    Correct the cursor style of increment and decrement buttons in Safari.
    */

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        height: auto;
    }

    /**
    * 1. Correct the odd appearance in Chrome and Safari.
    * 2. Correct the outline style in Safari.
    */

    [type="search"] {
        -webkit-appearance: textfield; /* 1 */
        outline-offset: -2px; /* 2 */
    }

    /**
    * Remove the inner padding in Chrome and Safari on macOS.
    */

    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    /**
    * 1. Correct the inability to style clickable types in iOS and Safari.
    * 2. Change font properties to 'inherit' in Safari.
    */

    ::-webkit-file-upload-button {
        -webkit-appearance: button; /* 1 */
        font: inherit; /* 2 */
    }

    /*
    * Add the correct display in Edge, IE 10+, and Firefox.
    */

    details {
        display: block;
    }

    /*
    * Add the correct display in all browsers.
    */

    summary {
        display: list-item;
    }

    /**
    * Add the correct display in IE 10+.
    */

    template {
        display: none;
    }

    /**
    * Add the correct display in IE 10.
    */

    [hidden] {
        display: none;
    }

    /*
    Removes the default spacing and border for appropriate elements.
    */

    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
        margin: 0;
    }

    fieldset {
        margin: 0;
        padding: 0;
    }

    legend {
        padding: 0;
    }

    ol,
    ul,
    li,
    menu {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    /*
    1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
    2. Set the default placeholder color to the user's configured gray 400 color.
    */

    input::-moz-placeholder, textarea::-moz-placeholder {
        opacity: 1;
        /* 1 */
        color: #9ca3af;
        /* 2 */
    }

    input:-ms-input-placeholder, textarea:-ms-input-placeholder {
        opacity: 1;
        /* 1 */
        color: #9ca3af;
        /* 2 */
    }

    input::placeholder,
    textarea::placeholder {
        opacity: 1;
        /* 1 */
        color: #9ca3af;
        /* 2 */
    }

    /*
    Set the default cursor for buttons.
    */

    button,
    [role="button"] {
        cursor: pointer;
        background: transparent;
        border: none;
    }

    /*
    Make sure disabled buttons don't get the pointer cursor.
    */

    :disabled {
        cursor: default;
    }

    /*
    1. Make replaced elements 'display: block' by default. (https://github.com/mozdevs/cssremedy/issues/14)
    2. Add 'vertical-align: middle' to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
    This can trigger a poorly considered lint error in some tools but is included by design.
    */

    img,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
        display: block;
        /* 1 */
        vertical-align: middle;
        /* 2 */
    }

    /*
    Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
    */

    img,
    video {
        max-width: 100%;
        height: auto;
    }
`