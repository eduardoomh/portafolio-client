import Head from "next/head";
import Link from 'next/link';
import { useQuery } from "@apollo/client";
import usePerfil from "../hooks/usePerfil";
import { OBTENER_LISTA_CONOCIMIENTOS } from "../graphql/querys/conocimiento";
import Banner from "../components/reutilizables/Banner";
import Titulo from "../components/reutilizables/Titulo"

export default function Conocimientos() {
    const { data, loading } = useQuery(OBTENER_LISTA_CONOCIMIENTOS, {
        variables: {
            tipo1: "PRINCIPAL",
            tipo2: "SECUNDARIO"
        }
    });
    const { usuario } = usePerfil();

    return (
        <>
            <Head>
                <title>Conocimientos - JesusMH</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <Banner
                    texto="Conocimientos"
                    descripcion="Aqui estan todos los conocimientos que tengo."
                    imagen={usuario?.imagen || ""}
                >
                    <>
                        <li><Link href="#terminados"><a>Principales</a></Link></li>
                        <li><Link href="#pendientes"><a>Secundarios</a></Link></li>
                        <li><Link href="#detalles"><a>Detalles</a></Link></li>
                    </>
                </Banner>
                <Titulo 
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

            </>
        </>
    )
}