export default function Suspense(props){
    const {children, data, size} = props;
    console.log("intersectado");

    return(
        <>
            <div ref={data.ref}>
                {
                    data.show && children
                }
            </div>
            <style jsx>{`
                div{
                    min-height: ${size}px;
                }

                `}</style>
        </>
        
    )
}