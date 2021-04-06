import Image from "next/image";
import Link from "next/link";
import useWindowSize from "../../../hooks/useWindowSize";
import styles from "./styles";
import MainBoton from "../../reutilizables/MainBoton";

export default function Portada(props) {
    const { titulo, fecha, descripcion, imagen, url, estado } = props;
    const { width } = useWindowSize();

    return (
        <>
            <div className="container">
                <div className="imagen">
           
                     <Image
                        src="/proyecto.svg"
                        width={width >= 600 ? 345 : 300}
                        height={width >= 600 ? 345 : 300}
                        alt="proyecto_card"
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
                            <Link href={`http://${url}`}>
                                <a>
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