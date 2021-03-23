import css from 'styled-jsx/css'
import mainTheme from "../../styles/mainTheme";

export const styleResponsive = css`

    @media (min-width: 500px) {

    .nav{
        max-width: 10px;
    }

    .header{
        display: grid;
        grid-template-columns: 10rem 1fr;
        grid-template-rows: 1fr;
        min-height: 4rem;
        }

    .nav{
        grid-row: 1/2;
        grid-column: 2/3;
        display: flex;
        justify-content: flex-end;
        padding: 0;
        height: 4rem;
        
    }

    .nav ul{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        min-width: 30rem;
        font-size: 1.2rem;
        letter-spacing: 1px;
        margin: 0;
        padding: 0;
    }


    .movil-menu{
        display: none;
    }

    li{
    display: flex;
    align-items: center;
    padding: 0 1rem; 
    list-style: none;
    min-height: 3rem;
    color: white;
    margin: 0;
    min-height: 100%;
    }

    li:hover{
        transition: .3s;
        background-color: ${mainTheme.colores.negroOpacoHover};
    }

    a{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 4rem;
    padding: 1.2rem 0;
    }


    }
    ` ;

export default styleResponsive;