import Head from "next/head";
import LayoutBasico from "../components/layout/LayoutBasico";
import Cabecera from "../components/reutilizables/Cabecera";

export default function Contacto(){
    return(
        <>
            <Head>
                <title>Contactame - JesusMH</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutBasico>
                <Cabecera 
                    titulo="CONTACTO"
                    descripcion="Aqui tienen toda mi informacion de contacto"
                />
            </LayoutBasico>
        </>
    )
}