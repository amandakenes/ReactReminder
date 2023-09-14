import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --blue-300: #c2e2f4;
    --blue-600: #2699b7;
    --yellow-600: #e6b104;

    --font-black: #1c1c1c;
    --font-white: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width:1080px) {
        font-size: 93.75%;
    }

    @media (max-width:720px) {
        font-size: 87.5%;
    }
}
`
