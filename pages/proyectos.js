import React,{useEffect} from "react";
import Head from "next/head";
import {useQuery} from "@apollo/client";
import usePerfil from "../hooks/usePerfil";
import {OBTENER_PROYECTOS, OBTENER_PROYECTOS_TERMINADOS} from "../graphql/querys/proyecto";
import Banner from "../components/reutilizables/Banner";
import ProyectosList from "../components/reutilizables/ProyectosList";

export default function Proyectos(){
    const {data, loading} = useQuery(OBTENER_PROYECTOS);
    const {data: dataTerminados, loading: loadingTerminados} = useQuery(OBTENER_PROYECTOS_TERMINADOS);
    const { usuario } = usePerfil();
    
    console.log(dataTerminados)

    useEffect(() => {
        console.log("se vuelve a cargar proyectos");

    }, [data]);

    return(
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
            />

                {
                    loading && loadingTerminados
                        ? <p>cargando</p>
                        :  (
                            <>
                                <ProyectosList 
                                    data={dataTerminados?.obtenerProyectosTerminados} 
                                    texto="Terminados"
                                />

                                <ProyectosList 
                                    data={data?.obtenerProyectos} 
                                    texto="En Desarrollo"
                                />
                            </>

                        )
                }

     
            </>
        </>
    )
}

