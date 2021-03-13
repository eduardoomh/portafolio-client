import useEstilos from "../../hooks/useEstilos";

export default function Footer(){
    const {estilos} = useEstilos();

    return(
        <>
            <footer>
                <p>
                    Jesus MH - 2021
                </p>
            </footer>
            <style jsx>{`
                footer{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 8rem;
                    background-color: ${estilos.colores.negroOpaco};
                    color: ${estilos.colores.blancoLetras};
                    font-family: Radley serif;
                    font-size: 1.4rem;
                }
                `}

            </style>
        </>
    )
}