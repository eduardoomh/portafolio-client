import styles from "./styles";

export default function MainBoton({children}){
    return(
        <>
            <button>{children}</button>
            <style jsx>{styles}</style>
        </>
    )
}