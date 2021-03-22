import Estilos from "./Estilos";

export default function TagContainer({children}){
    return(
        <>
            <div className="tag-container">
                {children}
            </div>
            <Estilos />
        </>
    )
}