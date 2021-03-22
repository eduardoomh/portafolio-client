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
                        justify-content: flex-end;
                        align-items: center;
                        text-align: center;
                        margin-top: 5px;
                    }


                div h1{
                    color: #3C3838;
                    font-family: 'Noto Sans', sans-serif;
                }

                div p{
                    font-size: 1rem;
                }

                



            `}</style>
        </>
    )
}