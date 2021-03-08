import React,{useState, useEffect} from "react";
import Head from "next/head";
import {useQuery} from "@apollo/client";
import {OBTENER_PROYECTOS} from "../graphql/querys/proyecto";
import LayoutBasico from "../components/layout/LayoutBasico";
import Cabecera from "../components/reutilizables/Cabecera";
import ElementList from "../components/reutilizables/ElementList";

export default function Proyectos(){
    const {data, loading} = useQuery(OBTENER_PROYECTOS);
    

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
                    loading 
                        ? <p>cargando</p>
                        :  <ElementList 
                                data={data.obtenerProyectos} 
                            />
                }

     
            </LayoutBasico>
        </>
    )
}

