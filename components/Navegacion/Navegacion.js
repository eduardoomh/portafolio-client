import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from 'next/router';
import { HiOutlineMenu } from "react-icons/hi";
import useWindowSize from "../../hooks/useWindowSize";
import Estilos from "./Estilos";
import Responsive from "./Responsive";
 
export default function Navegacion() {
    const [navShow, setNavShow] = useState(true);
    const size = useWindowSize();
    console.log(size.width)
    const router = useRouter();

    const abrirMenu = () => {
        setNavShow(!navShow);
    }

    useEffect(() => {
        if (size.width >= 500) {
            setNavShow(true)
        } else {
            setNavShow(false);
        }
    }, [size]);

    return (
        <>
            <header className="header">
                <div className="div-img">
                    <Image
                        src="/logoMH.svg"
                        alt="Picture of the author"
                        width={130}
                        height={70}
                    />         
                </div>
                <div className="movil-menu">
                    <HiOutlineMenu size={36} color="white" onClick={() => abrirMenu()} />
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
                        ""
                    )
                }

            </header>
            <Estilos />
            <Responsive />
        </>
    )
}