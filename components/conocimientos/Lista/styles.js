import css from "styled-jsx/css";

const styles = css`
    div{
        padding :0 1rem !important;

        h2{
          font-size: 32px;
          font-family: "Noto sans";  
          margin-bottom: 4rem;
        }

        ul{
            list-style: none;
        }
    }

    @media (min-height: 600px){
        div{
            padding : 0;
            margin-bottom: 12rem;
        }
    }
`;

export default styles;