import {useState, useEffect} from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import MainBoton from "../MainBoton";
import FotoPerfil from "../FotoPerfil";
import styles from "./styles";

export default function Banner(props) {
    const [movil, setMovil] = useState(false);
    const {imagen, children} = props;
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
            <div className="banner">
                <h1>Jesus Eduardo <br/>Martinez Hinojosa</h1>
                <div>
                    <MainBoton>Visualizar CV</MainBoton>
                </div>
                <div className="perfil">
                    <FotoPerfil
                        width={movil ? 130 : 160}
                        height={movil ? 130 : 160}
                        imagen={imagen}
                        animate={movil ? true : false}
                     />
                </div>
                {
                    !movil && (
                        <div className="web">
                            <ul className="submenu">
                                {children}
                            </ul>
                            <div className="github">
                                <img 
                                    src="https://image.flaticon.com/icons/png/512/25/25231.png" 
                                    alt="github.com/eduardoomh"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            
                        </div>
                    )
                }
            </div>
            <style jsx>{styles}</style>
        </>
    )
}