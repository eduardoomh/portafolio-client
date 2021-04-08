import css from "styled-jsx/css";

const styles  = css`
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 6rem;
        
        span{
            padding: .5rem;
        }
    }

    @media (min-width: 600px){
        div{
            height: initial;
        }
    }
`;
export default styles;