import styles from "./styles";
import MainBoton from "../../reutilizables/MainBoton";
import useWindowSize from "../../../hooks/useWindowSize";
import { AiTwotoneTrophy, AiOutlineGithub } from "react-icons/ai";
import { RiFacebookBoxFill, RiPsychotherapyLine, RiAwardFill } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";
import { GoSmiley } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";

export default function Portada(props){
    const {imagen, nombres, apellidos} = props;
    const {width} = useWindowSize();

    return(
        <>
            <div>
                <h1>{nombres} {apellidos}</h1>
                <span>Portafolio Personal</span>
                <div className="user-data">
                    <article>
                        <div className="img-container">
                            <img  
                                src={imagen} 
                                width={width <= 600 ? 130 : 150} 
                                height={width <= 600 ? 130 : 150} 
                                alt="jesus mh"
                            />
                        </div>
                        <p>
                            <span>
                                <AiTwotoneTrophy size={24} />
                            </span>
                            Ingeniero en Sistemas
                        </p>
                        <p> <span>
                                <RiAwardFill size={24} />
                            </span>
                            Desarrollador web
                        </p>
                        <p><span>
                                <RiPsychotherapyLine size={24} />
                            </span>
                            23
                        </p>
                        <p>
                            <span>
                                <GoSmiley size={24}/>
                            </span>
                            Mexico
                        </p>
                        <p id="social-media">
                            <span>
                                <RiFacebookBoxFill size={28}/>
                            </span>
                            <span>
                                <GrLinkedin size={24}/>
                            </span> 
                            <span>
                                <AiOutlineGithub size={28}/>
                            </span> 
                            <span>
                                <FiPhoneCall size={28}/>
                            </span> 
                            
                            
                        </p>
                        <div className="user-button">
                            <MainBoton>Visualizar CV</MainBoton>
                        </div>

                        
                    </article>
                </div>
                <p className="user-parrafo">En la programacion encontre la manera de convertir mis ideas  en realidades,  es un gusto mpara mi realizar soluciones a base de codigo y cumplir mis metas mas profundas.</p>
                <p className="user-frase">“Transformar mis ideas a codigo es la mayor satisfaccion que puede haber”</p>
            </div>
            <style jsx>{styles}</style>
        </>
    )
} 