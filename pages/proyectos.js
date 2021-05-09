import React, { useEffect } from "react";
import Head from "next/head";
import { useLazyQuery } from "@apollo/client";
import { OBTENER_LISTA_PROYECTOS } from "graphql/querys/proyecto";
import useWindowSIze from "hooks/useWindowSize";
import usePerfil from "hooks/usePerfil"
import ListaProyectos from "components/proyectos/ListaProyectos";
import Portada from "components/reutilizables/Portada";
import Nota from "components/reutilizables/Nota";
import ProyectosVector from "components/proyectos/ProyectosVector";

export default function Proyectos() {
    const {width} = useWindowSIze();
    const {proyectos, actualizarProyectos} = usePerfil();

    const [getProyectos, { loading, data }] = useLazyQuery(OBTENER_LISTA_PROYECTOS, {
        variables: {
            tipo1: "DISPONIBLE",
            tipo2: "EN_DESARROLLO"
        } 
    }); 
    
    useEffect(() => {
        if(proyectos === undefined){

            try{
                getProyectos(); 
                if(!loading){
                    actualizarProyectos(data?.obtenerListaProyectos); 
                }
                
            }catch(err){
                console.log(err);
            }
        }
    }, [proyectos, data]);


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

