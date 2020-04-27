import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body{
        -webkit-font-smoothing: antialiased;
        background: #001033;
    }

    body, input, button{
        font: 14px Arial, Helvetica, sans-serif;
    }
`;