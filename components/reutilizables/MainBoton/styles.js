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
        border: 1px solid #413E3E;
        border-radius: 3px;
        font-size: 1rem;
        transition: background-color .1s;
        
        
        &:hover{
            background-color: #413E3E;
            color: white;
            cursor: pointer;
        }
    }
`;

export default styles;