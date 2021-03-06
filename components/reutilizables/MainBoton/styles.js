import css from "styled-jsx/css";

const styles = css`
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-width: 142px;
        height: 46px;
        padding: 1rem;
        background-color: transparent;
        color: var(--text);
        border: 1px solid var(--primary);
        border-radius: 3px;
        font-size: 1rem;
        transition: background-color .1s;
        
        
        &:hover{
            background-color: var(--primary);
            color: var(--text-alternative);
            cursor: pointer;
        }
    }
`;

export default styles;