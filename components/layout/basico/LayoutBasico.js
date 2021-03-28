import Image from "next/image";
import Navegacion from "../../Navegacion";
import Footer from "../../reutilizables/footer";
import useWindowSize from "../../../hooks/useWindowSize";

import styles from "./styles";

export default function LayoutBasico(props){
    const {children, isUser} = props;
    const {width} = useWindowSize();

    return(
        <>
            <div>
                <Navegacion />
                <main>
                    {isUser ? 
                        children 
                        : 
                        (
                            <div className="loading">
                                {
                                    width <= 600 ? (
                                        <>
                                            <Image src="/loading_movil.svg" width={382} height={372} alt="svg" />
                                            <Image src="/loading_text_movil.svg" width={382} height={372} alt="svg" />
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <Image src="/loading_web.svg" width={1152} height={318} alt="svg" />
                                            <Image src="/loading_text_web.svg" width={1152} height={345} alt="svg" />
                                        </>
                                    )
                                }
                            </div>
                        )
                        
 
                        
                        }
                </main>
                <Footer />
            </div>
            <style jsx>{styles}</style>
        </>
    )
}