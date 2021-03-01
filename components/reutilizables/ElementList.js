
export default function ElementList(props){
    const {data} = props;

    return(
        <>
            <div>
                {
                    data.map(d => (
                        <article>
                            <h2>{d.nombre}</h2>
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
                            <p>{d.descripcion}</p>
                        </article>
                    ))
                }
            </div>
            <style jsx>{`
                div{
                    padding: 1rem 4rem;
                    border: 1px solid #b3a4a4;
                    max-width: 100vw;
                }

                .image-array{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    max-width: 6rem;
                    border: 1px solid #b3a4a4;
                    background-color: #dfd6ca;
                    padding: .5rem 1rem;
                }

                ul{
                    display: flex;
                    gap: 1rem;
                    padding: 0;
        
                }

                article h2{
                    font-size: 2.2rem;
                    color: #1A3263;
                }

                article p{
                    font-size: 1.4rem;
                }

            `}</style>
        </>
    )
}