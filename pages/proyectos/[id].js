import {useState, useEffect} from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { OBTENER_PROYECTO } from "graphql/querys/proyecto";
import Portada from "components/Proyecto/Portada";
import Tecnologias from "components/Proyecto/Tecnologias";
import Detalles from "components/Proyecto/Detalles";
import Repositorios from "components/Proyecto/Repositorios";
import Nota from "components/reutilizables/Nota";

export default function Proyecto() {
    const [proyecto, setProyecto] = useState([]);

    const { query } = useRouter();
    const { data } = useQuery(OBTENER_PROYECTO, {
        variables: {
            id: query.id
        }
    });

    useEffect(() => {
        if(data?.obtenerProyecto){
            setProyecto(data?.obtenerProyecto);
        }
    },[data]);


    return (
        <>
            <Head>
                <title>{proyecto.nombre || "cargando"} Proyecto </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
            <Portada 
                titulo={proyecto.nombre || "cargando"}
                descripcion={proyecto.descripcion || "cargando"}
                fecha={proyecto.fecha || "cargando"}
                imagen={proyecto.imagen || "cargando"}
                url={proyecto.url || "cargando"}
                estado={proyecto.estado || "cargando"}
            />
            <Tecnologias 
                principales={proyecto.tecnologias_principales } 
                secundarias={proyecto.tecnologias_secundarias } 
            />
            
            <Repositorios data={proyecto.repositorios } />
            <Detalles data={proyecto.detalles} />

            <Nota 
                texto="Trato de hacer un proyecto por mes, y al terminarlo seguir agregandole mejoras periodicamente y mejorar el codigo." 
                />


            </>

        </>
    )
}