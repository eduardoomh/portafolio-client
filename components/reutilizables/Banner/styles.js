import css from "styled-jsx/css";
import mainTheme from "../../../styles/mainTheme";

    const styles = css`    
            .banner{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows:1fr 2fr;
                height: 17.5rem;
                background-color: #FFD464;
                margin-bottom: 2.5rem;

                h1{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-family: "Radley";
                    font-size: 32px;
                }

                div{
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                }

                .perfil{
                    margin-top: 1.5rem;
                }

            }

            @media (min-width: 600px){
                .banner{
                    grid-template-rows: 1fr 1fr;
                    margin-bottom: 5rem;

                    .perfil{
                        display: flex;
                        justify-content: flex-start;
                        padding-left: 5rem;
                        margin-top: -2rem;

                    }

                    .web{
                        display: grid;
                        grid-template-columns: 13rem 1fr 4rem;
                        grid-template-rows: 1fr;
                        width: 100%;
                        height: 4rem;
                        border: 1px solid #D6D1D1;
                        background-color: white;
                        margin-top: -3rem;
                        z-index: 5;
                        box-shadow: ${mainTheme.colores.sombra};

                        ul{
                            grid-column: 2/3;
                            grid-row: 1/2;
                            display: flex;
                            gap: 1rem;
                            list-style: none;
                            font-size: 1.2rem;
                            font-weight: bold;
                        }

                        .github{
                            grid-column: 3/4;
                            grid-row: 1/2;                 
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 4rem !important;
                 
                        }

                    }

                    h1{
                        font-size: 40px;
                    }
                }
            }
`;

export default styles;