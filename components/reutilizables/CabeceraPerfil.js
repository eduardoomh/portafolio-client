import {useState, useEffect} from "react";
import usePerfil from "../../hooks/usePerfil";
import useEstilos from "../../hooks/useEstilos";
import useWindowSize from "../../hooks/useWindowSize";

export default function CabeceraPerfil() {
    const [movil, setMovil] = useState(false);
    const { usuario } = usePerfil();
    const { estilos } = useEstilos();
    const size = useWindowSize();

    useEffect(() => {
        if(size.width < 600){
            setMovil(true);
        }else{
            setMovil(false);
        }
    },[size]);

    return (
        <>
            <div className="cabecera">
                <div className="cabecera_perfil">
                    <img src={usuario.imagen} />
                    <h2>{usuario.nombres} <br /> {usuario.apellido_paterno} {usuario.apellido_materno}</h2>
                    <p>{usuario.apodo}</p>
                </div>

                <div className="cabecera_contenido">
                    {
                        movil !== true ? (
                            <h1>BUEN DIA! <br /> SOY DESARROLLADOR WEB <br /> BIENVENIDO A MI PORTAFOLIO PERSONAL</h1>

                        ):(
                            <h1>BUEN DIA! <br /> SOY DESARROLLADOR <br />WEB <br /> BIENVENIDO A  <br />MI PORTAFOLIO <br />PERSONAL</h1>
                        )
                    }
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
                    border: 1px solid ${estilos.colores.bordeGrisOscuro};
                    border-radius: 15px;
                    background-color: ${estilos.colores.grisClaro}; 
                    background-image: linear-gradient(rgba(202,202,202,.1),rgba(213, 170, 170, 0.1));
                    font-family: Radley;
                    overflow-x: hidden;

                }

                .cabecera:hover{
                    transition: .3s;
                    box-shadow: ${estilos.colores.sombraHover};
                }

                .cabecera_perfil{
                    margin: 2rem 3rem;
                    font-size: 1.2rem;
                    border-right: 2px solid ${estilos.colores.bordeGrisClaro};
                }

                .cabecera_perfil p{
                    color: ${estilos.colores.letraRojizaFuerte};
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
                    width: 32rem;                    

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

                @media (max-width: 1085px) {
                        .cabecera{
                            margin: 2rem 1rem;
                            padding: 1rem;
                        }
                    }
                }

                @media (max-width: 865px) {
                        .cabecera{
                            grid-template-columns: 1fr;
                            grid-template-rows: 1fr .5fr;
                            width: 95vw;
                            margin: .5em;
                            padding: 0;
                        }

                        .cabecera_perfil{
                            grid-column: 1/2;
                            grid-row: 2/3;
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            grid-template-rows: 1fr .5fr;
                            padding-top: 1rem;
                            border-right: none;
                            border-top: 2px solid ${estilos.colores.bordeGrisClaro};
                            gap: 0;
                        }

                        .cabecera_perfil img{
                            grid-column:  1/2;
                            grid-row: 1/2;
                            height: 6rem;
                            width: 6rem;
                        }

                        .cabecera_perfil h2{
                            grid-column: 2/3;
                            grid-row: 1/2;
                            font-size: 1.2rem;
                        }

                        .cabecera_perfil p{
                            grid-column: 1/ span 2;
                            grid-row:2/3;
                            display: flex;
                            justify-content: flex-start;
                            align-items: flex-start;
                        }

                        .cabecera_contenido{
                            grid-column: 1/2;
                            grid-row: 1/2;
                            display: grid;
                            grid-template-columns: 1fr;
                            grid-template-rows: .5fr 1fr;
                            justify-content: flex-start;
      
                            margin: 0;
                        }

                        .cabecera_contenido h1{
                            display: flex;
                            justify-content: flex-start;
                            font-size: 1.3rem;
                            padding: 0 .5rem;
                        }

                        .cabecera_contenido div{
                            width: 10rem;
                            width: 100%;
                        }

                        .cabecera_contenido div img{
                            width: 100%;
                        }

                    }
                }
            `}</style>
        </>
    )
}