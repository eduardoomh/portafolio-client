import useWindowSize from "hooks/useWindowSize";
import styles from "./styles";

export default function EstudioCard({data}){
    const {titulo, descripcion, tecnologia, fecha} = data;
    const {width} = useWindowSize();

    return(
        <>
            <article>
                <div>
                    <img 
                        src={tecnologia?.imagen} 
                        alt={tecnologia?.nombre}
                        width={width>= 800 ? 90 : 50}
                        height={width>= 800 ? 90 : 50}
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