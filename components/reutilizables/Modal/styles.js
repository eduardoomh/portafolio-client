import css from "styled-jsx/css";

const styles = css`
    .modal {
        font-size: 12px;
        background-color: red;
        margin: 0 1rem;

        .content {
            width: 100%;
            padding: 10px 5px;
        }

        
        .close {
            cursor: pointer;
            position: absolute;
            display: block;
            padding: 2px 5px;
            line-height: 20px;
            right: -10px;
            top: -10px;
            font-size: 24px;
            background: #ffffff;
            border-radius: 18px;
            border: 1px solid #cfcece;
        }
    }

`;

export default styles;