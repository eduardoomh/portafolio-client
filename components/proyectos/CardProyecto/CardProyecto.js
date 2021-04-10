import { useEffect, useState } from "react";
import Link from "next/link";
import useWindowSize from "hooks/useWindowSize";
import MainBoton from "components/reutilizables/MainBoton";
import styles from "./styles";
import Tooltip from "components/reutilizables/Tooltip";

export default function CardProyecto(props) {
    const { nombre, imagen, tecnologias_principales, id } = props.data;
    const { width } = useWindowSize();
    const [size, setSize] = useState(false);


    useEffect(() => {
        if (width >= 600) {
            setSize(true);
        }
    }, [width]);


    return (
        <>
            <Link href={`/proyectos/${id}`}>
                <a>
                    <article className="contenedor">
                        <ul>
                            {
                                tecnologias_principales?.map(t => (
                                    <li key={t.nombre}>

                                        <Tooltip nombre={t.nombre} position="top center">
                                            <img
                                                src={t.imagen}
                                                alt={t.nombre}
                                                width={40}
                                                height={40}
                                            />
                                        </Tooltip>

                                    </li>
                                ))
                            }
                        </ul>
                        <h4>{nombre}</h4>
                        <div>
                            <img src={imagen} alt={nombre} width={size ? 80 : 60} height={size ? 80 : 60} />
                        </div>
                      
                        <section>
                            <MainBoton>Ver Detalle</MainBoton>
                        </section>
                   

                    </article>
                </a>
            </Link>
            <style jsx>{styles}</style>
        </>
    )
}