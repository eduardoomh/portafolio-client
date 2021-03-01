import {gql} from "@apollo/client";

export const OBTENER_PROYECTOS = gql`
    query obtenerProyectos{
        obtenerProyectos{
        id
        nombre
        descripcion
        tecnologias{
            id
            nombre
            imagen
        }
        detalles{
            nombre
        }
        repositorios{
            url
        }

    }
    }
`;