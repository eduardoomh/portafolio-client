import css from "styled-jsx/css";

const styles = css`
    div{

        h2{
            padding: 0 1rem;
        }

        ul{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: 1fr 1fr;
            padding: 0 1rem;
            gap: .4rem;
            margin-bottom: 4rem;

            div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 60px;
                padding: 0;

                p{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-size: .8rem;
                    font-weight: bold;
                    font-family: "Noto sans";
                    width: 100%;
                    color: var(--text);
                }
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
                grid-template-columns: repeat(10, 1fr);
                grid-template-rows: 1fr;

                div{
                    width: 6rem;

                    p{
                        font-size: 1rem;
                    }
                }
            }
        }
    }
`;
export default styles;