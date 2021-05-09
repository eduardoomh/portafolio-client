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
                        <a target="_blank" href={usuario?.curriculum}>Curriculum</a>
                    </li>
     
                </ul>
                <p>Jesus MH - 2021</p>
            </footer>
            <style jsx>{styles}</style>
        </>
    )
}