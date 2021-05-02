import css from "styled-jsx/css";

const styles = css`
    div{
        padding :0 1rem !important;

        h2{
          font-size: 32px;
          margin-bottom: 4rem;
          color: var(--primary);
        }

        ul{
            list-style: none;
        }
    }

    @media (min-height: 600px){
        div{
            padding : 0;
            margin-bottom: 12rem;

            h2{
                font-size: 42px;
            }
        }
    }
`;

export default styles;