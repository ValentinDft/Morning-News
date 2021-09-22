import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'

// Components
import Header from '../components/Header'
import CardSource from '../components/CardSource'

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
            <CardSource source={source} key={uuidv4()}/>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2%;
  margin-top: 2%;
`;






