import Image from "next/image";
import Link from "next/link";
import useWindowSize from "hooks/useWindowSize";
import styles from "./styles";
import MainBoton from "components/reutilizables/MainBoton";

export default function Portada(props) {
    const { titulo, fecha, descripcion, url, estado, infografia } = props;
    const { width } = useWindowSize();

    return (
        <>
            <div className="container">
                <div className="imagen">
                    {
                        infografia ? (
                            <Image
                                src={infografia}
                                width={width >= 800 ? 420 : 320}
                                height={width >= 800 ? 300 : 230}
                                alt="jesus mh"
                            />
                        ) : (
                            <Image
                                src="/gray.jpg"
                                width={width >= 800 ? 420 : 320}
                                height={width >= 800 ? 300 : 230}
                                alt="jesus mh"
                            />
                        )
                    }
                </div>
                <h1>Proyecto: {titulo}</h1>
                <span>Fecha de creacion: {fecha}</span>
                <p>{descripcion}</p>
                <div className="boton-contenedor">
                    {
                        estado === "DISPONIBLE" ? (
                            <Link href={`http://${url}`}>
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