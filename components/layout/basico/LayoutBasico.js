import {useState, useEffect} from "react";
import Navegacion from "components/Navegacion";
import Footer from "components/reutilizables/footer";
import useWindowSize from "hooks/useWindowSize";
import MainPlaceholder from "components/reutilizables/MainPlaceholder";
import MovilMainPlaceholder from "components/reutilizables/MovilMainPlaceholder";
import styles from "./styles";
import {lightVariables, darkVariables} from "./styles";

export default function LayoutBasico(props){
    const [isDark, setIsDark] = useState("");
    const {children, isUser, dark, setDark} = props;
    const {width} = useWindowSize();

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
                <div className="navegacion">
                    <Navegacion />
                </div>
                
                <main>
                    {isUser ? 
                        children 
                        : 
                        (
                            <div className="loading">
                                {
                                    width <= 800 ? (
                                        <>
                                            <MovilMainPlaceholder />
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <MainPlaceholder />
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
            <style global jsx>{isDark}</style>

            
        </>
    )
}