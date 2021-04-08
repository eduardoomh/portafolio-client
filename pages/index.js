import Head from 'next/head'
import usePerfil from "../hooks/usePerfil";
import ParrafoArray from "../components/Inicio/ParrafoArray";
import Portada from "../components/Inicio/Portada";
import EstudioList from "../components/Inicio/EstudioList";
import Nota from "../components/reutilizables/Nota";

export default function Home() {
  const { usuario } = usePerfil();
  if (!usuario) return null;

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
        <link rel="icon" href="/favicon.ico" />
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
                <ParrafoArray
                  titulo="Experiencia"
                  parrafos={usuario?.experiencia}
                />
                <EstudioList
                  titulo="Universitarios"
                  data={filterFunction(usuario?.estudios, "ESTUDIO_UNIVERSITARIO")}
                />
                <EstudioList
                  titulo="Adicionales"
                  data={filterFunction(usuario?.estudios, "ESTUDIO_AUTODIDACTA")}
                />

                <ParrafoArray
                  titulo="Más Sobre Mi"
                  parrafos={usuario?.personalidad}
                />


                <ParrafoArray
                  titulo="Pasatiempos"
                  parrafos={[
                    {
                      "texto": "Descubrir musica nueva"
                    },
                    {
                      "texto": "Practicar Ajedrez"
                    },
                    {
                      "texto": "Ver series y peliculas"
                    },
                    {
                      "texto": "Caminar"
                    },
                    {
                      "texto": "Escribir codigo"
                    },
                    {
                      "texto": "Salir con amigos"
                    }
                  ]}
                />
                <Nota texto="En las secciones del menú encontraran mis conocimientos técnicos, los proyectos en los que estoy trabajando y las futuras mejoras de la aplicacion." />
              </>
            )
        }
      </>

    </>
  )
};
