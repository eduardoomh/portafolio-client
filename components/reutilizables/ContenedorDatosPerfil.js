import LazyPerfilDatos from "../reutilizables/PerfilDato";

export default function ContenedorDatosPerfil({usuario}){
    return(
        <>
            <LazyPerfilDatos
                titulo="QUIEN SOY?"
                descripcion={usuario.descripcion}
                gif="https://media.giphy.com/media/l3nWrncF7S6w3htGU/giphy.gif"
        />
        

            <LazyPerfilDatos
                titulo="EXPERIENCIA LABORAL"
                descripcion={usuario.experiencia}
                gif="https://media.giphy.com/media/2sbLlG7XNuzzeVKvw0/giphy.gif"
            />


            <LazyPerfilDatos
                titulo="ESTUDIOS"
                descripcion={usuario.estudios}
                gif="https://media.giphy.com/media/3LrK7Q7UhF5MnhZ5ja/giphy.gif"
            />


            <LazyPerfilDatos
                titulo="PERSONALIDAD"
                descripcion={usuario.personalidad}
                gif="https://media.giphy.com/media/ZBnQeaVQduxnWjhcf1/giphy.gif"
            />

            <LazyPerfilDatos
                titulo="PASATIEMPOS"
                descripcion={usuario.pasatiempos}
                gif="https://media.giphy.com/media/pHZbB5h1K8OaSkFquN/giphy.gif"
            /> 
      </>
    )
}