import styles from "./styles";

export default function Detalles(props){
    const {data} = props;
    return(
        <>
            <div>
                <h2>Detalles del Proyecto</h2>
                <ul>
                {
                    data?.map(d => (
                        <li key={d.nombre}>{d.nombre}</li>
                    ))
                }
            </ul>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}