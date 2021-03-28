import css from "styled-jsx/css";

const styles = css`
    div{

        h2{
            font-family: "Noto sans";
            font-size: 2rem;
        }

        p{
            font-family: "Spectral";
            text-align: justify;
            font-size: 1.2em;
        }

    }

    @media (min-width: 600px){
        div{
            padding: 0 1rem;

            h2{
                font-size: 2.5rem;
            }
        }
    }
`;
export default  styles;