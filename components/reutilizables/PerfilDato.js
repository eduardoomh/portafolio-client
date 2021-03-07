export default function PerfilDato(props) {
    const { titulo, descripcion, gif } = props;

    return (
        <>
            <div className="perfil-container">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <div>
                    <img alt="gif" src={gif} />
                </div>

            </div>

            <style jsx>{`

            .perfil-container{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 5rem 9rem 1fr;
                min-height: 37rem;
                max-height: 37rem;
                padding: 1rem 2rem;
                margin: 3rem 4rem;
                border: 1px solid #ECDEDE;
                border-radius: 15px;
                background-color: rgba(202, 202, 202, .1); 
                font-family: Radley;
            }

            .perfil-container p{
                font-size: 1.4rem;
            }


            .perfil-container h3{
                font-size: 2rem;
                font-weight: normal;
                color: #814E4E;
            }
            .perfil-container div{
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
            }

            .perfil-container div img{
                min-height: 17rem;
                max-height: 17rem;
                margin: 0;
            }

        `}</style>
        </>
    )
}