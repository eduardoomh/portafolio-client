import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { OBTENER_LISTA_PROYECTOS } from "../graphql/querys/proyecto";
import ListaProyectos from "../components/proyectos/ListaProyectos";
import Portada from "../components/reutilizables/Portada";
import Nota from "../components/reutilizables/Nota";

export default function Proyectos() {
    const [proyectos, setProyectos] = useState([]);
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
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <Portada 
                    imagen="/proyectos.svg" 
                    titulo="Mis Proyectos" 
                    descripcion={proyectos?.datos?.proyectos}
                />

                {
                    loading
                        ? <p>cargando</p>
                        : (
                            <>
                                <ListaProyectos
                                    data={proyectos?.proyectos_terminados}
                                    texto="Terminados"
                                    id="terminados"
                                />
                                <ListaProyectos
                                    data={proyectos?.proyectos_pendientes}
                                    texto="En Desarrollo"
                                    id="pendientes"
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

