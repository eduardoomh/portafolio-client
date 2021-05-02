import css from "styled-jsx/css";

const styles = css`
    div{

        h2{
            padding: 0 1rem;
            color: var(--primary);
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
                    width: 100%;
                    color: var(--text);
                }
            }
        }

    }

    @media (min-width: 800px){
        div{
            ul{
                grid-template-columns: repeat(10, 1fr);
                grid-template-rows: 1fr;
            }
        }
    }

    @media (min-width: 1000px){
        div{
            
            h2{
                font-size: 2rem;
            }

            ul{
                padding: 0;

                div{
                    width: 6rem;

                    p{
                        font-size: 1rem;
                    }
                }
            }
        }
    }

    @media (min-width: 1010px){
        div{
            h2{
                padding: 0;
            }
        }
    }

    @media (max-width: 300px){
        div{
            ul{
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: 1fr 1fr 1fr;
            }
        }
    }


`;
export default styles;