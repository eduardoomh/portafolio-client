import css from "styled-jsx/css";

const styles = css`
    div{
        display: grid; 


        main{
            padding-top: 3rem;
            min-height: 100vh;
           

            .loading{
                flex-direction: column;
                justify-content: flex-start;
                min-height: 100vh;
                max-height: 120vh;
                min-width: 100vw;
                max-width: 100vw;
                text-align: center;
                padding: 1rem;


            }
        }

        .navegacion{
            height: 3.8rem;
            width: 100vw;
            background-color: var(--primary);
            position: fixed;
            z-index: 40;
        }


        
    }


    @media (min-width: 800px){
        div{
            main{
                margin: auto;

                .loading{
                    flex-direction: column;
                    justify-content: flex-start;
                    min-width: 1000px;
                    max-width: 1000px;

                }
            }
        }
    }

    @media (min-width: 1000px){
        div{
            main{
                width: 1000px;
            }
        }
    }
`;

export default styles;

export const lightVariables = css.global`
:root{
   --primary: #0d1117;
   --secondary: linear-gradient(to left, #d0ffae, #94f1d5a1);
   --secondary: #06FFB4;
   --tertiary: #274873; 
   --fourth: #A9EDFC;
   --fifth: #5493DC;
   --text: #171717;
   --text-alternative: white;
   --border: #DFDFDF;
   --background: #FAFBFD;
   --background-page: #62ffd0;
   --gradient: linear-gradient(41deg, var(--background-page), #03ffce00);

}

.styles-img{
    border-radius: 50%;
    border: 8px solid white !important;
    transition: transform .3s;
    animation-name: imagen;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
}

.img-circle{
     border-radius: 50%;
}

.img-margin{
    margin-right: .5rem !important;
    margin-left: .5rem !important;
}

@keyframes imagen {
    from{
        transform: scale(.8,.8);
    }
    to{
        transform: scale(1,1);
    }
}
`;

export const darkVariables = css.global`
:root{
    --primary: #0d1117;
   --secondary: linear-gradient(to left, #d0ffae, #94f1d5a1);
   --secondary: #06FFB4;
   --tertiary: #274873; 
   --fourth: #A9EDFC;
   --fifth: #5493DC;
   --text: #171717;
   --text-alternative: white;
   --border: #DFDFDF;
   --background: #FAFBFD;
   --background-page: #62ffd0;
   --gradient: linear-gradient(41deg, var(--background-page), #03ffce00);
}
`;