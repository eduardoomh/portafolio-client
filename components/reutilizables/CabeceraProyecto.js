import useEstilos from "../../hooks/useEstilos";
import Boton from "../reutilizables/Boton";

export default function CabeceraProyecto(props){
    const {nombre, descripcion, imagen, url} = props;
    const {estilos} = useEstilos();

    return(
        <>
        <div className="contenedor">
            <div className="datos">
                <h2>Proyecto: {nombre}</h2>
                <p>{descripcion}</p>
                <div>
                    <a href={url}>
                        <Boton>Ver Proyecto</Boton>
                    </a>
                    
                </div>
            </div>
            <div className="imagen">
                <img src={imagen} alt={nombre} />
            </div>
          
        </div>
        <style jsx>{`
            .contenedor{
                display: grid;
                grid-template-columns: 1.5fr 1fr;
                grid-template-rows: 1fr;
                min-height: 20rem;
                margin: 2rem 4rem;
                padding: 2rem;
                background-color: ${estilos.colores.grisClaro};
                border: 1px solid ${estilos.colores.bordeGrisClaro};
                font-family: Radley;
            }

            .datos{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 3rem 1fr 4rem;
                padding: 0;
                gap: 1rem;

            }

            .datos div{
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;
            }

            .datos h2{
                font-size: 2rem;
                height: 2rem;
            }

            .datos p{
                font-size: 1.2rem;
            }

            .imagen{
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: ${estilos.colores.azulClaro};
            }

            .imagen img{
                width: 6rem;
                border-radius: 50%;
            }
            `}</style>
        </>
    )
}