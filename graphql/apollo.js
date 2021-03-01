import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';
import {OBTENER_USUARIO} from "./querys/usuario";

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'http://localhost:4000/GRAPHQL',
    })
  })


  const query = gql`
  query {
    prueba 
  }
  `
  
  client.query({ query })
    .then((response) => {
      console.log(response.data)
    })

   