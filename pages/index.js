import Head from 'next/head'
import usePerfil from "../hooks/usePerfil";
import LayoutBasico from "../components/layout/LayoutBasico";
import CabeceraPerfil from "../components/reutilizables/CabeceraPerfil";

export default function Home() {
  const {usuario} = usePerfil();

  if(!usuario) return null;

  return (
    <>
      <Head>
        <title>Jesus EMH - Portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <LayoutBasico>
          <CabeceraPerfil />
          <p>{usuario.nombres}</p>
        </LayoutBasico>
      </>
  )
};
