import css from "styled-jsx/css";

const styles = css`
    div{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        text-align: center;
        margin-top: .5rem;
       
        
        h1{
            color: #3C3838;
            font-family: 'Noto Sans', sans-serif;
            padding: 0;
            margin: 0;
        }

        p{
            padding: 0 1rem;
            font-family: 'Spectral', serif;
            text-align: justify;
            font-size: 1.2rem;

        }
                
    }
    @media (min-width: 600px){
        div{
            align-items: flex-start;
            padding-left: 2rem;
            
            h1{
                font-size: 2.5rem;
                
            }

            p{
                padding: 0;
                font-size: 1.5rem;
            }
        }
    }

`;

export default styles;