import useEstilos from "../../hooks/useEstilos";

export default function CardProyecto(props){
    const {nombre, imagen, tecnologias_principales} = props.data;
    const {estilos} = useEstilos();


    return(
        <>
            <article className="contenedor">
                <ul>
                    {
                        tecnologias_principales?.map(t => (
                            <li><img src={t.imagen} alt={t.nombre} /></li>
                        ))
                    }
                </ul>
                <div className="contenedor-imagen">
                    <img src={imagen} alt={nombre} />
                </div>
                <p>{nombre}</p>
            </article>
            <style jsx>{`
                .contenedor{
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 4rem 1fr 2rem;
                    min-height: 26rem;
                    max-height: 26rem;
                    min-width: 18rem;
                    max-width: 18rem;
                    padding: 1rem;
                    background-color: ${estilos.colores.grisOscuro};
                    border: 1px solid ${estilos.colores.bordeGrisClaro};
                    gap: .5rem;
                    border-radius: 8px;
                }

                .contenedor:hover{
                    transition: .3s;
                    background-color: ${estilos.colores.grisOscuroHover};
                }

                .contenedor div img{
                    width: 6rem;
                    border-radius: 50%;
                }

                .contenedor ul{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    list-style: none;
                    max-width: 18rem;
                    height: 100%;
                    gap: .3rem;
                    padding: 0;
                    margin: 0;
                }

                .contenedor ul li img{
                    display: flex;
                    max-height: 3rem;
                }

                .contenedor .contenedor-imagen{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: ${estilos.colores.azulClaro};
                    max-width: 18rem;
                }
                p{
                    display: flex;
                    justify-content: center;
                    align-items:center;
                    font-size: 1.2rem;
                }
                `}</style>
        </>
    )
}