import Head from 'next/head'
import usePerfil from "../hooks/usePerfil";
import LayoutBasico from "../components/layout/LayoutBasico";
import CabeceraPerfil from "../components/reutilizables/CabeceraPerfil";
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
        <CabeceraPerfil />
        <ContenedorDatosPerfil usuario={usuario} />
        <BotonContainer ruta="/conocimientos" texto="Mi Conocimientos" />
      </LayoutBasico>

    </>
  )
};
