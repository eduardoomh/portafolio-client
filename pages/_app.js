import {useState, useEffect, useMemo} from "react";
import {ApolloProvider} from "@apollo/client";
import {client} from "../graphql/apollo";
import {OBTENER_USUARIO} from "../graphql/querys/usuario";
import usuarioContext from "../context/usuarioContext";
import estilosContext from "../context/estilosContext";
import LayoutBasico from "../components/layout/basico";
import '../styles/globals.css'
import 'reactjs-popup/dist/index.css';


function MyApp({ Component, pageProps }) {
  const [usuario, setUsuario] = useState(undefined);
  const [estilos, setEstilos] = useState("");
  const [dark, setDark] = useState(undefined);


  useEffect(() =>{
    setDark(false);
    recuperarUsuario();
    obtenerEstilos();
  

  }, []);

  useEffect(() => {

  },[dark])

  const recuperarUsuario = () => {
      client.query({query: OBTENER_USUARIO})
      .then((response) => {
        console.log(response?.data)
        setUsuario(response?.data.obtenerUsuario)
      })
  }
; 
  const obtenerEstilos = () => {

  }

  const cambiarEstilos = () => {
    setDark(!dark);
    
  }

  const usuarioInfo = useMemo(
    () => ({
      usuario
    }),
    [usuario]);

    const estilosInfo = useMemo(
      () => ({
        estilos,
        cambiarEstilos
      }),
      [estilos]);

    return (
      <ApolloProvider client={client}>
        <estilosContext.Provider value={estilosInfo}>
          <usuarioContext.Provider value={usuarioInfo}>
            <LayoutBasico isUser={usuario !== undefined ? true : false} dark={dark} setDark={setDark}>
              <Component {...pageProps}   />
            </LayoutBasico>
          </usuarioContext.Provider>
        </estilosContext.Provider>
        
      </ApolloProvider>
  )
  
}

export default MyApp
