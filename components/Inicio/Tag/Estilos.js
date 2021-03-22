import useEstilos from "../../../hooks/useEstilos";

export default function Estilos(){
    const {estilos} = useEstilos();

    return(
        <style jsx>{`
            .tag{
                background-color: ${estilos.colores.negro};
                color: white;
                font-size: 1rem;
                padding: .5rem;

            }
        `}</style>
    )
}