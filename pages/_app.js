import {useState, useEffect, useMemo} from "react";
import {ApolloProvider} from "@apollo/client";
import {client} from "graphql/apollo";
import {OBTENER_USUARIO} from "graphql/querys/usuario";
import usuarioContext from "context/usuarioContext";
import LayoutBasico from "components/layout/basico";
import 'styles/globals.css'
import 'reactjs-popup/dist/index.css';


function MyApp({ Component, pageProps }) {
  const [usuario, setUsuario] = useState(undefined);
  const [dark, setDark] = useState(undefined);


  useEffect(() =>{
    setDark(false);
    recuperarUsuario();
  

  }, []);

  useEffect(() => {

  },[dark])

  const recuperarUsuario = () => {
      client.query({query: OBTENER_USUARIO})
      .then((response) => {
        setUsuario(response?.data.obtenerUsuario)
      })
  }
; 


  const usuarioInfo = useMemo(
    () => ({
      usuario
    }),
    [usuario]);



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
