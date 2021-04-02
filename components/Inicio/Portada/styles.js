import css from "styled-jsx/css";

const styles  = css`
    div{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 8rem 4rem 36rem;
        width: calc(100vw - 2rem);
        padding: 0 1rem;

        h1{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 32px;
            margin: 0;
        }

        span{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 1.4rem;
            font-weight: bold;
            color: #274873;
            margin: 0;
        }

        .user-parrafo, .user-frase{
            font-size: 1.2rem;
            font-family: "Spectral";

        }

        .user-frase{
            font-size: 1.8rem;
            font-weight: bold;
            text-align: center;
        }

        .user-data{
            border: 1px solid black;
            padding: 1rem;
            height: 36rem;
            border-radius: 15px;

            article{
                display: flex;
                flex-direction: column;
                background-color: #06FFB4;
                width: calc(100% - 2rem);
                min-height: 34rem;
                margin: 0;
                padding: 1rem 0;
                border-radius: 15px;

                .img-container{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: inherit;
                    height: inherit;
                    margin-right: 0 !important;
                    box-sizing: content-box;
                    height: 9rem;
              

                    img{
                        border-radius: 50%;
                        border: 4px solid white;
                    }

                    
                }

                p{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    font-size: 1.2rem;
                    font-weight: bold;
                    border-bottom: 1px solid black;
                    padding-bottom: .5rem;
                    margin-bottom: 0;
                    margin-left: 2rem;
                    margin-right: 2rem;

                    span{
                        padding: 0 .5rem;
                    }
       
                }

                #social-media{
                        border-bottom: none;
                    }

                .user-button{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 8rem;
                    margin: 0;
                    padding-right: 3rem;


                }
            }

        }


    }

    @media (min-width: 600px){
        div{
            grid-template-columns: .8fr 1fr;
            grid-template-rows: 7rem 3rem 10rem 15rem;
            max-width: 1000px;
            padding: 0;
            margin-top: 1rem;

            h1{
                align-items: flex-end;
                grid-column: 2/3;
                grid-row:1/2;
            }

            span{
                grid-column: 2/3;
                grid-row:2/3;  
            }

            .user-parrafo{
                grid-column: 2/3;
                grid-row:3/4;
            }

            .user-frase{
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                padding: 0;
                grid-column: 2/3;
                grid-row:4/5;
                text-align: left;
            }

            .user-data{
                grid-column: 1/2;
                grid-row:1/span 4;
                width: 24rem;
                height: 34rem;
                

                article{
                    width: 22rem;
                    max-height: 32rem;
                    min-height:32rem;
                    justify-content: space-between;
                    
                    p{
                        margin: 0 1rem;
                        font-size: 1rem;
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
        }
    }
`;

export default styles;