import Head from "next/head";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import usePerfil from "../hooks/usePerfil";
import { OBTENER_MEJORA } from "../graphql/querys/mejora";
import Banner from "../components/reutilizables/Banner";
import Titulo from "../components/reutilizables/Titulo";


export default function Mejoras() {
    const { usuario } = usePerfil();
    const { data } = useQuery(OBTENER_MEJORA);

    return (
        <>
            <Head>
                <title>Mejoras - JesusMH</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <Banner
                    texto="Mejoras"
                    descripcion="La aplicacion esta en constante cambio"
                    imagen={usuario?.imagen || ""}
                >
                    <>
                        <li><Link href="#terminados"><a>Realizadas</a></Link></li>
                        <li><Link href="#pendientes"><a>En Desarrollo</a></Link></li>
                        <li><Link href="#detalles"><a>Detalles</a></Link></li>
                    </>
                </Banner>
                <Titulo
                    titulo="Futuras Mejoras"
                    descripcion={data?.obtenerMejora?.descripcion}
                />

            </>
        </>
    )
}