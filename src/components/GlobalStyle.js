import { createGlobalStyle } from 'styled-components';
import '../App.css'

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #000;
        overflow-x: hidden;
        font-family: 'Lobster'
    }
`

export default GlobalStyle;