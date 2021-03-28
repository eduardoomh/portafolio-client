import css from "styled-jsx/css";

const styles = css`
    article{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 5rem 4rem;
        border: 1px solid #DFDFDF;
    

        ul{
            grid-row: 2/3;
            grid-column: 1/2;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #FAFBFD;
            min-height: 100%;
            margin: 0;
            padding: 0;
            list-style: none;
            gap: .5rem;
        }

        div{
            grid-column:1/2;
            grid-row: 1/2;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #69D6EE;

            img{
                border-radius: 50%;
            }
        }
    }

    @media (min-width: 600px){
        article{
            grid-template-rows: 5rem 16rem 4rem;
            max-width: 18rem;

            ul{
                grid-row: 1/2;
            }

            div{
                grid-row: 2/3;
                height: 16rem;

            }

            section{
                grid-row: 3/4;
                display: flex;
                justify-content: center;
                align-items: center;

            }
        }
    }
`;
export default styles;