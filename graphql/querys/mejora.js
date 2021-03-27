import {gql} from "@apollo/client";

export const MEJORAS_DATOS_FRAGMENT = gql`

    fragment mejorasDatos on DatoMejora {
        nombre
        descripcion
        fecha
    }
`;

export const OBTENER_MEJORA = gql`
    query obtenerMejora{
    obtenerMejora{
        id
        descripcion
        mejoras_pendientes{
        ...mejorasDatos
        }
        mejoras_terminadas{
        ...mejorasDatos
        }
        notas
    }
}

${MEJORAS_DATOS_FRAGMENT}
`;