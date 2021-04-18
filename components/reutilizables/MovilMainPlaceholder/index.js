import React from "react"
import ContentLoader from "react-content-loader"

const MovilLoader = (props) => (
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

export default MovilLoader