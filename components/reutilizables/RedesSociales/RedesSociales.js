import Link from "next/link";
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
                    <Link href={facebook}>
                        <a>
                            <RiFacebookBoxFill size={28} />
                        </a>
                    </Link>

                </span>
                <span>
                    <Link href={linkedin}>
                        <a>
                            <GrLinkedin size={24} />
                        </a>
                    </Link>

                </span>
                <span>

                    <Link href={github}>
                        <a>
                            <AiOutlineGithub size={28} />
                        </a>
                    </Link>
                </span>

                <span>

                    <Link href={`https://wa.me/52${telefono}`}>
                        <a>
                            <FiPhoneCall size={28} />
                        </a>
                    </Link>
                </span>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}