import Head from 'next/head'
import Link from "next/link"
import usePerfil from "../hooks/usePerfil";
import Banner from "../components/reutilizables/Banner";
import Presentacion from "../components/Inicio/Presentacion";
import ParrafoArray from "../components/reutilizables/ParrafoArray";
import Portada from "../components/Inicio/Portada";

export default function Home() {
  const { usuario } = usePerfil();
  if (!usuario) return null;

  return (
    <>
      <Head>
        <title>Jesus EMH - Portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Portada 
          nombres={usuario?.nombres} 
          apellidos={`${usuario?.apellido_paterno} ${usuario?.apellido_materno}`}
          imagen={usuario?.imagen} 
        />
        {
          !usuario ? (
            <div>
              <p>cargando...</p>
            </div>
          )
            :
            (
              <>
                <ParrafoArray 
                  titulo="Experiencia"
                  parrafos={usuario?.experiencia}
                  id="experiencia"
                />
                <ParrafoArray 
                  titulo="Estudios"
                  parrafos={usuario?.estudios}
                  id="estudios"
                />
                <ParrafoArray 
                  titulo="Personalidad"
                  parrafos={usuario?.personalidad}
                  id="personalidad"
                />
                <ParrafoArray 
                  titulo="Pasatiempos"
                  parrafos={usuario?.pasatiempos}
                  id="pasatiempos"
                />
              </>
            )
        }
      </>

    </>
  )
};
