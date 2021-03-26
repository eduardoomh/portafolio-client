import {gql} from "@apollo/client";

export const OBTENER_USUARIO = gql`
    query obtenerUsuario{
        obtenerUsuario{
            id
            nombres
            apellido_paterno
            apellido_materno
            correo_electronico
            contrasena
            apodo
            facebook
            github
            edad
            imagen
            descripcion{
                texto
            }
            experiencia{
                texto
            }
            estudios{
                texto
            }
            personalidad{
                texto
            }
            pasatiempos{
                texto
            }
            telefono
            updatedAt
            createdAt
        }
    }
`;