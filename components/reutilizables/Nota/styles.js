import css from "styled-jsx/css";

const styles = css`
    div{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows:.3fr 1fr;
        margin-bottom: 2rem;
        margin-top: 4rem;
        gap: 0;
        border-left: 10px solid var(--secondary); 
        margin-left: 1rem;
        

        .avatar{
            grid-column: 1/2;
            grid-row: 1/2;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin: 0;
            border: none;
            
        }

        .burbuja{
            grid-column: 2/3;
            grid-row: 1/2;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 0;
            border-left: 0 solid red;

        }

        p{
            grid-column:1/span 2;
            grid-row:2/3;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 0 1rem;
            margin: 0;
            font-family: "Spectral";
        }

    }

    @media (min-width: 600px){
        div{
            grid-template-columns: 6rem 6rem 1fr;
            grid-template-rows: 1fr;
            height: 6rem;
            margin-bottom: 4rem;

            .avatar{
                grid-column: 1/2;
                grid-row:1/2;
            }

            .burbuja{
                grid-column: 2/3;
                grid-row:1/2;
            }
            p{
                grid-column: 3/4;
                grid-row:1/2;
                display: flex;
                align-items: center;
                margin-top: 0;
                height: 6rem;
                font-size: 1.2rem;
            }
        }
       

    }
`;

export default styles;