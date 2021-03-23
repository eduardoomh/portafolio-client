import styles from "./styles";

export default function Titulo(props){
    const {texto, texto_secundario, descripcion = false} = props;

    return( 
        <>
            <div>
                <h1>{texto} <br/>{texto_secundario && texto_secundario}</h1>
                <p>{descripcion}</p>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}