import css from "styled-jsx/css";

const styles = css`
    .contenedor{
        padding: 4rem 1rem;

        h2{
            color: var(--primary);
            padding: 0;
            margin: 0;
            font-size: 2rem;
            margin-bottom: 2rem;

        }

        .simbologia{
            display: flex;
            align-items: center;
            list-style: none;
            padding-left: .7rem;

            li{
                display: flex;
                align-items: center;
                font-size: 1.3rem;

                span{
                    display: flex;
                    align-items: baseline;
                    padding: 0 .6rem;
                }
            }
        }

        .proyectos{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 1.2rem;
            margin-top: 2.5rem;           
        }

    }

    @media (min-width: 700px){
        .contenedor{
            .proyectos{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr;
                gap: 3rem;

                div{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

            }

            h2{
                margin-bottom: 4rem;
            }
        }
    }

    @media (min-width:900px){
        .contenedor{
            padding: 6rem 1rem;

            h2{
                padding-left: 1rem;
            }

            .proyectos{
                grid-template-columns: 1fr 1fr 1fr;

                p{
                    grid-column: 1/ span 2;
                    font-size: 1.3rem;
                }


            }
        }
    }
`;

export default styles;