import css from "styled-jsx/css";

const styles = css`
    .container{
        display: grid;
        grid-template-columns: 4rem 1fr;
        grid-template-rows: 3rem 1fr 2rem;
        background-color: #F9F9F9;
        height: 10rem;
        border: 1px solid #d8d8d8;
        border-radius: 10px;

        .icono{
            grid-column: 1/2;
            grid-row: 1/ span 2;       
            display: flex;
            justify-content: center;
            align-items: center; 
            }


        p{
            grid-column: 2/3;
            grid-row: 2/3;
            padding: 0;
            margin: 0;
        }

        h3{
            grid-column: 2/3;
            grid-row: 1/2;
        }

        .fecha{
            grid-column: 2/3;
            display: block;
            height: 2rem;

            span{
                width: 100%;
                color: #274873;
            }
        }
    
    }

    @media (min-width: 600px){
        .container{
            grid-template-columns: 6rem 1fr 12rem;
            grid-template-rows: 3rem 1fr;
            height: 6rem;

            .fecha{
                grid-column:3/4;
                grid-row: 1/span 2;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                height: 100%;

                span{
                    display: flex;
                    justify-content: center;
                    background-color: red;
                    padding: .5rem;
                    margin-right: 1.5em;
                    font-weight: bold;
                    background-color: #FFD464;
                    border: 1px solid #b8b8bb;
                }

            }
        }
    }
`;

export default styles;