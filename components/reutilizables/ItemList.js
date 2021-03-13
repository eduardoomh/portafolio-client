import useEstilos from "../../hooks/useEstilos";

export default function ItemList({nombre, tecnologias}){
    const {estilos} = useEstilos();

    return(
        <>
            <article>
                <h3>{nombre || "cargando"}</h3>
                <ul>
                    {
                        tecnologias.map(t => (
                            <div className="image-array">
                                <img 
                                    src={t.imagen} 
                                    alt={t.nombre} 
                                    width={50}
                                    height={50}
                                />
                            </div>
                            
                        ))
                    }
                </ul>
        </article>
        <style jsx>{`
                article{
                    display: grid;
                    grid-template-columns: 3fr 1fr;
                    grid-template-rows: 1fr;
                    background-color: ${estilos.colores.grisCrema};
                    border: 1px solid ${estilos.colores.bordeGrisClaro};
                    border-radius: 10px;
                }

                article:hover{
                    transition: .3s;
                    box-shadow:${estilos.colores.sombraHover};
                    cursor: pointer;
                }

                .image-array{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    max-width: 5rem;
                    max-height: 5rem;
                    border: 1px solid ${estilos.colores.bordeGrisClaro};
                    background-color: transparent;
                    padding: .5rem 1rem;
                }

                ul{
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    padding: 0 1rem;
        
                }
                article h3{
                    font-size: 1.6rem;
                    color: ${estilos.colores.letraRojizaFuerte};
                    padding: 0 2rem;
                    font-weight: normal;
                }

                article p{
                    font-size: 1.3rem;

                }
            `}</style>
    </>
    )
}