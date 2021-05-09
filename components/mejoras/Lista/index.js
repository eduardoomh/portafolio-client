import ItemLista from "../ItemLista";
import styles from "./styles";

export default function Lista(props){
    const {pendientes, terminadas} = props;

    return(
        <div>
            <h2>Lista de Tareas</h2>
            <ul>
                {
                    terminadas?.map(t => (
                        <ItemLista 
                            titulo={t.nombre} 
                            descripcion={t.descripcion} 
                            completado={true}
                            fecha={t.fecha}
                            key={t.nombre}
                        />
                    ))
                }
                {
                    pendientes?.map(p => (
                        <ItemLista 
                            titulo={p.nombre}
                            descripcion={p.descripcion}
                            key={p.nombre}
                        />
                    ))
                }
            </ul>
            <style jsx>{styles}</style>
        </div>
    )
}
