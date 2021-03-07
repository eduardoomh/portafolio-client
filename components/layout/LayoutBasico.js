import Navegacion from "../Navegacion";
import Footer from "../reutilizables/Footer";

export default function LayoutBasico(props){
    const {children} = props;

    return(
        <div>
            <Navegacion />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}