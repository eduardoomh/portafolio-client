import css from "styled-jsx/css";

const styles = css`
    div{
        margin-bottom: 8rem;

        h2{
            padding: 0 1rem;
            color: var(--primary);
        }

        ul{
            margin: 0 ;
            list-style: none;
            
            

            li{
                padding: 1rem;
                margin: 0 1rem;
                margin-bottom: 2rem;
                font-size: 1.1rem;
                border-left: 10px solid var(--secondary);

            }
        }
    }

    @media (min-width: 600px){
        div{
            h2{
                font-size: 2rem;
            }

            ul{
                li{
                    font-size: 1.3rem;
                    transition: .3s;

                    &:hover{
                        transform: translateX(10px);
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
`;
export default styles;