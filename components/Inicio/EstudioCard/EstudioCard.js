import styles from "./styles";

export default function EstudioCard({data}){
    const {titulo, descripcion, tecnologia, fecha} = data;

    return(
        <>
            <article>
                <div>
                    <img 
                        src={tecnologia?.imagen} 
                        alt={tecnologia?.nombre}
                        width={90}
                        height={90}
                    />
                </div>
               
                <section>
                    <h3>{titulo}</h3>
                     <p>{descripcion}</p>
                     <span>{fecha}</span>
                </section>
                

            </article>
            <style jsx>{styles}</style>
        </>
    )
}