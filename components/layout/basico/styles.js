import css from "styled-jsx/css";

const styles = css`
    div{
        main{
            padding-top: 3rem;
            min-height: 100vh;

            .loading{
                min-height: 100vh;
                max-height: 100vh;
                min-width: 100vw;
                max-width: 100vw;
                text-align: center;
                padding: 1rem;

                div{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 12rem;
                    background-color: #f7f2f2;
                    border-radius: 6px;
                    margin-top: 1rem;

                    p{
                        font-family: "Noto sans";
                        color: #ac9595;
                        font-size: 1.2rem;
                    }

                }



            }
        }


        
    }


    @media (min-width: 600px){
        div{
            main{
                margin: auto;
                width: 1078px;

                .loading{
                    min-width: 1078px;
                    max-width: 1078px;

                    div{
                        height: 16rem;
                    }
                }
            }
        }
    }
`;

export default styles;