import React,{useEffect} from "react";
import Head from "next/head";
import {useQuery} from "@apollo/client";
import {OBTENER_PROYECTOS, OBTENER_PROYECTOS_TERMINADOS} from "../graphql/querys/proyecto";
import LayoutBasico from "../components/layout/LayoutBasico";
import Cabecera from "../components/reutilizables/Cabecera";
import BotonContenedor from "../components/reutilizables/BotonContainer";
import ProyectosList from "../components/reutilizables/ProyectosList";

export default function Proyectos(){
    const {data, loading} = useQuery(OBTENER_PROYECTOS);
    const {data: dataTerminados, loading: loadingTerminados} = useQuery(OBTENER_PROYECTOS_TERMINADOS);
    
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
            <LayoutBasico>
                <Cabecera 
                        titulo="PROYECTOS"
                        descripcion="Aqui estan los proyectos en los que estoy trabajando."
                        gif="https://media.giphy.com/media/SpopD7IQN2gK3qN4jS/giphy.gif"
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
                <BotonContenedor ruta="/contacto" texto="Contactame" />

     
            </LayoutBasico>
        </>
    )
}

