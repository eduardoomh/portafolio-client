import CardProyecto from "components/proyectos/CardProyecto";
import styles from "./styles";

export default function ProyectosList(props){
    const {terminados, pendientes, id} = props;

    return(
        <>
            <div id={id} className="contenedor">
                <h2 >Proyectos (terminados y en desarrollo)</h2>
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
                                    <CardProyecto data={d} key={d.id}/>  
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