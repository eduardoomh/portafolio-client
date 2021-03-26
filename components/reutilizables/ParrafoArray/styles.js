import css from "styled-jsx/css";

const styles = css`
    .contenedor{
        width: 100%;
        padding: 4rem 2rem;

        h2{
            font-family: 'Noto Sans', sans-serif;
            font-size: 2rem;
        }

        div{
            
            p{
                font-family: 'Spectral', serif;
                text-align: justify;
                font-size: 1.2rem;
            }

        }


    }

    @media (min-width: 600px){
        .contenedor{
            h2{
                font-size: 2.5rem;
            }

            div{
                p{
                    font-size: 1.5rem;
                }
            }
        }
    }
`;

export default styles;