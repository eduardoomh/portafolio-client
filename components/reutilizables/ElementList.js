import ItemList from "./ItemList";

export default function ElementList(props){
    const {data, tipo} = props;
 
    return(
        <>
            <div> 
                <h2>Conocimientos {tipo}</h2>
                {
                    data?.map(d => (
                        <ItemList nombre={d.nombre} tecnologias={d.tecnologias} />
                    ))
                }
            </div>
            <style jsx>{`
                div{
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 6rem 1fr 1fr;
                    max-width: 100vw;
                    font-family: Radley;
                    gap: 2rem;
                    margin: 1rem;
                }

                h2{
                    font-size: 2.2rem;
                    font-weight: normal;
                    font-family: 'Noto Sans', sans-serif;
                    color: #3C3838;
                }


            `}</style>
        </>
    )
}