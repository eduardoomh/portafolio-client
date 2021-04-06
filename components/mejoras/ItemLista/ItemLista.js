import { CgCheckO } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import useWindowSize from "../../../hooks/useWindowSize";
import styles from "./styles";

export default function ItemLista(props){
    const {completado = false, titulo, descripcion, fecha = false } = props;
    const {width} = useWindowSize();
            
    return(
        <>
            <div className="container" className={completado ? "container" : "container pendiente"}>
                <div className="icono">
                    {
                        completado ?  
                            <CgCheckO size={width <= 600 ? 32 : 48} color="#06FFB4" /> 
                                    : 
                            <CgCloseO size={width <= 600 ? 32 : 48} color="#5493DC"/>
                    }

                </div>
                <h3>{titulo}</h3> 
                {
                    fecha !== false ? (
                        <span className="fecha">Realizado: {fecha}</span>
                    ) : (
                        ""
                    )
                }
                
                <p>{descripcion}</p>

            </div>
            <style jsx>{styles}</style>
        </>
    )
}