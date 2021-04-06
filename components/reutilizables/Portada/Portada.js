import Image from "next/image";
import useWindowSIze from "../../../hooks/useWindowSize";
import styles from "./styles";

export default function Portada(props){
    const {imagen, titulo, descripcion} = props;
    const {width} = useWindowSIze();

    return(
        <>
            <div>
                <div className="imagen">
                <Image 
                    src={imagen} 
                    width={width >= 600 ? 480 : 310} 
                    height={width >= 600 ? 480 : 310} 
                    alt="imagen" 
                />
                </div>
                <h1>{titulo}</h1>
                <p>{descripcion}</p>

            </div>
            <style jsx>{styles}</style>
        </>
    )
}