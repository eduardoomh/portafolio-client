import css from "styled-jsx/css";

const styles = css`
    article{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 4rem 2rem 14rem 4rem;
        border: 1px solid var(--border);
        min-width: 16rem;
        margin-bottom: 3rem;
    
        ul{
            grid-row: 1/2;
            grid-column: 1/2;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--background);
            min-height: 100%;
            margin: 0;
            padding: 0;
            list-style: none;

           .tecnologia-img{
                margin-left: .5rem;
                margin-right: .5rem;
            }

        }

        .terminado{
            background-color: var(--secondary);
        }

        h4{
            grid-row: 2/3;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.3rem;
            margin: 0;
            padding: 0;
            background-color: var(--background);
            color: var(--primary);
            border: 1px solid var(--border);
            border-width: 1px 0;
            font-weight: normal;
            max-height: 2rem;
        }

        div{
            grid-column:1/2;
            grid-row: 3/4;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--sixth);
            margin: 0;
            height: 14rem;

            img{
                border-radius: 50%;
            }
        }

        section{
            grid-row: 4/5;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            height: 4rem;
        }
    }


    @media (min-width: 600px){
        article{
            grid-template-rows: 4rem 2rem 14rem 4rem;
            max-width: 16rem;
            gap: 0;
            margin-bottom: 1.5rem;

            ul{
                
            }

            h4{
                font-size: 1.3rem;
            }

            div{
                height: 14rem;
                overflow: hidden;

            }

            section{



            }
        }

    }
    
`;
export default styles;