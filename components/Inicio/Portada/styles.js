import css from "styled-jsx/css";

const styles  = css`
    div{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 8rem 4rem 36rem;
        width: calc(100vw - 2rem);
        padding: 0 1rem;
        
        h1{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 32px;
            margin: 0;
        }

        span{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.4rem;
            font-weight: bold;
            color: var(--tertiary);
            margin: 0;
        }

        .user-parrafo, .user-frase{
            font-size: 1.2rem;
            font-family: "Spectral";

        }

        .user-frase{
            font-size: 1.8rem;
            font-weight: bold;
            text-align: center;
        }

        .user-data{
            display: flex;
            justify-content: center;
            padding: 1rem 0;
            height: 36rem;
            border-radius: 15px;

        }


    }

    @media (min-width: 800px){
        div{
            grid-template-columns: .8fr 1fr;
            grid-template-rows: 7rem 3rem 10rem 15rem;
            max-width: 1000px;
            padding: 0;
            margin-top: 1rem;

            h1{
                justify-content: flex-start;
                align-items: flex-end;
                grid-column: 2/3;
                grid-row:1/2;
            }

            span{
                grid-column: 2/3;
                grid-row:2/3;  
                justify-content: flex-start;
            }

            .user-parrafo{
                grid-column: 2/3;
                grid-row:3/4;
            }

            .user-frase{
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                padding: 0;
                grid-column: 2/3;
                grid-row:4/5;
                text-align: left;
            }

            .user-data{
                grid-column: 1/2;
                grid-row:1/span 4;
                width: 24rem;
                height: 34rem;
                 
            }
        }
    }
`;

export default styles;