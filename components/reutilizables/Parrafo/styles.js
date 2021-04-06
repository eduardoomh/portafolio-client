import css from "styled-jsx/css";

const styles = css`
    div{
        h3{
            font-family: "Noto sans";
            font-size: 24px;
            color: var(--text);
        }
        p{
            font-family: "Spectral";
            font-size:1.1rem;
            color: var(--text);
        }
    }

    @media (min-width: 600px){
        div{
            margin-left: 2rem;

            h3{
                font-size: 1.6rem;
            }

            p{
                font-size: 1.3rem;
            }
        }
    }
`;

export default styles;