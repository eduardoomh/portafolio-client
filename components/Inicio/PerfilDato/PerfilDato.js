import Estilos from "./Estilos";

export default function PerfilDato(props) {
    const { titulo, descripcion } = props;

    return (
        <>
            <div className="perfil-container">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
            </div>
            <Estilos />
        </>
    )
}