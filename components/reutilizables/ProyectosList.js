import Link from "next/link";
import CardProyecto from "./CardProyecto";

export default function ProyectosList(props){
    const {data, texto} = props;

    return(
        <>
            <div className="contenedor">
                <h2>Proyectos {texto}</h2>
                <div className="proyectos">
                    {
                        data.length === 0 ?
                        (
                            <p>No hay proyectos en esta categoria</p>
                        )
                        :
                        
                        data?.map(d => (
                            <Link href={`/proyectos/${d.id}`}>
                                <a>
                                  <CardProyecto data={d} key={d.id}/>  
                                </a>
                            
                            </Link>
                            
                        ))
                    }

                </div>
            </div>
            <style jsx>{`
                .contenedor{
                    margin: 2rem 5rem;
                    font-family: Radley;
                }

                .contenedor h2{
                    font-size: 2.2rem;
                    font-weight: normal;
                }

                .proyectos{
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    gap: 1rem;
                }
                `}</style>
        </>
    )
}