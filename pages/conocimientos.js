import Head from "next/head";
import {useQuery} from "@apollo/client";
import { OBTENER_CONOCIMIENTOS} from "../graphql/querys/conocimiento";
import LayoutBasico from "../components/layout/LayoutBasico";
import Cabecera from "../components/reutilizables/Cabecera";
import ElementList from "../components/reutilizables/ElementList";

export default function Conocimientos(){
    const {data, loading} = useQuery(OBTENER_CONOCIMIENTOS);

    if(loading) return null;

    return(
        <>
            <Head>
                <title>Conocimientos - JesusMH</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutBasico>
                <Cabecera 
                    titulo="CONOCIMIENTOS"
                    descripcion="Aqui estan todos los conocimientos que tengo."
                />
                <ElementList 
                    data={data.obtenerConocimientos}
                 />
            </LayoutBasico>
        </>
    )
}