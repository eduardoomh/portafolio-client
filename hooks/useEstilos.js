import {useContext} from "react";
import estilosContext from "../context/estilosContext";

export default function useEstilos(){
    return useContext(estilosContext);
} 