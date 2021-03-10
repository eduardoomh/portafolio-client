import {lazy, Suspense} from "react";
import useIntersecting from "../../../hooks/useIntersecting";
const PerfilDato = lazy(() => import("./PerfilDato"));

export default function LazyPerfilDatos(props){
    const { titulo, descripcion, gif } = props;
    const {show, ref} = useIntersecting('50px');

    return(
        <Suspense fallback={"estoy cargandoooo...."}>
            <div ref={ref}>
                {
                    show ? <PerfilDato titulo={titulo} descripcion={descripcion} gif={gif} intersecting={ref} /> : null
                }
            </div>
            
        </Suspense>
    )
}
