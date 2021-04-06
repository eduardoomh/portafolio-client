import {gql} from "@apollo/client";

export const OBTENER_PROYECTOS = gql`
    query obtenerProyectos{
        obtenerProyectos{
        id
        nombre
        imagen
        tecnologias_principales{
            imagen
            nombre
        }

    }
}
`;

export const OBTENER_PROYECTOS_TERMINADOS = gql`
    query obtenerProyectosTerminados{
        obtenerProyectosTerminados{
        id
        nombre
        imagen
        tecnologias_principales{
            imagen
            nombre
        }

    }
}
`;

export const OBTENER_PROYECTO = gql`
    query obtenerProyecto($id: ID!){
        obtenerProyecto(id: $id){
        id
        nombre
        descripcion
        imagen
        url
        fecha
        estado
        tecnologias_principales{
            nombre
            imagen
        }
        tecnologias_secundarias{
            nombre
            imagen
        }
        detalles{
            nombre
        }
        repositorios{
            url
            nombre
        }

    }
}
`
export const PROYECTO_DATOS_FRAGMENT = gql`

    fragment proyectoDatos on Proyecto {
            id
            nombre
            descripcion
            imagen
            tecnologias_principales{
                nombre
                imagen
            }
        }
`;

export const OBTENER_LISTA_PROYECTOS = gql`
    query obtenerListaProyectos($tipo1: EstadoProyectoEnum! $tipo2:EstadoProyectoEnum!){
    obtenerListaProyectos(tipo1: $tipo1 tipo2: $tipo2){
        datos{
        proyectos
        nota_proyectos
        }
        proyectos_terminados(estado: $tipo1){
                ...proyectoDatos
        }
        proyectos_pendientes(estado:$tipo2){
        ...proyectoDatos
        }
    }


    }
    
    ${PROYECTO_DATOS_FRAGMENT}
`;