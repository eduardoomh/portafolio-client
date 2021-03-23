import Navegacion from "../../Navegacion";
import Footer from "../../reutilizables/footer";
import styles from "./styles";

export default function LayoutBasico(props){
    const {children} = props;

    return(
        <>
            <div>
                <Navegacion />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
            <style jsx>{styles}</style>
        </>
    )
}