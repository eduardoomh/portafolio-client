import { useRouter } from "next/router";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import useEstilos from "../../hooks/useEstilos";
import { OBTENER_PROYECTO } from "../../graphql/querys/proyecto";
import CabeceraProyecto from "../../components/reutilizables/CabeceraProyecto";

export default function Proyecto() {
    const { query } = useRouter();
    const { estilos } = useEstilos();
    const { data } = useQuery(OBTENER_PROYECTO, {
        variables: {
            id: query.id
        }
    });

    console.log(data);

    return (
        <>
            <Head>
                <title>Jesus EMH - Proyecto</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <CabeceraProyecto
                    nombre={data?.obtenerProyecto.nombre || "cargando"}
                    descripcion={data?.obtenerProyecto.descripcion || "cargando"}
                    imagen={data?.obtenerProyecto.imagen || "cargando"}
                    ur={data?.obtenerProyecto.url || "cargando"}
                />
                <h2>Tecnologias Utilizadas</h2>
                <ul>
                    {
                        data?.obtenerProyecto?.tecnologias_principales?.map(t => (
                            <li><img src={t.imagen} alt={t.nombre} key={t.nombre} /></li>
                        ))
                    }
                    {
                        data?.obtenerProyecto?.tecnologias_secundarias?.map(t => (
                            <li><img src={t.imagen} alt={t.nombre} key={t.nombre} /></li>
                        ))
                    }
                </ul>
                <h2>Repositorios del Proyecto</h2>
                <div className="repositorios">
                    {
                        data?.obtenerProyecto.repositorios.map(r => (
                            <a href={`http://${r.url}`}>
                                <article key={r.nombre}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github" />
                                    <p>{r.nombre}</p>
                                </article>
                            </a>
                        ))
                    }
                </div>
                <h2>Datos mas detallados</h2>

                <ul className="detalles">
                    {
                        data?.obtenerProyecto.detalles.map(d => (
                            <li key={d.nombre}>{d.nombre}</li>
                        ))
                    }
                </ul>


            </>

            <style jsx>{`


                    h2{
                        margin: 3rem 4.5rem;
                        font-family: Radley;
                        font-size: 1.8rem;
                        font-weight: normal;
                    }

                    ul{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        list-style: none;
                        margin: 1rem 4rem;
                        gap: 1rem;
                    }

                    ul li img{
                        min-height: 6rem;
                        max-height: 6rem;
                        border: 1px solid ${estilos.colores.bordeGrisClaro};
                    }

                    .repositorios{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 1fr;
                        margin: 1rem 4rem;
                        gap: 1rem;
                        justify-content:center;
                    }

                    .repositorios article{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 1rem;
                        gap: 1rem;
                        background-color: ${estilos.colores.grisClaro};
                        border: 1px solid ${estilos.colores.bordeGrisClaro};
                        min-height: 7rem;
                        max-height: 7rem;
                        min-width: 32rem;
                        max-width: 32rem;
                    }

                    .repositorios article:hover{
                        transition: .3s;
                        background-color: ${estilos.colores.grisOscuro};
                        cursor: pointer;
                    }

                    .repositorios article p{
                        font-size: 1.3rem;
                        font-family: Radley;
                    }

                    .repositorios article img{
                        width: 4rem;
                    }

                    .detalles{
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;

                    }

                    .detalles li{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        padding: 1rem;
                        border: 1px solid ${estilos.colores.bordeGrisClaro};
                    }

        
                `}</style>
        </>
    )
}