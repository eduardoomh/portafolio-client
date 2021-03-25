import useEstilos from "../../../hooks/useEstilos";

export default function Estilos(){
    const {estilos} = useEstilos();

    return(
        <style jsx>{`

        .perfil-container{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 8rem 1fr;
            margin: 4rem 1rem;    

        }

        .perfil-container p{
            font-size: 1.1rem;
            font-family: 'Spectral', serif;
            text-align: justify;
            
        }


        .perfil-container h3{
            display: flex;
            justify-content: flex-start;
    
            font-size: 2rem;
            font-family: 'Noto Sans', sans-serif;
            color: ${estilos?.colores?.negro};
        }

    `}</style>
    )
}