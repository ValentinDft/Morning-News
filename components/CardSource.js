import React, {useEffect} from 'react'
import styled from 'styled-components'
import Image from "next/image"

// Images
import logoGoogleNews from "../public/assets/Google_News_icon.png"
import logoLeMonde from "../public/assets/le-monde-logo.png"
import logoLequipe from "../public/assets/lequipe-logo.jpg"
import logoLesEchos from "../public/assets/les-echos-logo.png"
import logoLiberation from "../public/assets/liberation-logo.png"

export default function CardSource(props) {

  let clickSource = () => {
      console.log(props);
  }

  let urlImg;
  if (props.source.id === "google-news-fr") {
    urlImg = logoGoogleNews;
  } else if (props.source.id === "le-monde") {
    urlImg = logoLeMonde;
  } else if (props.source.id === "lequipe") {
    urlImg = logoLequipe;
  } else if (props.source.id === "les-echos") {
    urlImg = logoLesEchos;
  } else if (props.source.id === "liberation") {
    urlImg = logoLiberation;
  }

  return (
    <DivCardSource onClick={clickSource}>
      {/* <Image src={urlImg} placeholder="blur" width="120" height="60"/> */}
      
      
      <h4 style={{textAlign: "center"}}>{props.source.name}</h4>
      {/* <p>{source.id}</p>
      <p>{source.url}</p> */}
    </DivCardSource>
  )
}

const DivCardSource = styled.div`
  width: 30%;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.5s ease, color 0.8s ease, border-bottom 0.8s ease, width 1s ease;
  &:hover{
    transform: scale(1.05);
    color: #b69574;
    border-bottom: 3px solid #b69574;
    width: 50%;
  }
`;
