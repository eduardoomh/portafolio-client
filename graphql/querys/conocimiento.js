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

export const OBTENER_CONOCIMIENTOS_SECUNDARIOS = gql`
    query obtenerConocimientosSecundarios{
        obtenerConocimientosSecundarios{
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