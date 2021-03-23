import css from 'styled-jsx/css'
import mainTheme from "../../styles/mainTheme";
import responsive from "./responsive";

export const styles = css`

        header{
            display: grid;
            grid-template-columns: 6rem 1fr;
            grid-template-rows: 1fr;
            padding:  0 1rem;
            min-height: 3rem;
            max-height: 3rem;
            min-width: 100vw;
            padding: 0 2rem;
            background-color: ${mainTheme.colores.header};
            font-family: Radley serif;
            position: fixed;
            z-index: 12;

            .div-img{
                display: flex;
                align-items: center;
                gap: 1rem;
                height: 3rem;
            }

            .movil-menu{
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }

            .nav{
                transition: .3s;
                display: grid;
                grid-row: 2/3;
                grid-column: 1/span 2;
                min-width: 100%;
                max-width: 100%;
                height: 16rem;
                overflow: hidden;

                ul{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-end;
                    min-height: inherit;
                    max-height: inherit;
                    gap: 0;
                    padding: 0;

                    li{
                        display: flex;
                        justify-content: flex-end;
                        max-height: 1rem !important;
                        min-height: 4rem;
            
                        padding-right: .5rem;
                        margin: 0;
                        gap: 0;
                        font-size: 1.5rem;
                        color: white;
                    }

                }
            }


        }
        ${responsive}
    ` ;

export default styles;