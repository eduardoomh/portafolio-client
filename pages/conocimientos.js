import Head from "next/head";
import { useQuery } from "@apollo/client";
import { OBTENER_LISTA_CONOCIMIENTOS } from "../graphql/querys/conocimiento";
import Portada from '../components/reutilizables/Portada';
import Nota from "../components/reutilizables/Nota";
;
export default function Conocimientos() {
    const { data, loading } = useQuery(OBTENER_LISTA_CONOCIMIENTOS, {
        variables: {
            tipo1: "PRINCIPAL",
            tipo2: "SECUNDARIO"
        }
    });

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

                {
                    loading
                        ? <p>cargando</p>
                        : (
                            <>


                            </>
                        )
                }
                <Nota 
                    texto="Solo yo le doy mantenimiento a esta aplicacion, por lo tanto el proceso de mejoras puede ser tardado." 
                />

            </>
        </>
    )
}