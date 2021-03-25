import Head from 'next/head'
import Link from "next/link"
import usePerfil from "../hooks/usePerfil";
import LayoutBasico from "../components/layout/basico";
import Banner from "../components/reutilizables/Banner";
import ContenedorDatosPerfil from "../components/Inicio/ContenedorDatosPerfil"
import Presentacion from "../components/Inicio/Presentacion";

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
                  texto={`${usuario?.nombres}`}
                  texto_secundario={`${usuario?.apellido_paterno} ${usuario?.apellido_materno}`}
                  imagen={usuario?.imagen}
                >
                  <>
                      <li><Link href="#"><a>Quien Soy</a></Link></li>
                      <li>Experiencia</li>
                      <li>Estudios</li>
                      <li>Personalidad</li>
                      <li>Pasatiempos</li>
                    </>
                
                </Banner>
                <Presentacion>
                  Llevar mis ideas a codigo es la mayor satisfaccion que puede haber.
                </Presentacion>
                <ContenedorDatosPerfil usuario={usuario} />
              </>
            )
        }
      </LayoutBasico>
      <style jsx>{`
          li{
            &:hover{
              cursor: pointer;
              text-decoration: underline;
            }
          }
        `}</style>

    </>
  )
};
