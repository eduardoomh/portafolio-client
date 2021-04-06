import styles from "./styles";

export default function ItemLista(props){
        const {data} = props;

    return(
        <>
            <li>
                <h3>{data?.nombre}</h3>
                <span>
                    (
                        {
                            data?.tecnologias.map(item => 
                                <img 
                                    src={item.imagen} 
                                    key={item.nombre} 
                                    width={24}
                                    height={24}
                                    alt={item.nombre}
                                />
                            )
                        }
                    )
                </span>
                <p>{data?.descripcion}</p>
            </li>
            <style jsx>{styles}</style>
        </>
    )
}