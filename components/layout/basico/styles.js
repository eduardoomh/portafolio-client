import css from "styled-jsx/css";

const styles = css`
    div{
        display: grid;


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

        .navegacion{
            height: 3.8rem;
            width: 100vw;
            background-color: var(--primary);
            position: fixed;
            z-index: 40;
        }


        
    }


    @media (min-width: 600px){
        div{
            main{
                margin: auto;
                width: 1000px;

                .loading{
                    flex-direction: column;
                    justify-content: flex-start;
                    min-width: 1000px;
                    max-width: 1000px;

                }
            }
        }
    }
`;

export default styles;

export const lightVariables = css.global`
:root{
   --primary: #3C3838;
   --secondary: linear-gradient(to left, #d0ffae, #94f1d5a1);
   --black: #171717;
   --card-proyecto: #A9EDFC;
}
`;

export const darkVariables = css.global`
:root{
   --primary: #3C3838;
   --secondary: #94f1d5a1;
   --black: #171717;
   --card-proyecto: #A9EDFC;
}
`;