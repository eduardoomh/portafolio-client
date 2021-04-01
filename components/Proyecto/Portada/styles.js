import css from "styled-jsx/css";

const styles = css`
    .container{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 430px 1fr;
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
            left: 50px;
            top: 75px;
        }

        h1{
            text-align: center;
            padding: 0 1rem;
            font-size: 32px;
            color: var(--black);
        }

        span{
            text-align: center;
            display: block;
            padding : 0 1rem;
            color: #274873;
            font-weight: bold;
        }

        p{
            padding: 0 1rem;
            text-align: center;
            font-family: "Spectral";
            font-size: 1.2rem;
        }

        .boton-contenedor{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
        }
    }

    @media (min-width: 600px){
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