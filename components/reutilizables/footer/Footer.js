import Link from "next/link";
import usePerfil from "hooks/usePerfil";
import RedesSociales from "components/reutilizables/RedesSociales"
import styles from "./styles";

export default function Footer(){
    const {usuario} = usePerfil();


    return(
        <>
            <footer>
                <p>
                    Dejo mis redes de contacto para que cualquier persona pueda comunicarse conmigo.
                </p>
                <h4>Contacto</h4>

                <RedesSociales 
                    facebook={usuario?.facebook || ""} 
                    github={usuario?.github || ""} 
                    linkedin={usuario?.linkedin || ""} 
                    telefono={usuario?.telefono || ""} 
                />
                <ul>
                    <li>{usuario?.correo_electronico}</li>    
                    <li>  
                        <a  target="_blank" href="https://drive.google.com/file/d/1WxChPkm-PXqQN6honFY2x8ckB7wdVH_t/view?usp=sharing">Curriculum</a>
                    </li>
     
                </ul>
                <p>Jesus MH - 2021</p>
            </footer>
            <style jsx>{styles}</style>
        </>
    )
}