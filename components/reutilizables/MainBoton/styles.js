import css from "styled-jsx/css";

const styles = css`
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 150px;
        height: 39px;
        padding: 1rem;
        background-color: transparent;
        border: 1px solid #413E3E;
        border-radius: 3px;
        font-size: 1.2rem;
        transition: background-color .1s;
        
        
        &:hover{
            background-color: #413E3E;
            color: #ffd464;
        }
    }
`;

export default styles;