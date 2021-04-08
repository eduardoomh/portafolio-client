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
            linkedin
            edad
            imagen
            descripcion
            experiencia{
                texto
            }
            estudios{
                titulo
                descripcion
                tipo
                fecha
                tecnologia{
                    nombre
                    imagen
                }
            }
            personalidad{
                texto
            }
            pasatiempos
            telefono
            updatedAt
            createdAt
        }
    }
`;