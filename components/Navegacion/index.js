import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import usePerfil from "../../hooks/usePerfil";
import useEstilos from "../../hooks/useEstilos";
import { HiOutlineMenu } from "react-icons/hi";
import useWindowSize from "../../hooks/useWindowSize";

export default function Navegacion() {
    const [navShow, setNavShow] = useState(true);
    const size = useWindowSize();
    console.log(size.width)
    const router = useRouter();
    const { usuario } = usePerfil();
    const { estilos } = useEstilos();

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
            <header>
                <div className="div-img">
                    <img src={usuario?.imagen} alt="JesusMH" />
                    <p>PORTAFOLIO</p>
                </div>
                <div className="movil-menu">
                    <HiOutlineMenu size={36} color={estilos.colores.blancoLetras} onClick={() => abrirMenu()} />
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
                                <li className={router.pathname === "/contacto" ? "seleccionado" : ""}>
                                    <Link href="/contacto">
                                        <a>Contacto</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                    ) : (
                        ""
                    )
                }

            </header>

            <style jsx>{`
            header{
                display: grid;
                grid-template-columns: 10rem 1fr;
                grid-template-rows: 1fr;
                min-height: 4rem;
                padding: 0 2rem;
                background-color: ${estilos.colores.negroOpaco};
                font-family: Radley serif;
                }

            .nav{
                display: flex;
                justify-content: flex-end;
                padding: 0;
            }

            .nav ul{
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                min-width: 30rem;
                font-size: 1.2rem;
                letter-spacing: 1px;
                margin: 0;
                padding: 0;
              }

            .div-img{
                display: flex;
                align-items: center;
                gap: 1rem;
                height: 4rem;

            }

            .div-img img{
                width: 52px;
                height: 52px;
                border-radius: 50%;
            }

            .div-img p{
                font-family: Radley serif;
                font-size: 1.3rem;
                color: ${estilos.colores.blancoLetras};
            }

            .movil-menu{
                display: none;
            }

            li{
              display: flex;
               align-items: center;
               padding: 0 1rem; 
               list-style: none;
               min-height: 3rem;
               color: ${estilos.colores.blancoLetras};
               margin: 0;
               min-height: 100%;
           }

           li:hover{
                transition: .3s;
                background-color: ${estilos.colores.negroOpacoHover};

           }

           a{
               display: flex;
               aligh-items: center;
               justify-content: center;
               min-height: 4rem;
               padding: 1.2rem 0;
           }

            .seleccionado{
            }

            @media (max-width: 500px) {
                    header{
                        display: grid;
                        grid-template-columns: 3rem 1fr;
                        grid-template-rows: 1fr;
                        padding:  0 1rem;
                        min-height: 3.5rem;

                    }

                    .div-img p{
                        display: none;
                    }

                    .div-img img{
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                    }

                    .movil-menu{
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                    }

                    .nav{
                        transition: .3s;
                        display: grid;
                        grid-row: 2/3;
                        grid-column: 1/span 2;
                        min-width: 100%;
                        max-width: 100%;
                        height: 16rem;
                        overflow: hidden;
                    }

                    .nav ul{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: flex-end;
                        min-height: inherit;
                        max-height: inherit;
                        gap: 0;
                        padding: 0;

                    }
                    .nav ul li{
                        display: flex;
                        justify-content: flex-end;
                        max-height: 1rem !important;
                        min-height: 4rem;
                        min-width: 100%;
                        padding-rigth: .5rem;
                        margin: 0;
                        gap: 0;
                        font-size: 1.5rem;
                    }
                
                }
        `}</style>
        </>
    )
}