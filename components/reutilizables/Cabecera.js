export default function Cabecera(props){
    const{titulo, descripcion, gif} = props;

    return(
        <>
            <div className="contenedor">
                <div className="contenido">
                    <h1>{titulo}</h1>
                    <p>{descripcion}</p>
                </div>
                <article className="contenido-gif">
                    <img alt="hombre en su computador" src={gif} />
                </article>
            </div>

            <style jsx>{`
                .contenedor{
                    display: grid;
                    grid-template-columns: 1.4fr 1.6fr;
                    grid-template-rows: 1fr;
                    min-height: 28rem;
                    padding: 2rem;
                    margin: 2rem 4rem;
                    border: 1px solid #ECDEDE;
                    border-radius: 15px;
                    background-color: rgba(202, 202, 202, .1); 
                    font-family: Radley;
                }

                .contenido{
                    margin: 2rem 3rem;
                    font-size: 1.2rem;
                    border-right: 2px solid #BCB1B1;
                }

                .contenido p{
                    color: #814E4E;
                    font-size: 1.5rem;
                }

                .contenido-gif{
                    display: flex;
                    justify-content: center;
                }

                .contenido-gif img{
                    height: 20rem;

                }

                .contenido h1{
                    font-size: 2.2rem;
                    font-weight: bold;
                }

            `}</style>
        </>
    )
}