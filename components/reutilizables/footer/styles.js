import css from "styled-jsx/css";

const styles = css`
    footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 35rem;
        padding: 2rem;
        background-color: var(--primary);
        color: white;
        font-family: 'Spectral', serif;
        font-size: 1rem;

        p{
            font-size: 1rem;
            text-align: center;
        }

        h4{
            font-size: 1.5rem;
        }

        ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            list-style: none;
            padding: 0;

            li{
                text-align: center;
                margin: .3rem 0;
                text-decoration: underline;
            }
                
        }    
                
    }

    @media (min-width: 600px){
        footer{
            height: 30rem;

            p{
                font-size: 1.3rem;
            }

            h4{
                font-size: 1.8rem;
            }

            ul{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-columns: repeat(4, 1fr);
                padding-bottom: 1rem;
                justify-content: flex-start;
                width: 1000px;

                li{
                    display: flex;
                    align-items: flex-start;
                    flex-direction: column;
                    font-size: 1.2rem;

                    span{
                        display: block;
                    }
                }
            }
        }
    }


                
`;

export default styles;