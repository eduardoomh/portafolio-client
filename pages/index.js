import Head from 'next/head'
import usePerfil from "../hooks/usePerfil";
import LayoutBasico from "../components/layout/LayoutBasico";
import Banner from "../components/reutilizables/Banner";
import ContenedorDatosPerfil from "../components/reutilizables/ContenedorDatosPerfil"
import BotonContainer from "../components/reutilizables/BotonContainer";

export default function Home() {
  const { usuario } = usePerfil();
  if (!usuario) return null;

  return (
    <>
      <Head>
        <title>Jesus EMH - Portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutBasico>
        <Banner 
          texto={`${usuario.nombres}`} 
          texto_secundario={`${usuario.apellido_paterno} ${usuario.apellido_materno}`}
          imagen={usuario.imagen}
        />
        <ContenedorDatosPerfil usuario={usuario} />
        <BotonContainer ruta="/conocimientos" texto="Mis Conocimientos" />
      </LayoutBasico>

    </>
  )
};
