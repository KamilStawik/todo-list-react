import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => (theme.colors.backgroundColor)};
        font-family: "Lato", sans-serif;
    }
    
    *, ::after, ::before {
        box-sizing: inherit;
    }
`;