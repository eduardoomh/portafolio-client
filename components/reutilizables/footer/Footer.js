import Link from "next/link";
import usePerfil from "../../../hooks/usePerfil";
import RedesSociales from "../RedesSociales";
import styles from "./styles";

export default function Footer(){
    const {facebook, github, linkedin, telefono, correo_electronico} = usePerfil();

    return(
        <>
            <footer>
                <p>
                    Dejo mis redes de contacto para que cualquier persona pueda comunicarse conmigo.
                </p>
                <h4>Contacto</h4>
                {

                }
                <RedesSociales 
                    facebook={facebook || ""} 
                    github={github || ""} 
                    linkedin={linkedin || ""} 
                    telefono={telefono || ""} 
                />
                <ul>
                    <li>eduardoomh@outlook.com</li>    
                    <li>  
                        <Link href="https://drive.google.com/file/d/1WxChPkm-PXqQN6honFY2x8ckB7wdVH_t/view?usp=sharing">
                            <a>Curriculum</a>
                        </Link> 
                    </li>
     
                </ul>
                <p>Jesus MH - 2021</p>
            </footer>
            <style jsx>{styles}</style>
        </>
    )
}