import css from "styled-jsx/css";

const styles = css`
    div{
        margin-bottom: 4rem;

        h2{
            padding: 0 1rem;
            color: var(--text);
        }

        ul{
            list-style: none;
            padding: 0 1rem;

            li{
                display: grid;
                grid-template-columns: 3rem 1fr;
                justify-content: flex-start;
                align-items: center;
                font-size: 1.1rem;
                font-family: "Spectral";
                transition: .3s text-decoration;

                &:hover{
                    text-decoration: underline;
                }
                img{
                    padding: .2rem;
                }
            }
        }
    }

    @media (min-width: 600px){
        div{
            margin-bottom: 6rem;

            h2{
                font-size: 2rem;
                padding: 0;
            }

            ul{
                padding: 0;

                li{
                    font-size: 1.3rem;
                    span{
                        padding: 1rem;
                    }
                }
            }
        }
    }
`;

export default styles;