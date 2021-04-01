import { useRouter } from "next/router";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { OBTENER_PROYECTO } from "../../graphql/querys/proyecto";
import Portada from "../../components/Proyecto/Portada";
import Tecnologias from "../../components/Proyecto/Tecnologias";
import Detalles from "../../components/Proyecto/Detalles";
import Repositorios from "../../components/Proyecto/Repositorios";
import Nota from "../../components/reutilizables/Nota";

export default function Proyecto() {
    const { query } = useRouter();
    const { data } = useQuery(OBTENER_PROYECTO, {
        variables: {
            id: query.id
        }
    });

    console.log(data);

    return (
        <>
            <Head>
                <title>Jesus EMH - Proyecto</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
            <Portada 
                titulo={data?.obtenerProyecto.nombre || "cargando"}
                descripcion={data?.obtenerProyecto.descripcion || "cargando"}
                fecha={data?.obtenerProyecto.fecha || "cargando"}
                imagen={data?.obtenerProyecto.imagen || "cargando"}
                ur={data?.obtenerProyecto.url || "cargando"}
            />
            <Tecnologias 
                principales={data?.obtenerProyecto.tecnologias_principales } 
                secundarias={data?.obtenerProyecto.tecnologias_secundarias } 
            />
            
            <Repositorios data={data?.obtenerProyecto.repositorios } />
            <Detalles data={data?.obtenerProyecto.detalles} />

            <Nota 
                texto="Solo yo le doy mantenimiento a esta aplicacion, por lo tanto el proceso de mejoras puede ser tardado." 
                />


            </>

        </>
    )
}