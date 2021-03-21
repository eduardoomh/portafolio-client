
export default function Avatar(props){
    const {imagen, width, height} = props;
    
    return(
        <>
            <img src={imagen} width={width} height={height} />
            <style jsx>{`
                img{
                    border-radius: 50%;
                    border: 5px solid white;
                    z-index: 10;
                }
            `}</style>
        </>
    )
}