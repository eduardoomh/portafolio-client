import {AiOutlineGithub } from "react-icons/ai";
import { RiFacebookBoxFill} from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import styles from "./styles";

export default function RedesSociales(props) {
    const {facebook, linkedin, github, telefono} = props;

    return (
        <>
            <div>
                <span>
                    <a href={facebook} target="_blank">
                        <RiFacebookBoxFill size={28} />
                    </a>
                </span>
                <span>
                    <a href={linkedin} target="_blank">
                        <GrLinkedin size={24} />
                    </a>
                </span>
                <span>
                    <a href={github} target="_blank">
                        <AiOutlineGithub size={28} />
                    </a>
                </span>

                <span>
                    <a href={`https://wa.me/52${telefono}`} target="_blank">
                        <FiPhoneCall size={28} />
                    </a>
                </span>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}