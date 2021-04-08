import css from "styled-jsx/css";

const styles = css`
    article{
        display: grid;
        grid-template-columns: 110px 1fr;
        grid-template-rows:  1fr;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        border: 5px solid var(--secondary);

        div{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        section {
            color: var(--text);

            span{
                font-weight: bold;
            }

            p{
                font-size: 1.1rem;
                font-family: "Spectral";
                padding: 0 .3rem;
            }
        }
    }
`;

export default styles;