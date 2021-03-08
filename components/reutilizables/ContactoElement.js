export default function ContactoElement(props){
    const {titulo, descripcion} = props;

    return(
        <>
            <div>
                <h4>{titulo}</h4>
                <p>{descripcion}</p>
            </div>
            <style jsx>{`
                div{
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr;
                    justify-content: center;
                    align-items: center;
                    min-width: 100%;
                    max-width: 100%;
                    min-height: 6rem;
                    max-height: 6rem;
                    padding: 0;
                    margin: 3rem 0;
                    font-family: Radley;
                }

                h4, p{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                h4{
                    font-size: 2rem;
                    margin: 0;
                    padding: 0;
                }

                p{
                    font-size: 1.5rem;
                    margin: 0;
                    padding: 0;
                }
                `}</style>
        </>
    )
}