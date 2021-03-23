export default function Estilos(){
    return(
        <style jsx>{`
            .presentacion{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 1rem;
                margin-top: 1rem;

            }

            .presentacion p{
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-family: 'Spectral';

                font-size: 1.2rem;
            }

            #flecha{
                animation-duration: 1s;
                animation-iteration-count: infinite;
                animation-direction: alternate-reverse;
                animation-name: flecha;
            }

            @keyframes flecha {
                from {
                  transform: translatey(20px);
                }
            }


        `}</style>
    )
}