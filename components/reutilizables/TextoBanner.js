export default function TextoBanner(props){
    const {texto, texto_secundario, descripcion = false} = props;

    return( 
        <>
            <div>
                <h1>{texto} <br/>{texto_secundario && texto_secundario}</h1>
                <p>{descripcion}</p>
            </div>

            <style jsx>{`
                div{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        margin-top: 5px;
                    }


                div h1{
                    color: #3C3838;
                }

                div p{
                    font-size: 1rem;
                }

            `}</style>
        </>
    )
}