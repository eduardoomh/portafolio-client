import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) =>{
    const {desktop = false} = props;

    return(
        <>
        {
            desktop ? (
                <ContentLoader 
                speed={2}
                width={1000}
                height={800}
                viewBox="0 0 1000 800"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                {...props}
              >
                <rect x="485" y="23" rx="3" ry="3" width="500" height="15" /> 
                <rect x="5" y="17" rx="0" ry="0" width="445" height="500" /> 
                <rect x="485" y="63" rx="3" ry="3" width="500" height="15" /> 
                <rect x="485" y="103" rx="3" ry="3" width="500" height="15" /> 
                <rect x="485" y="143" rx="3" ry="3" width="500" height="15" /> 
                <rect x="3" y="530" rx="3" ry="3" width="1000" height="15" /> 
                <rect x="485" y="183" rx="3" ry="3" width="500" height="15" /> 
                <rect x="485" y="223" rx="3" ry="3" width="500" height="15" /> 
                <rect x="485" y="263" rx="3" ry="3" width="500" height="15" /> 
                <rect x="485" y="303" rx="3" ry="3" width="500" height="15" /> 
                <rect x="485" y="343" rx="3" ry="3" width="500" height="15" /> 
                <rect x="485" y="383" rx="3" ry="3" width="500" height="15" /> 
                <rect x="485" y="423" rx="3" ry="3" width="500" height="15" /> 
                <rect x="485" y="463" rx="3" ry="3" width="500" height="15" /> 
                <rect x="5" y="570" rx="3" ry="3" width="1000" height="15" /> 
                <rect x="6" y="610" rx="3" ry="3" width="1000" height="15" /> 
                <rect x="7" y="650" rx="3" ry="3" width="1000" height="15" />
              </ContentLoader>
            ) : (
                
                <ContentLoader 
                    speed={2}
                    width={360}
                    height={500}
                    viewBox="0 0 360 500"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    {...props}
                >
                    <rect x="0" y="5" rx="3" ry="3" width="330" height="35" /> 
                    <rect x="0" y="55" rx="3" ry="3"  width="330" height="35" />
                    <rect x="0" y="100" rx="0" ry="0"  width="330" height="700" />
                    <rect x="0" y="1370" rx="3" ry="3"  width="330" height="35" />
                    <rect x="0" y="1420" rx="3" ry="3"  width="330" height="35" />
                    <rect x="0" y="1450" rx="3" ry="3"  width="330" height="35" />
                    <rect x="0" y="1490" rx="3" ry="3" width="330" height="35" />
                </ContentLoader>
                  
            )
        }
        </>


    )
} 
export default MyLoader