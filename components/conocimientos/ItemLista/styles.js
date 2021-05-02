import css from "styled-jsx/css";

const styles = css`
    li{
        border-left: 10px solid #06FFB4; 
        padding-left: 1rem; 
        padding-top: 0;
        margin-bottom: 4rem;
        transition: transform .2s;

        h3{
            display: inline-block;
            font-size: 22px;
            padding: 0;
            margin: 0;
            color: var(--primary);
        }

        .ul-image{
            display: flex;
            justify-content: flex-start;
            grid-gap: 1rem;
            align-items: center;
            font-size: 32px;
            list-style: none;
            border: none;
            height: 4rem;
            padding: 0;
            margin: 0;

            .image-li{
                margin-left: .5rem;
                margin-right: .5rem;
                border: none;
                padding: 0;
                margin-bottom: 0;
            }
            
        }

        p{
            font-size: 1.1rem;
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
            }

            p{
                font-size: 1.3rem;
            }

            &:hover{
            transform: translateX(5px);
        }
        }
    }
`;

export default styles;