
export default function FotoPerfil(props){
    const {imagen, width, height} = props;
    
    return(
        <>
            <img src={imagen} width={width} height={height} />
            <style jsx>{`
                img{
                    border-radius: 50%;
                    border: 5px solid white;
                    z-index: 10;
                    animation-name: avatar;
                    animation-duration: 4s;
                    animation-iteration-count: infinite;
                    animation-direction: alternate-reverse;
                }


            @keyframes avatar {
                from {
                transform: scale(1.1,1.1);
                }
            }
            `}</style>
        </>
    )
}