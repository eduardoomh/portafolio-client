import css from "styled-jsx/css";

const styles = css`
    div{
        padding: 1rem;
        margin-top: 2rem;
        margin-bottom: 8rem;

        h2{
            font-size: 2rem;
            font-family: "Noto sans";
            color: var(--black);

        }

        ul{
            padding-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            
        }
    }
    @media (min-width: 600px){
        div{
            padding: 0;
        }
    }

`;

export default styles;