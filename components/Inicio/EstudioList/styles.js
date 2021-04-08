import css from "styled-jsx/css";

const styles  = css`
    div{
        padding:  0 1rem;
        margin-bottom: 4rem;

        h2{
            font-size: 32px;
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