import useWindowSize from "hooks/useWindowSize";
import styles from "./styles";

export default function Tecnologias(props){
    const {principales, secundarias} = props;
    const {width} = useWindowSize();

    return(
        <>
            <div>
                <h2>Tecnologias Utilizadas</h2>
                <ul>
                    {
                        principales?.map(p => (
                            <div key={p.nombre}>
                                <img src={p.imagen} width={width <= 600 ? 48 : 55} height={width <= 600 ? 48 : 55} />
                                <p>{p.nombre}</p>
                            </div>
                        ))
                    }
                    {
                        secundarias?.map(s => (
                            <div key={s.nombre}>
                                <img src={s.imagen} width={width <= 600 ? 48 : 55} height={width <= 600 ? 48 : 55}/>
                                <p>{s.nombre}</p>
                            </div>
                        ))
                    }
                </ul>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}