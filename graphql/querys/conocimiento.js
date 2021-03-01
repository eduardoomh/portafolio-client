import {gql} from "@apollo/client";

export const OBTENER_CONOCIMIENTOS = gql`
    query obtenerConocimientos{
        obtenerConocimientos{
        id
        nombre
        descripcion
        tecnologias{
        id
        nombre
        imagen
        }
    }
}
`;