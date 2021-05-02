import React from 'react'

export default function LoadingPage() {
    return (
        <>
            <div>
                <h1>ESTAMOS CARGANDO LA PAGINA</h1>
                <p>Por favor espera un momento</p>
            </div>
            <style jsx>{`
                div{
                    display: flex;
                    flex-direction: column;
                    width: 30rem;
                    margin: auto;

                    h1{
                        color: var(--primary);
                    }
                }
            `}</style>
        </>
    )
}
