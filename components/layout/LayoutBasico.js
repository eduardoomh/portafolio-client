import Navegacion from "../Navegacion";
import Footer from "../reutilizables/Footer";

export default function LayoutBasico(props){
    const {children} = props;

    return(
        <>
            <div className="container">
                <Navegacion />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
            <style jsx>{`
                .container main{
                    padding-top: 4rem;
                }
                `}</style>
        </>
    )
}