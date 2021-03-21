import {useState, useEffect} from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import Avatar from "../Avatar";
import TextoBanner from "../TextoBanner";
import Estilos from "./Estilos";

export default function Banner(props) {
    const [movil, setMovil] = useState(false);
    const {texto, texto_secundario = false, descripcion = false, imagen} = props;
    const size = useWindowSize();

    useEffect(() => {
        if(size.width < 600){
            setMovil(true);
        }else{
            setMovil(false);
        }
    },[size]);

    return (
        <>
            <div className="cabecera">
                <div className="cabecera_banner">
                    <div className="filtro">
                       
                    </div>
                    <div className="avatar">
                        <Avatar imagen={imagen} width={140} height={140} />
                    </div>
                     
                </div>
                <TextoBanner
                    texto={texto}
                    texto_secundario={texto_secundario}
                    descripcion={descripcion}
                 />

            </div>
            <Estilos />
        </>
    )
}