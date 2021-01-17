import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"

const globalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none; 
        color:inherit;
    }
    *{
        box-sizing:border-box
    }
    body {
        font-family:-apple-system;
        font-size:14px;
        background-color:rgba(20,20,20,1);
        color:#fff;
        padding:80px 0; 
    }
`;

export default globalStyles;