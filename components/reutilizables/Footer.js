import useEstilos from "../../hooks/useEstilos";

export default function Footer(){
    const {estilos} = useEstilos();

    return(
        <>
            <footer>
                <p>
                    Alguna persona interesada en conocer mas de mi?, aqui estan mis medios de contacto
                </p>
                <h4>Contacto</h4>
                <ul>
                    <li>Github</li>
                    <li>Linkedln</li>
                    <li>Whatsapp +52 8683698752</li>
                    <li>Correo Electronico eduardoomh@outlook.com</li>
                    <li>Facebook</li>
                    <li>Regalame una taza de cafe</li>
                    <li>Curriculum Vitae</li>
                </ul>
                <p>Jesus MH - 2021</p>
            </footer>
            <style jsx>{`
                footer{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 35rem;
                    padding: 2rem;
                    background-color: ${estilos.colores.negroOpaco};
                    color: ${estilos.colores.blancoLetras};
                    font-family: 'Spectral', serif;
                    font-size: 1rem;
                }

                footer p{
                    font-size: 1rem;
                    text-align: center;
                }

                footer h4{
                    font-size: 1.5rem;
                }

                footer ul{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    list-style: none;
                    padding: 0;
                }

                footer li{
                    text-align: center;
                    margin: .3rem 0;
                    text-decoration: underline;
                }
                `}

            </style>
        </>
    )
}