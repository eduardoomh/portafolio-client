import useEstilos from "../../../hooks/useEstilos";

export default function PerfilDato(props) {
    const { titulo, descripcion, gif } = props;
    const {estilos} = useEstilos();

    return (
        <>
            <div className="perfil-container">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <div>
                    <img alt="gif" src={gif} />
                </div>
            </div>


            <style jsx>{`

            .perfil-container{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 5rem 9rem 1fr;
                min-height: 37rem;
                max-height: 37rem;
                padding: 1rem 2rem;
                margin: 3rem 4rem;
                border: 1px solid ${estilos.colores.bordeGrisOscuro};
                border-radius: 15px;
                background-color: ${estilos.colores.grisClaro}; 
                background-image: ${estilos.colores.grisOscuro};
                font-family: Radley;
 
            }

            .perfil-container:hover{
                    transition: .3s;
                    box-shadow: ${estilos.colores.sombra};
                }

            .perfil-container p{
                font-size: 1.4rem;
            }


            .perfil-container h3{
                font-size: 2rem;
                font-weight: normal;
                color: ${estilos.colores.letraRojizaFuerte};
            }
            .perfil-container div{
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
            }

            .perfil-container div img{
                min-height: 17rem;
                max-height: 17rem;
                margin: 0;
                border: 1px solid ${estilos.colores.bordeGrisClaro};
            }

            @media (max-width: 800px) {
                        .perfil-container{
                            padding: 1rem;
                            margin: 3rem .5rem;
                        }

                        .perfil-container p{
                            font-size: 1.2rem;
                        }

                        .perfil-container div img{
                            min-height: 10rem;
                            max-height: 10rem;
                        }

                        .perfil-container h3{
                            font-size: 1.5rem;
                        }
                    }
                }


        `}</style>
        </>
    )
}