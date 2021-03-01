import usePerfil from "../../hooks/usePerfil";

export default function CabeceraPerfil(){
    const {usuario} = usePerfil();

    return(
        <>
            <div className="cabecera">
                <div className="cabecera_perfil">
                    <img src={usuario.imagen} />
                    <h2>{usuario.nombres} <br/> {usuario.apellido_paterno} {usuario.apellido_materno}</h2>
                    <p>{usuario.apodo}</p>
                </div>
                
                <div className="cabecera_contenido">
                    <h1>BUEN DIA! <br /> SOY DESARROLLADOR WEB <br /> BIENVENIDO A MI PORTAFOLIO PERSONAL</h1>
                    <div>
                       <img src="https://media.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif"></img> 
                    </div>
                    
                    
                </div>
            </div>

            <style jsx>{`
                .cabecera{
                    display: grid;
                    grid-template-columns: 1.2fr 2fr;
                    grid-template-rows: 1fr;
                    min-height: 30rem;
                    padding: 4rem;
                    margin: 2rem 4rem;;
                    border: 1px solid #ECDEDE;
                    border-radius: 15px;
                    background-color: rgba(202, 202, 202, .1); 
                    font-family: Radley;
                }

                .cabecera_perfil{
                    margin: 2rem 3rem;
                    font-size: 1.2rem;
                    border-right: 2px solid #BCB1B1;
                }

                .cabecera_perfil p{
                    color: #814E4E;
                }
                .cabecera_perfil img{
                    width: 8rem;
                    height: 8rem;
                    border-radius: 50%;
                }

                .cabecera_perfil h2{
                    font-weight: normal;
                }

                .cabecera_contenido img{
                    height: 16rem;

                }

                .cabecera_contenido h1{
                    font-size: 1.9rem;
                    font-weight: normal;
                }

                .cabecera_contenido div{
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </>
    )
}