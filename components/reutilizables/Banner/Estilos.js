export default function Estilos(){
    return(    
        <style jsx>{`
            .cabecera{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows:1.3fr 1fr;
                backdrop-filter: grayscale(0.5) opacity(0.8);
            }

            .cabecera_banner{
                background-image: url("https://media.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif");
                background-size: 100%;
                height: 12rem;
                background-repeat: no-repeat;
                z-index: 4;
            }

            .cabecera_banner .filtro{
                display: flex;
                justify-content: center;
                align-items: flex-end;
                min-height: 12rem;
                width: 100%;
                background-color: #4cd2e4;
                opacity: .2;
            }

            .cabecera_banner .avatar{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: -95px;
                
            }


            @media (max-width: 1085px) {

            }

            @media (max-width: 865px) {
    
            }
    `}</style>
    )
}