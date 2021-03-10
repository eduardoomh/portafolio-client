import Link from "next/link";
import Boton from "./Boton";

export default function BotonContainer(props) {
    const {ruta, texto} = props;


    return (
        <>
            <div className="boton-container">
                <Link href={ruta}>
                    <a>
                        <Boton>{texto}</Boton>
                    </a>
                </Link>
                
            </div>

            <style jsx>{`
            .boton-container{
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 4rem;
            }
         `}
       </style>
        </>
    )
}