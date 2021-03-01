import Link from "next/link";
import { useRouter } from 'next/router';
import usePerfil from "../../hooks/usePerfil";

export default function Navegacion(){
    const router = useRouter();
    const {usuario} = usePerfil();

    return(
        <>
            <header>
                <div>
                    <img src={usuario.imagen} alt="JesusMH"/>
                    <p>PORTAFOLIO</p>
                </div>
                <nav>
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
        </header>

        <style jsx>{`
            header{
                display: grid;
                grid-template-columns: 10rem 1fr;
                grid-template-rows: 1fr;
                min-height: 4rem;
                max-height: 4rem;
                padding: 0 2rem;
                background-color: #424449;
                font-family: Radley serif;
                }

            header nav {
                display: flex;
                justify-content: flex-end;
                padding: 0;
            }

            header nav ul{
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

            header div{
                display: flex;
                align-items: center;
                gap: 1rem;
                height: 4rem;

            }

            header img{
                width: 52px;
                height: 52px;
                border-radius: 50%;
            }

            header div p{
                font-size: 1.3rem;
                color: #E1D5D5;
            }

            li{
              display: flex;
               align-items: center;
               padding: 0 1rem; 
               list-style: none;
               min-height: 3rem;
               color: #E1D5D5;
               margin: 0;
               min-height: 100%;
           }

           li:hover{
                transition: .3s;
                background-color: #363739;

           }

            .seleccionado{
            }
        `}</style>
    </>
    )
}