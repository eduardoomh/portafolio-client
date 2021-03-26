import styles from "./styles";

export default function ParrafoArray(props){
    const {titulo, parrafos, id} = props;

    return(
        <div id={id} className="contenedor">
            <h2>{titulo}</h2>
            <div>
                {
                    parrafos.map(p => <p key={p?.texto.substring(0,6)}>{p?.texto}</p>)
                }

            </div>
            <style jsx>{styles}</style>
        </div>
        
    )
}