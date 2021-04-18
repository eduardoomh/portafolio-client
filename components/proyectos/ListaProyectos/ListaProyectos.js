import CardProyecto from "components/proyectos/CardProyecto";
import { BsFillCircleFill } from "react-icons/bs";
import styles from "./styles";

export default function ProyectosList(props){
    const {terminados, pendientes, id} = props;

    return(
        <>
            <div id={id} className="contenedor">
                <h2 >Lista de Proyectos </h2>
                <ul className="simbologia">
                    <li><span><BsFillCircleFill size={20} fill="#03ffce" /></span>terminados</li>
                    <li><span><BsFillCircleFill size={20} fill="#e6ecf6" /></span>en desarrollo</li>
                </ul>
                <div className="proyectos">
                    {
                        terminados?.length === 0 ?
                        (
                            <p>No hay proyectos en esta categoria</p>
                        )
                        :
                        <>
                        {
                            terminados?.map(d => (
                                <div key={d.nombre}>
                                    <CardProyecto data={d} key={d.id} terminado={true}/>  
                                </div>
                                                    
                            ))
                            
                        }
                                                {
                            pendientes?.map(d => (
                                <div key={d.nombre}>
                                    <CardProyecto data={d} key={d.id}/>  
                                </div>
                                                    
                            ))
                            
                        }

 
                        </>

                  
                    }

                </div>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}