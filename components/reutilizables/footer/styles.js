import css from "styled-jsx/css";
import mainTheme from "../../../styles/mainTheme";

const styles = css`
    footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 35rem;
        padding: 2rem;
        background-color: ${mainTheme.colores.header};
        color: ${mainTheme.colores.blancoLetras};
        font-family: 'Spectral', serif;
        font-size: 1rem;

        p{
            font-size: 1rem;
            text-align: center;
        }

        h4{
            font-size: 1.5rem;
        }

        ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            list-style: none;
            padding: 0;

            li{
                text-align: center;
                margin: .3rem 0;
                text-decoration: underline;
            }
                
        }    
                
    }


                
`;

export default styles;