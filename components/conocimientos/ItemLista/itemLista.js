import Image from "next/image";
import useWindowSize from "hooks/useWindowSize";
import Tooltip from "components/reutilizables/Tooltip";
import styles from "./styles";

export default function ItemLista(props) {
    const { data } = props;
    const {width} = useWindowSize();

    return (
        <>
            <li>
                <h3>{data?.nombre}</h3>
                <ul className="ul-image">
                    {
                        data?.tecnologias.map(item =>
                            <Tooltip nombre={item.nombre} position="top center">
                                <li className="image-li">
                                    <Image
                                        src={item.imagen}
                                        key={item.nombre}
                                        width={width <= 800 ? 48 : 32}
                                        height={width <= 800 ? 48 : 32}
                                        alt={item.nombre}
                                    />

                                </li>
                            </Tooltip>

                        )
                    }
                </ul>
                <p>{data?.descripcion}</p>
            </li>
            <style jsx>{styles}</style>
        </>
    )
}