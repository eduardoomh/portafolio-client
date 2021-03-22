import Head from "next/head";
import usePerfil from "../hooks/usePerfil";
import LayoutBasico from "../components/layout/LayoutBasico";
import Banner from "../components/reutilizables/Banner";


export default function Mejoras() {
    const { usuario } = usePerfil();

    return (
        <>
            <Head>
                <title>Mejoras - JesusMH</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutBasico>
                <Banner
                    texto="Mejoras"
                    descripcion="La aplicacion esta en constante cambio"
                    imagen={usuario?.imagen || ""}
                />

            </LayoutBasico>
        </>
    )
}