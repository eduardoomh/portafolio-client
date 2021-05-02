import {useState, useEffect} from "react";
import Navegacion from "components/Navegacion";
import Footer from "components/reutilizables/footer";
import useWindowSize from "hooks/useWindowSize";
import MainPlaceholder from "components/reutilizables/MainPlaceholder";
import LoadingPage from "components/reutilizables/LoadingPage";
import styles from "./styles";
import {lightVariables, darkVariables} from "./styles";

export default function LayoutBasico(props){
    const [isDark, setIsDark] = useState("");
    const {children, isUser, dark, setDark} = props;
    const {width} = useWindowSize();
    console.log(width)

    const cambiarTema = () => {
        setDark(!dark);
        setIsDark(dark ? darkVariables : lightVariables);
    }

    useEffect(() => {
        setIsDark(lightVariables);
    },[]);


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