import Image from "next/image";
import MainBoton from "components/reutilizables/MainBoton";
import useUtils from "hooks/useUtils";
import useWindowSize from "hooks/useWindowSize";
import Tooltip from "components/reutilizables/Tooltip";
import RedesSociales from "components/reutilizables/RedesSociales";

export default function PerfilCard(props) {
    const { imagen, facebook, github, linkedin, telefono } = props;
    const { curriculum } = useUtils();
    const { width } = useWindowSize();

    return (
        <>
            <article>
                <div className="img-container">
                    <Tooltip
                        nombre="Hay que promover el uso del cubrebocas"
                        position="left center"
                        width="14rem"
                        height="5rem"
                    >
                        <span>
                            <Image
                                src={imagen}
                                width={width <= 600 ? 130 : 150}
                                height={width <= 600 ? 130 : 150}
                                alt="jesus mh"
                                className={"styles-img"}
                            />
                        </span>

                    </Tooltip>

                </div>
                <p>Ingeniero en Sistemas</p>
                <p>Desarrollador web</p>
                <p>23 años</p>
                <RedesSociales
                    facebook={facebook}
                    linkedin={linkedin}
                    github={github}
                    telefono={telefono}
                />
                <div className="user-button">
                    <MainBoton>
                        <a href={curriculum} target="_blank">
                            Curriculum
                    </a>
                    </MainBoton>
                </div>


            </article>
            <style jsx>{`
                article{
                    display: flex;
                    flex-direction: column;
                    background-color: var(--secondary);
                    width: 100%;
                    min-height: 34rem;
                    margin: 0;
                    padding: 1rem 0;
                    border-radius: 15px;
                    transition: opacity .3s;
                    animation-name: article;
                    animation-duration: 2s;
                    animation-timing-function: ease-in-out;
                    color: var(--primary);

                    .img-container{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: inherit;
                        height: inherit;
                        margin-right: 0 !important;
                        box-sizing: content-box;
                        height: 9rem;
                        
                    }

                    p{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 1.2rem;
                        font-weight: bold;
                        margin-bottom: 0;
                        margin-left: 2rem;
                        margin-right: 2rem;
                        padding: .5rem 0;
                        background-color: var(--secondary-hover);
                      
                    }

                    @keyframes article {
                      from{
                        opacity: 0.33;
                        backdrop-filter: blur(10px);
                      }
                      to{
                        opacity: 1;
                        backdrop-filter: none;
                      }
                    }


                    #social-media{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-bottom: none;
                        }

                    .user-button{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 8rem;
                        margin: 0;

                    }
                }

                .styles-img{
                            border-radius: 50%;
                            border: 4px solid white;
                            transition: transform .3s;
                            animation-name: imagen;
                            animation-duration: 2s;
                            animation-timing-function: ease-in-out;

                        }


                @media (min-width: 800px){
                    article{
                    width: 22rem;
                    max-height: 32rem;
                    min-height:32rem;
                    justify-content: space-between;
                    transition: transform .3s ease-in-out;

                    &:hover{
                        transform: translatex(10px);
                    }
                    
                    p{
                        margin: 0 1rem;
                        font-size: 1.2rem;
              
                    }


                    .user-button{
                        width: 22rem;
                        height: 4rem;
                        padding: 0;
                    }

                    .img-container{
                        height: 10rem;
                        
                        img{
                            border: 8px solid white;
                        }

                    }

                  
                }
                }
                `}</style>
        </>
    )
}