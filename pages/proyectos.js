import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import usePerfil from "../hooks/usePerfil";
import { OBTENER_LISTA_PROYECTOS } from "../graphql/querys/proyecto";
import Banner from "../components/reutilizables/Banner";
import Titulo from "../components/reutilizables/Titulo";
import ListaProyectos from "../components/proyectos/ListaProyectos";

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
                <Banner
                    texto="Proyectos"
                    descripcion="Aqui estan los proyectos en los que estoy trabajando."
                    imagen={usuario?.imagen || ""}
                >
                    <>
                        <li><Link href="#terminados"><a>Terminados</a></Link></li>
                        <li><Link href="#pendientes"><a>Pendientes</a></Link></li>
                        <li><Link href="#detalles"><a>Detalles</a></Link></li>
                    </>
                </Banner>
                <Titulo
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



            </>
        </>
    )
}

