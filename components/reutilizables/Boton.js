export default function Boton(props){
    const {children} = props;

    return(
        <>
            <button>
                {children}
            </button>
            <style jsx>{`
                button{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: Radley serif;
                    font-size: 1.5rem;
                    border-radius: 10px;
                    border: 1px solid #989898;
                    height: 3rem;
                    padding: 0 1rem;
                    background-color: transparent;
                }

                button:hover{
                    transition: background-color .3s;
                    background-color: rgba(202, 202, 202, .1);
                    cursor: pointer;
                }

                `}</style>
        </>
    )
}