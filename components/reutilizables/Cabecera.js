export default function Cabecera(props){
    const{titulo, descripcion} = props;

    return(
        <>
            <div>
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
                <article className="contenido">
                    <p>contenido</p>
                </article>
            </div>

            <style jsx>{`
                div{
                    display: grid;
                    grid-template-columns: 1fr 3fr;
                    grid-template-rows: 1fr;
                    max-width: 100vw;
                    min-height: 20rem;
                    max-height: 20rem;
                    background-color: #5b83a1;
                    padding: 1rem 4rem;
                }

                h1{
                    grid-column: 1/2;
                    grid-row: 1/2;
                }
                p{
                    grid-column: 1/2;
                    grid-row: 2/3;
                }
                .contenido{
                    display: flex;
                    aligh-items: grow;
                    background-color: #FaB95B;
                    min-height: 100%;
                }


        `}</style>
        </>
    )
}