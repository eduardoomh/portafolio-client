import styles from "./styles";

export default function ParrafoArray(props){
    const {titulo, parrafos} = props;

    return(
        <div className="contenedor">
            <h2>{titulo}</h2>
            <ul>
                {
                    parrafos?.map(p => <li key={p?.texto?.substring(1,5)}>{p?.texto}</li>)
                }

            </ul>
            <style jsx>{styles}</style>
        </div>
        
    )
}