import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from 'next/router';
import { HiOutlineMenu } from "react-icons/hi";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./styles";
import styleResponsive from "./styleResponsive";
import Popup from 'reactjs-popup';

export default function Navegacion() {
    const [navShow, setNavShow] = useState(true);
    const [tema, setTema] = useState("");
    const size = useWindowSize();
    const router = useRouter();

    useEffect(() => {
        if (size.width >= 1000) {
            setNavShow(true)
        } else {
            setNavShow(false);
        }
    }, [size]);

    useEffect(() => {
        setTema(styles);

    },[]);

    return (
        <>
            <header>
                <div className="div-img">
                    <Image
                        src="/logoMH.svg"
                        alt="Picture of the author"
                        width={navShow ? 95 : 120}
                        height={navShow ? 40 : 54}
                    />

                </div>

                {
                    navShow !== false ? (
                        <nav className="nav">
                            <ul>
                                <li className={router.pathname === "/" ? "seleccionado" : ""}>
                                    <Link href="/">
                                        <a>Inicio</a>
                                    </Link>
                                </li>
                                <li className={router.pathname === "/conocimientos" ? "seleccionado" : ""}>
                                    <Link href="/conocimientos">
                                        <a>Conocimientos</a>
                                    </Link>
                                </li>
                                <li className={router.pathname === "/proyectos" ? "seleccionado" : ""}>
                                    <Link href="/proyectos">
                                        <a>Proyectos</a>
                                    </Link>
                                </li>
                                <li className={router.pathname === "/mejoras" ? "seleccionado" : ""}>
                                    <Link href="/mejoras">
                                        <a>Mejoras</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                    ) : (
                        <div className="movil-menu">
                            <Popup
                                trigger={

                                    <button >
                                        <HiOutlineMenu size={28} color="white" />
                                    </button>
                                }
                                position="top left"
                                on={['click']}
                                arrow='center center'
                                closeOnDocumentClick
                                keepTooltipInside=".movil-menu"
                            >
                                <ul className="popup">
                                    <li className={router.pathname === "/" ? "seleccionado" : ""}>
                                        <Link href="/">
                                            <a>Inicio</a>
                                        </Link>
                                    </li>
                                    <li className={router.pathname === "/conocimientos" ? "seleccionado" : ""}>
                                        <Link href="/conocimientos">
                                            <a>Conocimientos</a>
                                        </Link>
                                    </li>
                                    <li className={router.pathname === "/proyectos" ? "seleccionado" : ""}>
                                        <Link href="/proyectos">
                                            <a>Proyectos</a>
                                        </Link>
                                    </li>
                                    <li className={router.pathname === "/mejoras" ? "seleccionado" : ""}>
                                        <Link href="/mejoras">
                                            <a>Mejoras</a>
                                        </Link>
                                    </li>
                                </ul>
                            </Popup>
                        </div>
                    )
                }
            </header>
            
            <style jsx>{tema}</style>
            <style jsx>{styleResponsive}</style>


        </>
    )
}