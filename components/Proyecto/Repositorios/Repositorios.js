import Image from "next/image";
import Link from "next/link";
import useWindowSize from "hooks/useWindowSize";
import styles from "./styles";

export default function Repositorios(props){
    const {data} = props;
    const {width} = useWindowSize();

    return(
        <>
            <div>
                <h2>Repositorios</h2>
                <ul>
                    {
                        data?.length !== 0 ?
                        data?.map(d => (
                            <Link key={d.nombre} href={`https://github.com/${d.nombre}`}>
                                <a>
                                   <li>
                                        <Image 
                                            src="https://jesusmh.s3.us-east-2.amazonaws.com/tecnologias/github.svg"
                                            width={width <= 800 ? 40 : 50}
                                            height={width <= 800 ? 40 : 50}
                                            alt="github logo"
                                         />
                                         <span>
                                             {d.nombre}
                                         </span>
                                        
                                        </li> 
                                </a>
                            </Link>
                            
                        ))
                        : <li>No hay repositorios en este proyecto aun.</li>
                    }
                </ul>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}