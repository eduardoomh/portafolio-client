import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import usePerfil from "../hooks/usePerfil";
import { OBTENER_LISTA_PROYECTOS } from "../graphql/querys/proyecto";
import Banner from "../components/reutilizables/Banner";
import Titulo from "../components/reutilizables/Titulo";
import ListaProyectos from "../components/proyectos/ListaProyectos";
import Portada from "../components/reutilizables/Portada";
import Nota from "../components/reutilizables/Nota";

export default function Proyectos() {
    const { data, loading } = useQuery(OBTENER_LISTA_PROYECTOS, {
        variables: {
            tipo1: "DISPONIBLE",
            tipo2: "EN_DESARROLLO"
        }
    });
    const { usuario } = usePerfil();

    useEffect(() => {


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
                    descripcion={data?.obtenerListaProyectos?.datos?.proyectos}
                />

                {
                    loading
                        ? <p>cargando</p>
                        : (
                            <>
                                <ListaProyectos
                                    data={data?.obtenerListaProyectos?.proyectos_terminados}
                                    texto="Terminados"
                                    id="terminados"
                                />
                                <ListaProyectos
                                    data={data?.obtenerListaProyectos?.proyectos_pendientes}
                                    texto="En Desarrollo"
                                    id="pendientes"
                                />
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

