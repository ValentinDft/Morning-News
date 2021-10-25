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
    
      
      <ContainerListSource>
        <h1 style={{textAlign: "center", color: "#ffeaa7"}}>Les Journaux</h1>
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
  let requete = await fetch("https://morning-news.valentinduffet.fr/api/requeteListSource");
  let response = await requete.json();

  return {
      props: {
        dataSource : response.sources
      }
  }
}

const ContainerListSource = styled.div`
  background: #2d3436;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2%;
  padding-top: 2%;
`;






