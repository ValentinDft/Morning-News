import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid';

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

      <div>
        <h1>Les journaux</h1>

        {props.dataSource.map(source => {
          return(
            <div key={uuidv4()}>
              <p>{source.name}</p>
              <p>{source.description}</p>
              <p>{source.id}</p>
              <p>{source.url}</p>
            </div>
          )
        })}
      </div>
     
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
