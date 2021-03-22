import Head from "next/head";
import { useQuery } from "@apollo/client";
import usePerfil from "../hooks/usePerfil";
import { OBTENER_CONOCIMIENTOS, OBTENER_CONOCIMIENTOS_SECUNDARIOS } from "../graphql/querys/conocimiento";
import LayoutBasico from "../components/layout/LayoutBasico";
import Banner from "../components/reutilizables/Banner";
import ElementList from "../components/reutilizables/ElementList";
import BotonContainer from "../components/reutilizables/BotonContainer";

export default function Conocimientos() {
    const { data, loading } = useQuery(OBTENER_CONOCIMIENTOS);
    const { data: dataSecundarios, loading: loadingSecundarios } = useQuery(OBTENER_CONOCIMIENTOS_SECUNDARIOS);
    const { usuario } = usePerfil();

    return (
        <>
            <Head>
                <title>Conocimientos - JesusMH</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutBasico>
                <Banner
                    texto="Conocimientos"
                    descripcion="Aqui estan todos los conocimientos que tengo."
                    imagen={usuario?.imagen || ""}
                />
                {
                    loading && loadingSecundarios
                        ? <p>cargando</p>
                        : (
                            <>
                                <ElementList
                                    data={data?.obtenerConocimientos}
                                    tipo="Principales"
                                />
                                <ElementList
                                    data={dataSecundarios?.obtenerConocimientosSecundarios}
                                    tipo="Secundarios"
                                />
                                <BotonContainer ruta="/proyectos" texto="Mis Proyectos" />

                            </>
                        )
                }

            </LayoutBasico>
        </>
    )
}