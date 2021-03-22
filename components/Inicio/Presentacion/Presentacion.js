import Image from "next/image";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Estilos from "./Estilos";

export default function Presentacion({children}){
    return(
        <>
            <div className="presentacion">
                <Image 
                    src="/logoMHCompleto.svg" 
                    width={206} 
                    height={64} 
                    alt="jesusmh.com logo" 
                />
                <p>{children}</p>
                <HiOutlineChevronDoubleDown id="flecha" size={36} color="black" />
                
            </div>
            <Estilos />
        </>
    )
}