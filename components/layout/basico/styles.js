import css from "styled-jsx/css";

const styles = css`
    div{
        main{
            padding-top: 3rem;
            min-height: 100vh;

            .loading{
                flex-direction: column;
                justify-content: flex-start;
                min-height: 100vh;
                max-height: 120vh;
                min-width: 100vw;
                max-width: 100vw;
                text-align: center;
                padding: 1rem;


            }
        }


        
    }


    @media (min-width: 600px){
        div{
            main{
                margin: auto;
                width: 1078px;

                .loading{
                    flex-direction: column;
                    justify-content: flex-start;
                    min-width: 1078px;
                    max-width: 1078px;

                }
            }
        }
    }
`;

export default styles;