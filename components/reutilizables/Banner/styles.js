import css from "styled-jsx/css";
import mainTheme from "../../../styles/mainTheme";

    const styles = css`    
            .banner{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows:1fr 2fr;
                height: 17.5rem;
                background-color: #FFD464;

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

                    .perfil{
                        display: flex;
                        justify-content: flex-start;
                        padding-left: 5rem;
                        margin-top: -2rem;

                    }

                    .web{
                        width: 100%;
                        height: 4rem;
                        border: 1px solid #D6D1D1;
                        background-color: white;
                        margin-top: -3rem;
                        z-index: 5;
                        box-shadow: ${mainTheme.colores.sombra};

                        ul{
                            display: flex;
                            gap: 1rem;
                            list-style: none;
                            font-size: 1.2rem;
                            font-weight: bold;
                        }

                    }

                    h1{
                        font-size: 40px;
                    }
                }
            }
`;

export default styles;