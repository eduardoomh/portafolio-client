import {useContext} from "react";
import usuarioContext from "context/usuarioContext";

export default function usePerfil(){
    return useContext(usuarioContext);
} 