import {useState, useEffect} from "react";
import Head from "next/head";
import { useLazyQuery } from "@apollo/client";
import { OBTENER_LISTA_CONOCIMIENTOS } from "graphql/querys/conocimiento";
import useWindowSIze from "hooks/useWindowSize";
import usePerfil from "hooks/usePerfil";
import Portada from 'components/reutilizables/Portada';
import Lista from "components/conocimientos/Lista";
import Nota from "components/reutilizables/Nota";
import ConocimientoVector from "components/conocimientos/ConocimientoVector";
;
export default function Conocimientos() {
    const [lista, setLista] = useState([]);
    const {width} = useWindowSIze();
    const {conocimientos, actualizarConocimientos} = usePerfil();
   

    const [getConocimientos, { loading, data }] = useLazyQuery(OBTENER_LISTA_CONOCIMIENTOS, {
        variables: {
            tipo1: "PRINCIPAL",
            tipo2: "SECUNDARIO" 
        }
    }); 

    useEffect(() => {
        if(conocimientos === undefined){

            try{
                getConocimientos(); 
                if(!loading){
                    actualizarConocimientos(data?.obtenerListaConocimientos); 
                }
                
            }catch(err){
                console.log(err);
            }
        }
    }, [conocimientos, data]);

    useEffect(() => {
        if(conocimientos !== undefined){
            setLista([...conocimientos?.conocimientos_principales, ...conocimientos?.conocimientos_secundarios]);
        }
    }, [conocimientos]);


    return (
        <>
            <Head>
                <title>Conocimientos - JesusMH</title>
                <link rel="icon" href="/mh.ico" />
            </Head>
                <Portada 
                    imagen="/conocimientos.svg" 
                    titulo="Mis Conocimientos" 
                    descripcion={conocimientos?.datos?.conocimientos}
                    Vector={<ConocimientoVector />}
                >
                    <ConocimientoVector width={width >= 1000 ? 480 : 310} height={width >= 1000 ? 480 : 310} />
                </Portada>

                <Lista 
                    titulo="Conocimientos" 
                    lista={lista}
                />

                <Nota 
                    texto={conocimientos?.datos?.nota_conocimientos} 
                />
            
        </>
    )
}