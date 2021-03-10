import {useRouter} from "next/router";
import Boton from "./Boton";

export default function BotonContainer(props) {
    const {ruta, texto} = props;
    const router = useRouter();

    const navegacion = () => {
        router.push(ruta);
    }

    return (
        <>
            <div className="boton-container">
                <Boton onClick={() => navegacion()}>{texto}</Boton>
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