import css from "styled-jsx/css";

const styles = css`
    div{
        padding: 1rem;
        margin-top: 4.5rem;
        margin-bottom: 8rem;

        h2{
            font-size: 2rem;
            color: var(--primary);

        }

        ul{
            padding-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            
        }
    }
    @media (min-width: 600px){
        div{
            padding: 0;

            h2{
                font-size: 2.2rem;
            }
        }
    }

`;

export default styles;