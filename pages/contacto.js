import Head from "next/head";
import usePerfil from "../hooks/usePerfil";
import LayoutBasico from "../components/layout/LayoutBasico";
import Cabecera from "../components/reutilizables/Cabecera";
import ContactoElement from "../components/reutilizables/ContactoElement";

export default function Contacto(){
    const {usuario} = usePerfil();

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
                    gif="https://media.giphy.com/media/MEjG5NXKKS68LvGIP2/giphy.gif"
                />
                <ContactoElement
                    titulo="Correo electronico"
                    descripcion={usuario?.correo_electronico}
                />

                <ContactoElement
                    titulo="Whatsapp"
                    descripcion={usuario?.telefono}
                />

                <ContactoElement
                    titulo="Facebook"
                    descripcion={usuario?.facebook}
                />

                <ContactoElement
                    titulo="Curriculum Vitae"
                    descripcion="Puedeb ver mi CV y descargarlo"
                />

            </LayoutBasico>
        </>
    )
}