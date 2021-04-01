import css from "styled-jsx/css";
import mainTheme from "../../../styles/mainTheme";

    const styles = css`    
            .banner{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows:1fr 2fr;
                height: 17.5rem;
                background-image: var(--secondary);
                margin-bottom: 2.5rem;
                margin-top: .9rem;

                h1{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-family: "Radley";
                    font-size: 32px;
                    color: var(--black);
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
                    padding: 0;
                    border-radius: 0 0 10px 10px;

                    .banner__name{
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr 7rem;
                        height: 306px;
                        
                        padding: 0;

                        h1{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 32px;
                            min-height: 100%;
                            margin: 0;
                        }

                        div{
                            grid-row: 2/3;
                            display: flex;
                            justify-content: center;
                            align-items: flex-start;
                            min-height: 100%;
                        }

                    }
                    

                    .perfil{
                        display: flex;
                        justify-content: flex-start;
                        padding-left: 2rem;
                        margin-top: -8.5rem;

                    }

                    .web{
                        display: grid;
                        grid-template-columns: 13rem 1fr 4rem;
                        grid-template-rows: 1fr;
                        width: 100%;
                        height: 4rem;
                        border-bottom: 1px solid #B9A6A6;
                        background-color: transparent;
                        margin-top: -2.7rem;
                        z-index: 5;
                       

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

                }
            }
`;

export default styles;