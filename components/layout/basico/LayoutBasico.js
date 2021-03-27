import Navegacion from "../../Navegacion";
import Footer from "../../reutilizables/footer";
import styles from "./styles";

export default function LayoutBasico(props){
    const {children, isUser} = props;

    return(
        <>
            <div>
                <Navegacion />
                <main>
                    {isUser ? 
                        children 
                        : 
                        <div className="loading">
                            <div>
                                <p>cargando...</p>

                            </div>
                            <div>
                                <p>cargando...</p>

                            </div>
                        </div>
                        }
                </main>
                <Footer />
            </div>
            <style jsx>{styles}</style>
        </>
    )
}