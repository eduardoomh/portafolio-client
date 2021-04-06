import {useState, useEffect} from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { OBTENER_LISTA_CONOCIMIENTOS } from "../graphql/querys/conocimiento";
import Portada from '../components/reutilizables/Portada';
import Lista from "../components/conocimientos/Lista";
import Nota from "../components/reutilizables/Nota";
import { React } from "@ungap/global-this";
;
export default function Conocimientos() {
    const [lista, setLista] = useState([]);

    const { data } = useQuery(OBTENER_LISTA_CONOCIMIENTOS, {
        variables: {
            tipo1: "PRINCIPAL",
            tipo2: "SECUNDARIO"
        }
    });


    useEffect(() => {
        if(data?.obtenerListaConocimientos){
            let array = data.obtenerListaConocimientos;

            setLista([...array.conocimientos_principales, ...array.conocimientos_secundarios]);
        }
    }, [data]);

    return (
        <>
            <Head>
                <title>Conocimientos - JesusMH</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
            <Portada 
                imagen="/conocimientos.svg" 
                titulo="Mis Conocimientos" 
                descripcion={data?.obtenerListaConocimientos.datos.conocimientos}
            />

            <Lista 
                titulo="Conocimientos" 
                lista={lista}
            />

                <Nota 
                    texto="Solo yo le doy mantenimiento a esta aplicacion, por lo tanto el proceso de mejoras puede ser tardado." 
                />

            </>
        </>
    )
}