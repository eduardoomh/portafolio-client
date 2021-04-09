import {useState, useEffect} from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { OBTENER_LISTA_CONOCIMIENTOS } from "graphql/querys/conocimiento";
import Portada from 'components/reutilizables/Portada';
import Lista from "components/conocimientos/Lista";
import Nota from "components/reutilizables/Nota";
;
export default function Conocimientos() {
    const [lista, setLista] = useState([]);
    const [conocimientos, setConocimientos] = useState([]);

    const { data } = useQuery(OBTENER_LISTA_CONOCIMIENTOS, {
        variables: {
            tipo1: "PRINCIPAL",
            tipo2: "SECUNDARIO"
        }
    });


    useEffect(() => {
        if(data?.obtenerListaConocimientos){
            setConocimientos(data?.obtenerListaConocimientos);
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
                descripcion={conocimientos?.datos?.conocimientos}
            />

            <Lista 
                titulo="Conocimientos" 
                lista={lista}
            />

                <Nota 
                    texto={conocimientos?.datos?.nota_conocimientos} 
                />

            </>
        </>
    )
}