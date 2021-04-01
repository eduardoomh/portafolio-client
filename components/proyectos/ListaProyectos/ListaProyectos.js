import useWindowSize from "../../../hooks/useWindowSize";
import CardProyecto from "../CardProyecto";
import Parrafo from "../../reutilizables/Parrafo";
import MainBoton from "../../reutilizables/MainBoton";
import styles from "./styles";

export default function ProyectosList(props){
    const {data, texto, id} = props;
    const {width} = useWindowSize();

    return(
        <>
            <div id={id} className="contenedor">
                <h2 >Proyectos {texto}</h2>
                <div className="proyectos">
                    {
                        data?.length === 0 ?
                        (
                            <p>No hay proyectos en esta categoria</p>
                        )
                        :
                        
                        data?.map(d => (
                            <div key={d.nombre}>
                                <CardProyecto data={d} key={d.id}/>  
                                <Parrafo titulo={d.nombre} descripcion={d.descripcion}/>
                                {
                                    width <= 600 && (
                                        <div className="boton-div">
                                            <MainBoton>Mas Detalle</MainBoton>
                                        </div>
                                    )
                                }
                            </div>
                            
                        ))
                    }

                </div>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}