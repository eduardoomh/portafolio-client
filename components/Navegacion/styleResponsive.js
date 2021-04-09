import css from 'styled-jsx/css'

export const styleResponsive = css`

    @media (min-width: 1000px) {

    .nav{
        max-width: 10px;
        max-height: 3.5rem;
    }

    header{
        display: grid;
        grid-template-columns: 10rem 1fr;
        grid-template-rows: 1fr;
        min-height: 3.5rem;
        padding: 0 9rem !important;
        }

    .nav{
        grid-row: 1/2 !important;
        grid-column: 2/3 !important;
        display: flex;
        justify-content: flex-end;
        padding: 0;
        margin: 0 !important;
        height: 3.5rem;
        
    }

    .nav ul{
        display: flex;
        flex-direction: row !important;
        justify-content: flex-end;
        align-items: center;
        min-width: 30rem;
        min-height: 3.5rem !important;
        max-height: 3.5rem !important;
        letter-spacing: 1px;
        margin: 0;
        padding: 0;
    }

    .div-img{
        display: flex;
        align-items: center;
        margin: .3rem 0 !important;
    }


    .movil-menu{
        display: none;
    }

    li{
        display: flex;
        align-items: center;
        padding: 0 1rem; 
        padding-top: .3rem;
        list-style: none;
        min-height: 3.5rem !important;
        max-height: 3.5rem !important;
        color: white;
        margin: 0;
        min-height: 100%;
        font-size: 1.2rem !important;
    }

    li:hover{
        transition: .3s;
        text-decoration: underline;
    }

    a{
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 3.5rem;
        padding: 0;
        margin: 0;
    }   


    }
    ` ;

export default styleResponsive;