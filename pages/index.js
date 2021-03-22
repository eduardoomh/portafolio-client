import Head from 'next/head'
import usePerfil from "../hooks/usePerfil";
import LayoutBasico from "../components/layout/LayoutBasico";
import Banner from "../components/reutilizables/Banner";
import ContenedorDatosPerfil from "../components/Inicio/ContenedorDatosPerfil"
import Tag from "../components/Inicio/Tag";
import TagContainer from "../components/Inicio/TagContainer";
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
                />
                <TagContainer>
                  <Tag>Ingeniero en Sistemas</Tag>
                  <Tag>Desarrollador Web</Tag>
                </TagContainer>
                <Presentacion>
                  Llevar mis ideas a codigo es la mayor satisfaccion que puede haber.
                </Presentacion>
                <ContenedorDatosPerfil usuario={usuario} />
              </>
            )
        }
      </LayoutBasico>

    </>
  )
};
