import css from "styled-jsx/css";

const styles = css`
    .contenedor{
        padding: 4rem 1rem;
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

            .boton-div{
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
                grid-template-columns: 17rem 1fr;
                grid-template-rows: 1fr;
                gap: 1rem;

                div{
                    display: grid;
                    grid-template-columns: 17rem 1fr;
                    min-width: 100% !important;
                    width: 1000px;
                    padding-top: 2rem;
                }

                p{
                    grid-column: 1/ span 2;
                    font-family: "Spectral";
                    font-size: 1.3rem;
                }


            }
        }
    }
`;

export default styles;