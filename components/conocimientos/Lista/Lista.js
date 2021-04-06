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
                        lista?.map(item => 
                            <ItemLista data={item} key={item.id}/>
                        )
                    }
                </ul>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}