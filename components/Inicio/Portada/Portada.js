import styles from "./styles";
import Link from "next/link";
import MainBoton from "../../reutilizables/MainBoton";
import useWindowSize from "../../../hooks/useWindowSize";
import { AiTwotoneTrophy, AiOutlineGithub } from "react-icons/ai";
import { RiFacebookBoxFill, RiPsychotherapyLine, RiAwardFill } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";
import { GoSmiley } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import Tooltip from "../../reutilizables/Tooltip";
import RedesSociales from "../../reutilizables/RedesSociales";

export default function Portada(props) {
    const { imagen, nombres, apellidos, descripcion, facebook, github, linkedin, telefono } = props;
    const { width } = useWindowSize();

    return (
        <>
            <div>
                <h1>{nombres} {apellidos}</h1>
                <span>Portafolio Personal</span>
                <div className="user-data">
                    <article>
                        <div className="img-container">
                            <Tooltip 
                                nombre="Hay que promover el uso del cubrebocas" 
                                position="left center"
                                width="14rem"
                                height="5rem"
                            >
                                <img
                                    src={imagen}
                                    width={width <= 600 ? 130 : 150}
                                    height={width <= 600 ? 130 : 150}
                                    alt="jesus mh"
                                />
                            </Tooltip>

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
                                <GoSmiley size={24} />
                            </span>
                            Mexico
                        </p>
                        <RedesSociales 
                            facebook={facebook} 
                            linkedin={linkedin} 
                            github={github} 
                            telefono={telefono} 
                        />
                        <div className="user-button">
                            <MainBoton>
                                <Link href="https://drive.google.com/file/d/1WxChPkm-PXqQN6honFY2x8ckB7wdVH_t/view?usp=sharing">
                                    <a>Visualizar CV
                                    </a>
                                </Link>
                            </MainBoton>
                        </div>


                    </article>
                </div>
                <p className="user-parrafo">{descripcion}</p>
                <p className="user-frase">“Transformar mis ideas a codigo es la mayor satisfaccion que puede haber”</p>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}