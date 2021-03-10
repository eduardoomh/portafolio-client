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