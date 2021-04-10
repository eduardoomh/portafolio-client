import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { OBTENER_LISTA_PROYECTOS } from "graphql/querys/proyecto";
import useWindowSIze from "hooks/useWindowSize";
import ListaProyectos from "components/proyectos/ListaProyectos";
import Portada from "components/reutilizables/Portada";
import Nota from "components/reutilizables/Nota";
import ProyectosVector from "components/proyectos/ProyectosVector";

export default function Proyectos() {
    const [proyectos, setProyectos] = useState([]);
    const {width} = useWindowSIze();
    const { data, loading } = useQuery(OBTENER_LISTA_PROYECTOS, {
        variables: {
            tipo1: "DISPONIBLE",
            tipo2: "EN_DESARROLLO"
        }
    });

    useEffect(() => {

        if(data?.obtenerListaProyectos){
            setProyectos(data?.obtenerListaProyectos);
        }

    }, [data]);

    return (
        <>
            <Head>
                <title>Proyectos - JesusMH</title>
                <link rel="icon" href="/mh.ico" />
            </Head>
            <>
                <Portada 
                    imagen="/proyectos.svg" 
                    titulo="Mis Proyectos" 
                    descripcion={proyectos?.datos?.proyectos}
                >
                    <ProyectosVector width={width >= 1000 ? 480 : 310} height={width >= 1000 ? 480 : 310} />
                </Portada>

                {
                    loading
                        ? <p>cargando</p>
                        : (
                            <>
                                <ListaProyectos
                                    terminados={proyectos?.proyectos_terminados}
                                    pendientes={proyectos?.proyectos_pendientes}
                                />
                            </>

                        )
                }
                <Nota 
                    texto={proyectos?.datos?.nota_proyectos}
                />



            </>
        </>
    )
}

