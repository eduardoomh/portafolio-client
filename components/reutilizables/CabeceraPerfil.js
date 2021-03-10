import usePerfil from "../../hooks/usePerfil";
import useEstilos from "../../hooks/useEstilos";

export default function CabeceraPerfil() {
    const { usuario } = usePerfil();
    const { estilos } = useEstilos();

    return (
        <>
            <div className="cabecera">
                <div className="cabecera_perfil">
                    <img src={usuario.imagen} />
                    <h2>{usuario.nombres} <br /> {usuario.apellido_paterno} {usuario.apellido_materno}</h2>
                    <p>{usuario.apodo}</p>
                </div>

                <div className="cabecera_contenido">
                    <h1>BUEN DIA! <br /> SOY DESARROLLADOR WEB <br /> BIENVENIDO A MI PORTAFOLIO PERSONAL</h1>
                    <div>
                        <img src="https://media.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif"></img>
                    </div>


                </div>
            </div>

            <style jsx>{`
                .cabecera{
                    display: grid;
                    grid-template-columns: 1.2fr 2fr;
                    grid-template-rows: 1fr;
                    min-height: 30rem;
                    padding: 4rem;
                    margin: 2rem 4rem;
                    border: 1px solid ${estilos.colores.bordeGrisClaro};
                    border-radius: 15px;
                    background-color: ${estilos.colores.grisClaro}; 
                    font-family: Radley;
                    box-shadow: ${estilos.colores.sombra};
                    overflow-x: hidden;

                }


                .cabecera:hover{
                    transition: .3s;
                    box-shadow: ${estilos.colores.sombraHover};
                }

                @media (max-width: 1085px) {
                        .cabecera{
                            margin: 2rem 1rem;
                            padding: 1rem;
                        }
                    }
                }

                @media (max-width: 865px) {
                        .cabecera{
                            width: 100%;
                        }

                    }
                }

                .cabecera_perfil{
                    margin: 2rem 3rem;
                    font-size: 1.2rem;
                    border-right: 2px solid ${estilos.colores.bordeGrisClaro};
                }

                .cabecera_perfil p{
                    color: ${estilos.colores.letraRojiza};
                    animation-delay: 0;
                    animation-duration: 1.5s;
                    animation-name: apodo;
                }
                .cabecera_perfil img{
                    width: 8rem;
                    height: 8rem;
                    border-radius: 50%;
                    animation-delay: 0;
                    animation-duration: 1.5s;
                    animation-name: perfil;
                }

                .cabecera_perfil img:hover{
                    transition: .3s;
                    transform: scale(1.1,1.1);
                }

                .cabecera_perfil h2{
                    font-weight: normal;
                    animation-delay: 0;
                    animation-duration: 1.5s;
                    animation-name: nombre;
                }

                .cabecera_contenido img{
                    height: 16rem;                    

                }

                .cabecera_contenido h1{
                    font-size: 1.9rem;
                    font-weight: normal;
                    animation-delay: 0;
                    animation-duration: 3s;
                    animation-name: h1;
                    

                }

                .cabecera_contenido div{
                    display: flex;
                    justify-content: center;
                }

                @keyframes perfil {
                    from {
                        margin-left: -200px;
                    }

                    to {
                        margin-left: 0;
                    }
                }

                @keyframes nombre {
                    from {
                        margin-top: -200px;
                    }

                    to {
                        margin-top: 1em;
                    }
                }

                @keyframes apodo {
                    from {
                        margin-left: -200px;
                    }

                    to {
                        margin-left: 0;
                    }
                }

                @keyframes h1 {
                    from {
                        margin-top: -200px;
                    }

                    to {
                        margin-top: 0.6em;
                    }
                }
            `}</style>
        </>
    )
}