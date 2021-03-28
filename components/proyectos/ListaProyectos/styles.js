import css from "styled-jsx/css";

const styles = css`
    .contenedor{
        padding: 6rem 1rem;
        font-size: "Spectral";

        h2{
            color: #3C3838;
            font-family: 'Noto Sans', sans-serif;
            padding: 0;
            margin: 0;
            font-size: 2rem;

        }

        .proyectos{
            font-size: 1.2rem;
            margin-top: 2.5rem;

            div{
                display: flex;
                justify-content: center;
            }
            
        }

    }

    @media (min-width:600px){
        .contenedor{
            padding: 6rem 1rem;

            h2{
                padding: 0;
            }

            .proyectos{
                display: grid;
                grid-template-columns: 22rem 1fr;
                grid-template-rows: 1fr;
                gap: 1rem;
            }
        }
    }
`;

export default styles;