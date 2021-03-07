import Head from 'next/head'
import {useRouter} from "next/router";
import usePerfil from "../hooks/usePerfil";
import LayoutBasico from "../components/layout/LayoutBasico";
import CabeceraPerfil from "../components/reutilizables/CabeceraPerfil";
import PerfilDato from "../components/reutilizables/PerfilDato";
import Boton from "../components/reutilizables/Boton";

export default function Home() {
  const { usuario } = usePerfil();
  const router = useRouter();

  if (!usuario) return null;

  const navegar = () =>{
    router.push("/conocimientos");
    console.log("navegando")
  }

  return (
    <>
      <Head>
        <title>Jesus EMH - Portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutBasico>
        <CabeceraPerfil />
        <PerfilDato
          titulo="QUIEN SOY?"
          descripcion={usuario.descripcion}
          gif="https://media.giphy.com/media/l3nWrncF7S6w3htGU/giphy.gif"
        />

        <PerfilDato
          titulo="EXPERIENCIA LABORAL"
          descripcion={usuario.experiencia}
          gif="https://media.giphy.com/media/2sbLlG7XNuzzeVKvw0/giphy.gif"
        />

        <PerfilDato
          titulo="ESTUDIOS"
          descripcion={usuario.estudios}
          gif="https://media.giphy.com/media/3LrK7Q7UhF5MnhZ5ja/giphy.gif"
        />


        <PerfilDato
          titulo="PERSONALIDAD"
          descripcion={usuario.personalidad}
          gif="https://media.giphy.com/media/ZBnQeaVQduxnWjhcf1/giphy.gif"
        />

        <PerfilDato
          titulo="PASATIEMPOS"
          descripcion={usuario.pasatiempos}
          gif="https://media.giphy.com/media/pHZbB5h1K8OaSkFquN/giphy.gif"
        />

        <div className="boton-container">
          <Boton onClick={() => navegar()}>Mis Conocimientos</Boton>
        </div>

      </LayoutBasico>
       <style jsx>{`
            .boton-container{
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 3rem;
            }
         `}
       </style>
    </>
  )
};
