import css from "styled-jsx/css";

const styles = css`
    .contenedor{
        width: 100%;
        padding: 4rem 1rem;

        h2{
            font-family: 'Noto Sans', sans-serif;
            font-size: 2rem;
        }

        ul{
            margin-left: 2rem;

            
            li{
                font-family: 'Spectral', serif;
                text-align: start;
                font-size: 1.2rem;
                margin-bottom: 1rem;
            }

        }


    }

    @media (min-width: 600px){
        .contenedor{
            padding: 4rem 0;

            h2{
                font-size: 2.2rem;
            }

            ul{
                li{
                    font-size: 1.3rem;
                }
            }
        }
    }
`;

export default styles;