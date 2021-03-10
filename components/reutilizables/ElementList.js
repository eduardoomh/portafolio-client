import useEstilos from "../../hooks/useEstilos";

export default function ElementList(props){
    const {data, tipo} = props;
    const {estilos} = useEstilos();

    return(
        <>
            <div> 
                <h2>Conocimientos {tipo}</h2>
                {
                    data?.map(d => (
                        <article>
                            <h3>{d.nombre || "cargando"}</h3>
                            <ul>
                                {
                                    d.tecnologias.map(t => (
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
                    ))
                }
            </div>
            <style jsx>{`
                div{
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 6rem 1fr 1fr;
                    padding: 1rem 4rem;
                    max-width: 100vw;
                    font-family: Radley;
                    gap: 2rem;
                }

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

                h2{
                    font-size: 2.2rem;
                }

                article h3{
                    font-size: 1.6rem;
                    color: ${estilos.colores.letraRojizaSecundaria};
                    padding: 0 2rem;
                }

                article p{
                    font-size: 1.4rem;
                }

            `}</style>
        </>
    )
}