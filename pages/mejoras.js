import Head from "next/head";
import { useQuery } from "@apollo/client";
import { OBTENER_MEJORA } from "../graphql/querys/mejora";
import Portada from "../components/reutilizables/Portada";
import Lista from "../components/mejoras/Lista";
import Nota from "../components/reutilizables/Nota";


export default function Mejoras() {
    const { data } = useQuery(OBTENER_MEJORA);

    return (
        <>
            <Head>
                <title>Mejoras - JesusMH</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <Portada 
                    imagen="/mejoras.svg" 
                    titulo="Futuras Mejoras" 
                    descripcion={data?.obtenerMejora?.descripcion}
                />
                <Lista 
                    pendientes={data?.obtenerMejora?.mejoras_pendientes} 
                    terminadas={data?.obtenerMejora?.mejoras_terminadas}
                />
                <Nota 
                    texto="Solo yo le doy mantenimiento a esta aplicacion, por lo tanto el proceso de mejoras puede ser tardado." 
                    />
            </>
        </>
        
    )
}