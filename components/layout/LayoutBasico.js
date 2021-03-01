import Navegacion from "../Navegacion";

export default function LayoutBasico(props){
    const {children} = props;

    return(
        <div>
            <Navegacion />
            <main>
                {children}
            </main>
        </div>
    )
}