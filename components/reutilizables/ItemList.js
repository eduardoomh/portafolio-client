import useEstilos from "../../hooks/useEstilos";

export default function ItemList({nombre, tecnologias}){
    const {estilos} = useEstilos();

    return(
        <>
            <article>
                <div className="contenedor-imagen">
                    <img 
                        src="https://ordenatucabeza.com/wp-content/uploads/2019/03/imagen-web-design-servicio.jpg"
                        alt="imagen"
                        width={130}
                        height={130}
                    />
                </div>
                <h3>{nombre || "cargando"}</h3>
                <ul>
                    {
                        tecnologias.map(t => (
                            <div className="image-array">
                                <img 
                                    src={t.imagen} 
                                    alt={t.nombre} 
                                    width={30}
                                    height={30}
                                />
                            </div>
                            
                        ))
                    }
                </ul>
        </article>
        <style jsx>{`
                article{
                    display: grid;
                    grid-template-columns: 1fr 2.5fr;
                    grid-template-rows: 1fr 1fr;
                    background-color: ${estilos.colores.grisCrema};
                    border: 1px solid ${estilos.colores.bordeGrisClaro};
                    border-radius: 6px;
                    min-width: 95%;
                    max-width: 95%;
                    height: 10rem;
                }

                article:hover{
                    transition: .3s;
                    box-shadow:${estilos.colores.sombraHover};
                    cursor: pointer;
                }

                .contenedor-imagen{
                    grid-column: 1/2;
                    grid-row: 1/ span 2;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .image-array{
                    grid-column: 2/3;
                    grid-row: 2/3;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    max-width: 30px;
                    max-height: 30px;
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
                    font-size: 1.2rem;
                    color: ${estilos.colores.letraRojizaFuerte};
                    padding: 0 2rem;
                    font-weight: normal;
                    font-family: 'Spectral';
                }

                article p{
                    font-size: 1.3rem;

                }
            `}</style>
    </>
    )
}