import css from "styled-jsx/css";

const styles = css`
    div{
        margin-bottom: 4rem;

        h2{
            padding: 0 1rem;
            color: var(--black);
        }

        ul{
            margin: 0 1rem;
            

            li{
                padding: .5rem;
                margin: 0 1rem;
                font-size: "Spectral";
            }
        }
    }

    @media (min-width: 600px){
        div{
            h2{
                font-size: 2rem;
                padding: 0;
            }

            ul{
                li{
                    font-size: 1.1rem;
                }
            }
        }
    }
`;
export default styles;