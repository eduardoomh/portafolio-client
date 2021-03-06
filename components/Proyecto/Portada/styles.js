import css from "styled-jsx/css";

const styles = css`
    .container{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 350px 1fr;
        width: 100vw;
        max-width: 100vw;
        margin-bottom: 4rem;

        .imagen{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .user-image{
            border-radius: 50%;
            position: absolute;
            left: 20px;
            top: 75px;
        }

        h1{
            text-align: center;
            padding: 0 1rem;
            font-size: 32px;
            color: var(--primary);
        }

        span{
            text-align: center;
            display: block;
            padding : 0 1rem;
            color: var(--tertiary);
            font-weight: bold;
        }

        p{
            padding: 0 1rem;
            text-align: center;
            font-size: 1.2rem;
        }

        .boton-contenedor{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;

            strong{
                font-size: 1.3rem;
                background-color: var(--secondary);
                color: var(--text);
                padding: .5rem 1rem;
            }
        }
    }

    @media (min-width: 1000px){
        .container{
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 6rem 2.5rem 10rem 5rem;
            min-width: 1000px;
            max-width: 1000px;
            margin: 0;

            .imagen{
                grid-column: 1/2;
                grid-row: 1/ span 4;
                justify-content: flex-start;
                align-items: flex-end;
                padding: 0;
                margin: 0;
                margin-bottom: 2rem;
                
            }

            .user-image{
                left: 9rem;
                top: 5.5rem;

            }

            h1{
                grid-column: 2/3;
                grid-row: 1/2;
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;
                padding: 0;
                margin: 0;
                font-size: 2.3rem;
            }

            span{
                grid-column: 2/3;
                grid-row: 2/3;
                display: flex;
                align-items: center;
                font-size: 1.2rem;
                padding: 0;
            }

            p{
                display: flex;
                justify-content: flex-start;
                grid-column: 2/3;
                grid-row: 3/4;
                padding: 0;
                font-size: 1.3rem;
                text-align: left;
            }

            .boton-contenedor{
                grid-column: 2/3;
                grid-row: 4/5;
                justify-content: flex-start;
                align-items: flex-start;
                margin: 0;
                padding: 0;

            }
        }
    }
`;

export default styles;