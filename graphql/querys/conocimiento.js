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

export const CONOCIMIENTOS_DATOS_FRAGMENT = gql`
    fragment conocimientoDatos on Conocimiento {
        nombre
        descripcion
        tecnologias{
        nombre
        imagen
        }
    }
`;

export const OBTENER_LISTA_CONOCIMIENTOS = gql`
    query obtenerListaConocimientos($tipo1: TipoConocimientoEnum! $tipo2:TipoConocimientoEnum!){
    obtenerListaConocimientos(tipo1: $tipo1 tipo2: $tipo2){
        datos{
        conocimientos
            nota_conocimientos
        }
        conocimientos_principales(tipo: $tipo1){
                ...conocimientoDatos
        }
        conocimientos_secundarios(tipo:$tipo2){
        ...conocimientoDatos
        }
    }

    }

    ${CONOCIMIENTOS_DATOS_FRAGMENT}
`;