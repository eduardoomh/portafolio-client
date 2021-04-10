import styles from "./styles";

export default function Portada(props){
    const {titulo, descripcion, children} = props;

    return(
        <>
            <div>
                <div className="imagen">

               {children}
                
                </div>
                <h1>{titulo}</h1>
                <p>{descripcion}</p>

            </div>
            <style jsx>{styles}</style>
        </>
    )
}