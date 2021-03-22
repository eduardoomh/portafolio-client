import Estilos from "./Estilos";

export default function Tag({children}){
    return(
        <>
            <article className="tag">
                {children}
            </article>
            <Estilos />
        </>
    )
}