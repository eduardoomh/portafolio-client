import {useEffect} from "react"
import Image from "next/image";
import usePerfil from "hooks/usePerfil";
import styles from "./styles";

export default function Nota(props){
    const {texto} = props;
    const {usuario} = usePerfil();

    useEffect(() => {
        console.log("Nota se ha ejecutado")
    })

    return(
        <>
            <div>
                <div className="avatar">
                    <img src={usuario?.imagen} width={64} height={64} alt="jesus mh" />
                </div>
                <div className="burbuja">
                    <Image src="/nota.svg" width={94} height={94} alt="nota burbuja" />
                </div>
                
                <p>{texto}</p>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}