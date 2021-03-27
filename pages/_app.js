import {useState, useEffect, useMemo} from "react";
import {ApolloProvider} from "@apollo/client";
import {client} from "../graphql/apollo";
import {OBTENER_USUARIO} from "../graphql/querys/usuario";
import usuarioContext from "../context/usuarioContext";
import estilosContext from "../context/estilosContext";
import LayoutBasico from "../components/layout/basico";
import mainTheme from "../styles/mainTheme";
import darkTheme from "../styles/darkTheme";
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [usuario, setUsuario] = useState(undefined);
  const [estilos, setEstilos] = useState(mainTheme);

  useEffect(() =>{
    recuperarUsuario();
    obtenerEstilos();
  

  }, []);

  const recuperarUsuario = () => {
      client.query({query: OBTENER_USUARIO})
      .then((response) => {
        console.log(response.data)
        setUsuario(response.data.obtenerUsuario)
      })
  }

  const obtenerEstilos = () => {
    if(mainTheme.length > 0){
      setEstilos(mainTheme);
    }
  }

  const cambiarEstilos = (value) => {
    if(value === "dark"){
      setEstilos(darkTheme);
    }else{
      setEstilos(mainTheme);
    }
    
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
            <LayoutBasico>
              <Component {...pageProps} />
            </LayoutBasico>
          </usuarioContext.Provider>
        </estilosContext.Provider>
        
      </ApolloProvider>
  )
  
}

export default MyApp
