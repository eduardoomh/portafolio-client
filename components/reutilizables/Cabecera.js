import useEstilos from "../../hooks/useEstilos";

export default function Cabecera(props){
    const{titulo, descripcion, gif} = props;
    const {estilos} = useEstilos();

    return(
        <>
            <div className="contenedor">
                <div className="contenido">
                    <h1>{titulo}</h1>
                    <p>{descripcion}</p>
                </div>
                <article className="contenido-gif">
                    <img alt="hombre en su computador" src={gif} />
                </article>
            </div>

            <style jsx>{`
                .contenedor{
                    display: grid;
                    grid-template-columns: 1.4fr 1.6fr;
                    grid-template-rows: 1fr;
                    min-height: 28rem;
                    padding: 2rem;
                    margin: 2rem 4rem;
                    border: 1px solid ${estilos.colores.bordeGrisClaro};
                    border-radius: 15px;
                    background-color: ${estilos.colores.grisClaro}; 
                    font-family: Radley;
                    box-shadow: ${estilos.colores.sombra};
                }

                .contenedor:hover{
                    transition: .3s;
                    box-shadow: ${estilos.colores.sombraHover};
                }

                .contenido{
                    margin: 2rem 3rem;
                    font-size: 1.2rem;
                    border-right: 2px solid ${estilos.colores.bordeGrisClaro};
                    animation-delay: 0;
                    animation-duration: 1.5s;
                    animation-name: contenido;
                    overflow: hidden;
                }

                .contenido p{
                    color: ${estilos.colores.letraRojiza};
                    font-size: 1.5rem;
                }

                .contenido-gif{
                    display: flex;
                    justify-content: center;
                }

                .contenido-gif img{
                    height: 20rem;
                    border: 1px solid ${estilos.colores.bordeGrisClaro};

                }

                .contenido h1{
                    font-size: 2.2rem;
                    font-weight: bold;
                }

                
                @keyframes contenido {
                    from {
                        transform: scale(0.8,0.8);
                    }

                    to {
                        transform: scale(1,1);
                    }
                

            `}</style>
        </>
    )
}