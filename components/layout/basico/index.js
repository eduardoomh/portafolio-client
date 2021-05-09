import {useState, useEffect} from "react";
import {useQuery} from "@apollo/client";
import usePerfil from "hooks/usePerfil";
import {OBTENER_USUARIO} from "graphql/querys/usuario";
import Navegacion from "components/Navegacion";
import Footer from "components/reutilizables/footer";
import useWindowSize from "hooks/useWindowSize";
import MainPlaceholder from "components/reutilizables/MainPlaceholder";
import LoadingPage from "components/reutilizables/LoadingPage";
import styles from "./styles";
import {lightVariables } from "./styles";

export default function LayoutBasico(props){
    const [isDark, setIsDark] = useState("");
    const {children, isUser } = props;
    const {width} = useWindowSize();
    const {actualizarUsuario} = usePerfil();
    const { data, loading } = useQuery(OBTENER_USUARIO);


    useEffect(() => {
        setIsDark(lightVariables);
        
        if(data){
            actualizarUsuario(data.obtenerUsuario);
        }
    },[data]);


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
                                <MainPlaceholder desktop={width > 800 ? true : false} />
                            </div>
                        )
                        
                        }
                </main>
                <Footer />
            </div>
            <style jsx>{styles}</style>
            <style global jsx>{isDark}</style>

            
        </>
    )
}