import ItemLista from "../ItemLista";
import styles from "./styles";

export default function Lista(props){
        const {titulo, lista} = props;
    return(
        <>
            <div>
                <h2>{titulo}</h2>
                <ul>
                    {
                        lista?.map((item, index) => 
                            <ItemLista data={item} key={index}/>
                        )
                    }
                </ul>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}