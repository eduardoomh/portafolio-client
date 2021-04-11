export default function Suspense(props){
    const {children, data} = props;
    console.log("intersectado");

    return(
        <>
            <div ref={data.ref} className={data.show ? "" : "loading"}>
                {
                    data.show && children
                }
            </div>
            <style jsx>{`
                div{
                    min-height: 10rem;
                }

                .loading{
                    min-height: 50rem;
                }
                `}</style>
        </>
        
    )
}