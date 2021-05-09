import styles from "./styles";

export default function Parrafo(props){
    const {titulo, descripcion} = props;

    return(
        <>
            <div>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}