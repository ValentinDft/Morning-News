import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

// Images
// import logoGoogleNews from "../public/assets/Google_News_icon.png"
// import logoLeMonde from "../public/assets/le-monde-logo.png"
// import logoLequipe from "../public/assets/lequipe-logo.jpg"
// import logoLesEchos from "../public/assets/les-echos-logo.png"
// import logoLiberation from "../public/assets/liberation-logo.png"

export default function CardSource(props) {

  const router = useRouter();

  // let urlImg;
  // if (props.source.id === "google-news-fr") {
  //   urlImg = logoGoogleNews;
  // } else if (props.source.id === "le-monde") {
  //   urlImg = logoLeMonde;
  // } else if (props.source.id === "lequipe") {
  //   urlImg = logoLequipe;
  // } else if (props.source.id === "les-echos") {
  //   urlImg = logoLesEchos;
  // } else if (props.source.id === "liberation") {
  //   urlImg = logoLiberation;
  // }

  let clickSource = () => {
    router.push({
      pathname: `/${props.source.id}`,
      query: { source: props.source.name },
    });
  }

  return (
    <DivCardSource onClick={() => clickSource()}>
      {/* <Image src={urlImg} placeholder="blur" width="120" height="60"/> */}
      <h4 style={{textAlign: "center", color: "white"}}>{props.source.name}</h4>
    </DivCardSource>
  )
}

const DivCardSource = styled.div`
  width: 30%;
  border-bottom: 3px solid #636e72;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 1s ease, border-bottom 1s ease, width 1.5s ease;
  &:hover{
    transform: scale(1.05);
    border-bottom: 3px solid #ffeaa7;
    width: 40%;
  }
`;
