import Head from 'next/head'
import dynamic from "next/dynamic";
import usePerfil from "hooks/usePerfil";
import Portada from "components/Inicio/Portada";
import ParrafoArray from "components/Inicio/ParrafoArray";
import Nota from "components/reutilizables/Nota";
import useIntersecting from "hooks/useIntersecting";
import Suspense from "components/reutilizables/Suspense";

export default function Home() {
  const { usuario } = usePerfil();
  const estudioIntersecting = useIntersecting("10px");

  if (!usuario) return null;

  let EstudioList = dynamic(() => import("components/Inicio/EstudioList"), {
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
          curriculum={usuario?.curriculum}
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
                  />
 

                <Suspense data={estudioIntersecting} size={500}>
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
 

                <ParrafoArray
                    titulo="Más Sobre Mi"
                    parrafos={usuario?.personalidad}
                  />

                  <Nota
                    texto="En las secciones del menú encontraran mis conocimientos técnicos, los proyectos en los que estoy trabajando y las futuras mejoras de la aplicación."
                  />
       


              </>
            )
        }
      </>

    </>
  )
};
