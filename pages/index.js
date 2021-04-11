import Head from 'next/head'
import dynamic from "next/dynamic";
import usePerfil from "hooks/usePerfil";
import Portada from "components/Inicio/Portada";
import useIntersecting from "hooks/useIntersecting";
import Suspense from "components/reutilizables/Suspense";


export default function Home() {
  const { usuario } = usePerfil();
  const notaIntersecting = useIntersecting("10px");
  const estudioIntersecting = useIntersecting("10px");
  const experienciaIntersecting = useIntersecting("10px");
  const aboutIntersecting = useIntersecting("10px");

  if (!usuario) return null;

  let Nota = notaIntersecting.show && dynamic(() => import("components/reutilizables/Nota"), {
    loading: () => <p>Loading...</p>
  });

  let EstudioList = estudioIntersecting.show && dynamic(() => import("components/Inicio/EstudioList"), {
    loading: () => <p>Loading...</p>
  });

  
  let ExperienciaList = experienciaIntersecting.show && dynamic(() => import("components/Inicio/ParrafoArray"), {
    loading: () => <p>Loading...</p>
  });

  
  let AboutList = aboutIntersecting.show && dynamic(() => import("components/Inicio/ParrafoArray"), {
    loading: () => <p>Loading...</p>
  });



  const filterFunction = (array, value) => {
    if (usuario) {
      return array.filter(item => item.tipo === value);
    }

    return null;
  }

  return (
    <>
      <Head>
        <title>Jesus EMH - Portafolio</title>
        <link rel="icon" href="/mh.ico" />
      </Head>

      <>
        <Portada
          nombres={usuario?.nombres}
          apellidos={`${usuario?.apellido_paterno} ${usuario?.apellido_materno}`}
          imagen={usuario?.imagen}
          descripcion={usuario?.descripcion}
          facebook={usuario?.facebook}
          github={usuario?.github}
          linkedin={usuario?.linkedin}
          telefono={usuario?.telefono}
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
              <Suspense data={experienciaIntersecting}>
                <ExperienciaList
                    titulo="Experiencia"
                    parrafos={usuario?.experiencia}
                  />
              </Suspense>

                <Suspense data={estudioIntersecting}>
                  <>
                    <EstudioList
                      titulo="Universitarios"
                      data={filterFunction(usuario?.estudios, "ESTUDIO_UNIVERSITARIO")}
                    />
                    <EstudioList
                      titulo="Adicionales"
                      data={filterFunction(usuario?.estudios, "ESTUDIO_AUTODIDACTA")}
                    />
                  </>

                </Suspense>

              <Suspense data={aboutIntersecting}>
                <AboutList
                    titulo="Más Sobre Mi"
                    parrafos={usuario?.personalidad}
                  />
              </Suspense>
  
                <Suspense data={notaIntersecting}>
                  <Nota
                    texto="En las secciones del menú encontraran mis conocimientos técnicos, los proyectos en los que estoy trabajando y las futuras mejoras de la aplicacion."
                  />
                </Suspense>


              </>

            )
        }
      </>

    </>
  )
};
