import EstudioCard from "components/Inicio/EstudioCard";
import styles from "./styles";

export default function EstudioList(props){
    const {titulo, data} = props;

    return(
        <>
            <div>
                <h2>Estudios {titulo}</h2>
                {
                    data && data.length > 0 ? 
                        data?.map(element => 
                            <EstudioCard data={element} key={element.titulo} />) : "no hay datos"
                }
                
            </div>
            <style jsx>{styles}</style>
        </>
    )
}