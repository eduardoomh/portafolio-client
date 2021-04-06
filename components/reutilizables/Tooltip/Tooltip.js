import Popup from 'reactjs-popup';

export default function Tooltip(props){
    const {children, nombre, position, width = "8rem", height = "3.5rem"} = props;

    const contentStyle = { 
        background: '#3c3838', 
        width: width, 
        height: height, 
        padding: ".5rem", 
    };

    const overlayStyle = { 
        background: 'rgba(0,0,0,0.5)' 
    };

    const arrowStyle = { 
        color: '#3c3838' 
    };

    return(
        <>
            <Popup
                key={nombre}
                trigger={children}
                position={position}
                on={['hover', 'focus']}
                arrow='center center'
                {...{contentStyle, overlayStyle, arrowStyle }}
            >
            <p className="tooltip-imagen">{nombre}</p>
        </Popup>
        <style jsx>{`
            .tooltip-imagen{
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                padding: auto;
                margin: 0;
            }

            `}</style>
    </>
    )
}