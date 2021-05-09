import {useState, useEffect, useMemo} from "react";
import {ApolloProvider} from "@apollo/client";
import {client} from "graphql/apollo";
import usuarioContext from "context/usuarioContext";
import LayoutBasico from "components/layout/basico";
import 'styles/globals.css'
import 'reactjs-popup/dist/index.css';


function MyApp({ Component, pageProps }) {
  const [usuario, setUsuario] = useState(undefined);
  const [conocimientos, setConocimientos] = useState(undefined);
  const [proyectos, setProyectos] = useState(undefined);
  const [mejoras, setMejoras] = useState(undefined);
  const [dark, setDark] = useState(undefined);


  useEffect(() =>{
    setDark(false);

  }, []);

  useEffect(() => {

  },[dark])


  const actualizarUsuario = (data) => {
    setUsuario(data)
  }

  const actualizarConocimientos = (data) => {
    setConocimientos(data)
  }

  const actualizarProyectos = (data) => {
    setProyectos(data)
  }
  
  const actualizarMejoras = (data) => {
    setMejoras(data)
  }

  const usuarioInfo = useMemo(
    () => ({
      usuario,
      conocimientos,
      proyectos,
      mejoras,
      actualizarUsuario,
      actualizarConocimientos,
      actualizarProyectos,
      actualizarMejoras
    }),
    [usuario, conocimientos, proyectos, mejoras]);



    return (
      <ApolloProvider client={client}>
  
          <usuarioContext.Provider value={usuarioInfo}>
            <LayoutBasico isUser={usuario !== undefined ? true : false} dark={dark} setDark={setDark}>
              <Component {...pageProps}   />
            </LayoutBasico>
          </usuarioContext.Provider>
        
      </ApolloProvider>
  )
  
}

export default MyApp
