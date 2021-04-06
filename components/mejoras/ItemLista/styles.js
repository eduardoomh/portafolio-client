import css from "styled-jsx/css";

const styles = css`
    .container{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 3rem 1fr 2rem;
        border-left: 10px solid var(--secondary);
        

        .icono{
            grid-column: 1/2;
            grid-row: 1/ span 2;       
            display: flex;
            justify-content: center;
            align-items: center; 
            padding: 1rem;
            }


        p{
            grid-column: 2/3;
            grid-row: 2/3;
            padding: .5rem 0 ;
            margin: 0;
            font-family: "Spectral";
            font-size: 1.2rem;
        }

        h3{
            grid-column: 2/3;
            grid-row: 1/2;
            display: inline-flex;
            align-items: center;
            margin: 0;
            font-size: 1.4rem;
        }

        .fecha{
            grid-column: 2/3;
            display: inline-block;
            height: 2rem;
            color: var(--fifth);
            font-weight: bold;

        }

    
    }

    .pendiente{
            border-color: var(--fifth);
        }

    @media (min-width: 600px){
        .container{
            grid-template-columns: 6rem 1fr 12rem;
            grid-template-rows: 3rem 1fr;
            min-height: 8rem;
            margin-bottom: 1rem;
            margin-left: 1rem;


            .fecha{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 100%;
                font-size: 1rem;

            }
        }
    }
`;

export default styles;