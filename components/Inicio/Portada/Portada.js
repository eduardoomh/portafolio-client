import styles from "./styles";
import useUtils from "hooks/useUtils";
import PerfilCard from "components/Inicio/PerfilCard";

export default function Portada(props) {
    const { imagen, nombres, apellidos, descripcion, facebook, github, linkedin, telefono } = props;
    const { frase } = useUtils();

    return (
        <>
            <div>
                <h1>{nombres} {apellidos}</h1>
                <span>Portafolio Personal</span>
                <div className="user-data">
                    <PerfilCard 
                        facebook={facebook} 
                        imagen={imagen} 
                        github={github} 
                        linkedin={linkedin} 
                        telefono={telefono} 
                    />
                </div>
                <p className="user-parrafo">{descripcion}</p>
                <p className="user-frase">{frase}</p>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}