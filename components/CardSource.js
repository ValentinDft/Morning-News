import React from 'react'
import styled from 'styled-components'

export default function CardSource(props) {

    let clickSource = () => {
        console.log(props);
    }

    return (
        <DivCardSource onClick={clickSource}>
            <h4>{props.source.name}</h4>
            {/* <p>{source.id}</p>
            <p>{source.url}</p> */}
        </DivCardSource>
    )
}

const DivCardSource = styled.div`
  width: 30%;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.5s ease, color 0.8s ease, border-bottom 0.8s ease, width 1s ease;
  &:hover{
    transform: scale(1.05);
    color: #b69574;
    border-bottom: 2px solid #b69574;
    width: 50%;
  }
`;
