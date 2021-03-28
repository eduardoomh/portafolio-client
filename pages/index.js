import Head from 'next/head'
import Link from "next/link"
import usePerfil from "../hooks/usePerfil";
import Banner from "../components/reutilizables/Banner";
import Presentacion from "../components/Inicio/Presentacion";
import ParrafoArray from "../components/reutilizables/ParrafoArray";

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
        {
          !usuario ? (
            <div>
              <p>cargando...</p>
            </div>
          )
            :
            (
              <>
                <Banner
                  imagen={usuario?.imagen}
                >
                  <>
                      <li><Link href="#quien_soy"><a>Quien Soy</a></Link></li>
                      <li><Link href="#experiencia"><a>Experiencia</a></Link></li>
                      <li><Link href="#estudios"><a>Estudios</a></Link></li>
                      <li><Link href="#personalidad"><a>Personalidad</a></Link></li>
                      <li><Link href="#pasatiempos"><a>Pasatiempos</a></Link></li>
                    </>
                
                </Banner>
                <Presentacion>
                  "Llevar mis ideas a codigo es la mayor satisfaccion que puede haber."
                </Presentacion>
                <ParrafoArray 
                  titulo="Quien Soy?"
                  parrafos={usuario?.descripcion}
                  id="quien_soy"
                />
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
