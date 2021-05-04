import Image from "next/image";
import Link from "next/link";
import useWindowSize from "hooks/useWindowSize";
import styles from "./styles";
import MainBoton from "components/reutilizables/MainBoton";
import ProyectoVector from "components/Proyecto/ProyectoVector";

export default function Portada(props) {
    const { titulo, fecha, descripcion, imagen, url, estado } = props;
    const { width } = useWindowSize();

    return (
        <>
            <div className="container">
                <div className="imagen">
           
                    <ProyectoVector 
                        width={width >= 800 ? 345 : 300}
                        height={width >= 800 ? 345 : 300}
                    />

                    <img
                        className="user-image"
                        src={imagen}
                        width={64}
                        height={64}
                        alt="jesus mh"
                    />

                </div>
                <h1>Proyecto: {titulo}</h1>
                <span>Fecha de creacion: {fecha}</span>
                <p>{descripcion}</p>
                <div className="boton-contenedor">
                    {
                        estado === "DISPONIBLE" ? (
                            <Link  href={`http://${url}`}>
                                <a target="_blank">
                                    <MainBoton>Visualizar</MainBoton>
                                </a>
                            </Link>
                        ) : (
                            <strong>En Desarrollo</strong>
                        )
                    }


                </div>
            </div>
            <style jsx>{styles}</style>
        </>

    )
}