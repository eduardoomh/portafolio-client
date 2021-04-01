import {useEffect, useState} from "react";
import Link from "next/link";
import useWindowSize from "../../../hooks/useWindowSize";
import MainBoton from "../../reutilizables/MainBoton";
import styles from "./styles";

export default function CardProyecto(props){
    const {nombre, imagen, tecnologias_principales, id} = props.data;
    const {width} = useWindowSize();
    const [size, setSize] = useState(false);

    useEffect(() => {
        if(width >= 600){
            setSize(true);
        }
    }, [width]);


    return(
        <>
        <Link href={`/proyectos/${id}`}>
            <a>
                <article className="contenedor">
                    <ul>
                        {
                            tecnologias_principales?.map(t => (
                                <li key={t.nombre}>
                                    <img 
                                        src={t.imagen} 
                                        alt={t.nombre} 
                                        width={40} 
                                        height={40} 
                                    />
                                </li>
                            ))
                        }
                    </ul>
                    <div>
                        <img src={imagen} alt={nombre} width={size ? 80 : 60} height={size ? 80: 60} />
                    </div>
                    {
                        width >= 600 && (
                            <section>
                                <MainBoton>Ver Detalle</MainBoton>
                            </section>
                        )
                    }

                </article>
            </a>
        </Link>
        <style jsx>{styles}</style>
        </>
    )
}