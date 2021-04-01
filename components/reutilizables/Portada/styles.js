import css from "styled-jsx/css";

const styles = css`
    div{
        display: grid;
        grid-template-rows: 350px 4rem 12rem;
        grid-template-columns: 1fr;
        max-width: 100vw;

        .imagen{
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 100vw;
            max-width: 100vw;
       
        }

        h1{
            text-align: center;
            font-size: 32px;
            font-family: "Noto sans";
            color: var(--black);
            margin: 0;
        }


        p{
            width: 100vw;
            font-size: 1.2rem;
            font-family: "Spectral";
            padding: 0 1rem;
            margin: 0;
            text-align: justify;
        }
    }

    @media (min-width: 600px){
        div{
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 9rem 19rem;
            min-width: 1000px;
            max-width: 1000px;

            .imagen{
                grid-column: 1/2;
                grid-row: 1/span 2;
                min-width: 440px;
                max-width: 440px;
            }

            h1{
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;
                grid-column: 2/3;
                grid-row: 1/2;
                font-size: 2.5rem;
            }

            p{
                display: flex;
                justify-content: flex-start;
                padding: 1rem 0 0 0;
                margin: 0;
                grid-row: 2/3;
                grid-column: 2/3;                
                width: 500px;
                font-size: 20px;
            }
        }
    }
`;

export default styles;