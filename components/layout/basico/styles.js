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
            }
        }

        
    }
    @media (min-width: 600px){
        div{
            main{
                margin: auto;
                width: 1078px;
            }
        }
    }
`;

export default styles;