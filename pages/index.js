import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'

// Components
import Header from '../components/Header'

export default function Home(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Morning News</title>
      </Head>

      <Header/>

    
        <h1 style={{textAlign: "center"}}>Les Journaux</h1>
        <ContainerListSource>
          {props.dataSource.map(source => {
            return(
              <CardSource key={uuidv4()}>
                <h4>{source.name}</h4>
                {/* <p>{source.id}</p>
                <p>{source.url}</p> */}
              </CardSource>
            )
          })}
        </ContainerListSource>

      

      
      
      
     
    </>
  )
}

export async function getStaticProps(){
  let requete = await fetch("http://localhost:3000/api/requeteSource");
  let response = await requete.json();

  return {
      props: {
        dataSource : response.sources
      }
  }
}

const ContainerListSource = styled.div`
    display: grid;
    grid-template-rows: auto;
    row-gap: 10px;
  margin-bottom: 2%;
  margin-top: 2%;
`;

const CardSource = styled.div`
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




