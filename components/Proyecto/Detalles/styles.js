import css from "styled-jsx/css";

const styles = css`
    div{
        margin-bottom: 8rem;

        h2{
            padding: 0 1rem;
            color: var(--black);
        }

        ul{
            margin: 0 ;
            list-style: none;
            
            

            li{
                padding: 1rem;
                margin: 0 1rem;
                margin-bottom: 2rem;
                font-family: "Spectral";
                font-size: 1.1rem;
                border-left: 10px solid #06FFB4;

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
                    font-size: 1.3rem;
                    transition: .3s;

                    &:hover{
                        transform: translateX(10px);
                    }
                }
            }
        }
    }
`;
export default styles;