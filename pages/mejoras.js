import {useState, useEffect} from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { OBTENER_MEJORA } from "graphql/querys/mejora";
import useWindowSIze from "hooks/useWindowSize";
import Portada from "components/reutilizables/Portada";
import Lista from "components/mejoras/Lista";
import Nota from "components/reutilizables/Nota";
import MejorasVector from "components/mejoras/MejorasVector";


export default function Mejoras() {
    const [mejoras, setMejoras] = useState([]);
    const { data } = useQuery(OBTENER_MEJORA);
    const {width} = useWindowSIze();

    useEffect(() => {
        if(data?.obtenerMejora){
            setMejoras(data?.obtenerMejora)
        }
    }, [data])

    return (
        <>
            <Head>
                <title>Mejoras - JesusMH</title>
                <link rel="icon" href="/mh.ico" />
            </Head>
            <>
                <Portada 
                    imagen="/mejoras.svg" 
                    titulo="Futuras Mejoras" 
                    descripcion={mejoras?.descripcion}
                >
                    <MejorasVector width={width >= 1000 ? 480 : 310} height={width >= 1000 ? 400 : 310} />
                </Portada>

                <Lista 
                    pendientes={mejoras?.mejoras_pendientes} 
                    terminadas={mejoras?.mejoras_terminadas}
                />
                <Nota 
                    texto={mejoras?.notas} 
                    />
            </>
        </>
        
    )
}