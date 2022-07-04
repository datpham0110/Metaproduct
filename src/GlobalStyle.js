import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1400px;
        --white: #fff;
        --gray: #F5F5F5;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --blue: #79b4d9;
        --color2: #fff1f0;
        --orange: #fe4536 ;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: boder-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
        }

    }
`;
