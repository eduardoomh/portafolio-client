import Head from "next/head";
import { useQuery } from "@apollo/client";
import { OBTENER_CONOCIMIENTOS, OBTENER_CONOCIMIENTOS_SECUNDARIOS } from "../graphql/querys/conocimiento";
import LayoutBasico from "../components/layout/LayoutBasico";
import Cabecera from "../components/reutilizables/Cabecera";
import ElementList from "../components/reutilizables/ElementList";
import BotonContainer from "../components/reutilizables/BotonContainer";

export default function Conocimientos() {
    const { data, loading } = useQuery(OBTENER_CONOCIMIENTOS);
    const { data: dataSecundarios, loading: loadingSecundarios } = useQuery(OBTENER_CONOCIMIENTOS_SECUNDARIOS);

    return (
        <>
            <Head>
                <title>Conocimientos - JesusMH</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutBasico>
                <Cabecera
                    titulo="MIS CONOCIMIENTOS"
                    descripcion="Aqui estan todos los conocimientos que tengo."
                    gif="https://media.giphy.com/media/3o7qE1YN7aBOFPRw8E/giphy.gif"
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
                                <BotonContainer ruta="/Proyectos" texto="Mis Proyectos"/>

                            </>
                        )
                }

            </LayoutBasico>
        </>
    )
}