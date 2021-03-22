import LazyPerfilDatos from "./PerfilDato";

export default function ContenedorDatosPerfil({usuario}){
    return(
        <>
            <LazyPerfilDatos
                titulo="QUIEN SOY?"
                descripcion={usuario.descripcion}
        />
        

            <LazyPerfilDatos
                titulo="EXPERIENCIA LABORAL"
                descripcion={usuario.experiencia}
            />


            <LazyPerfilDatos
                titulo="ESTUDIOS"
                descripcion={usuario.estudios}
            />


            <LazyPerfilDatos
                titulo="PERSONALIDAD"
                descripcion={usuario.personalidad}
            />

            <LazyPerfilDatos
                titulo="PASATIEMPOS"
                descripcion={usuario.pasatiempos}
            /> 
      </>
    )
}