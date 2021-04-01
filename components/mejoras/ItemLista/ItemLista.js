import { CgCheckO } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import useWindowSize from "../../../hooks/useWindowSize";
import styles from "./styles";

export default function ItemLista(props){
    const {completado = false, titulo, descripcion, fecha = false } = props;
    const {width} = useWindowSize();
            
    return(
        <>
            <div className="container">
                <div className="icono">
                    {
                        completado ?  
                            <CgCheckO size={width <= 600 ? 32 : 48} color="#FFD464" /> 
                                    : 
                            <CgCloseO size={width <= 600 ? 32 : 48} color="#274873"/>
                    }

                </div>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                {
                    fecha !== false ? (
                        <div className="fecha">
                            <span>{fecha}</span>
                        </div>
                        
                    ) : ""
                }

               

            </div>
            <style jsx>{styles}</style>
        </>
    )
}