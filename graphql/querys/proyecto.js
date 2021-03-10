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