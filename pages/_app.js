import {useState, useEffect, useMemo} from "react";
import {ApolloProvider} from "@apollo/client";
import {client} from "../graphql/apollo";
import {OBTENER_USUARIO} from "../graphql/querys/usuario";
import usuarioContext from "../context/usuarioContext";
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [usuario, setUsuario] = useState(undefined);

  useEffect(() =>{
    recuperarUsuario();
  

  }, []);

  const recuperarUsuario = () => {
      client.query({query: OBTENER_USUARIO})
      .then((response) => {
        console.log(response.data)
        setUsuario(response.data.obtenerUsuario)
      })
  }

  const usuarioInfo = useMemo(
    () => ({
      usuario
    }),
    [usuario]);

    return (
      <ApolloProvider client={client}>
        <usuarioContext.Provider value={usuarioInfo}>
          <Component {...pageProps} />
        </usuarioContext.Provider>
        
      </ApolloProvider>
  )
  
}

export default MyApp
