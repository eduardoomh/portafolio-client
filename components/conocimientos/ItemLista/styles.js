import css from "styled-jsx/css";

const styles = css`
    li{
        border-left: 10px solid #06FFB4; 
        padding-left: 1rem; 
        padding-top: 0;
        margin-bottom: 4rem;
        transition: transform .2s ;

        &:hover{
            
            transform: translateX(20px);
        }

        h3{
            display: inline-block;
            font-size: 22px;
            font-family: "Noto sans";
            padding: 0;
            margin: 0;
        }

        span{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: .5rem;
            font-size: 32px;
            
        }

        p{
            font-size: 1.1rem;
            font-family: "Spectral";
        }
    }

    @media (min-width: 600px){
        li{
            h3{
                font-size: 1.6rem;
                margin-right: 2rem;
            }

            span{
                display: inline-flex;
                font-size: 2.5rem;
                font-size: "Noto sans";
            }

            p{
                font-size: 1.3rem;
            }
        }
    }
`;

export default styles;