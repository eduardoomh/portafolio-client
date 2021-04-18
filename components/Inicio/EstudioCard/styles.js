import css from "styled-jsx/css";

const styles = css`
    article{
        display: grid;
        grid-template-columns: 60px 1fr;
        grid-template-rows:  1fr;
        margin-bottom: 2rem;
        padding: 1rem 0;
        border: 5px solid var(--secondary);

        div{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        section {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: .6fr 1fr 1.5rem;
            color: var(--text);
            padding-left: .5rem;
            gap: 0;

            span{
                font-weight: bold;
                margin: 0;
            }

            p{
                font-size: 1.1rem;
                font-family: "Spectral";
                padding: 0;
                margin: 0;
            }

            h3{
                margin: 0;
            }
        }
    }

    @media (min-width: 800px){
        article{
            grid-template-columns: 100px 1fr;
            padding: 1rem 1rem;

        }
    }
`;

export default styles;