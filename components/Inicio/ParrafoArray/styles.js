import css from "styled-jsx/css";

const styles = css`
    .contenedor{
        width: 100%;
        padding: 4rem 1rem;

        h2{
            font-size: 2rem;
            color: var(--primary);
        }

        ul{
            list-style: none;

            
            li{
                text-align: start;
                font-size: 1.2rem;
                margin-bottom: 1rem;
                padding-left: 1rem;
                border-left: 5px solid var(--secondary);
            }

        }


    }

    @media (min-width: 1010px){
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