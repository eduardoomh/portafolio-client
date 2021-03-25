import styles from "./styles";

export default function Titulo(props){
    const {titulo, descripcion = false} = props;

    return( 
        <>
            <div>
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}