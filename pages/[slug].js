import { useRouter } from 'next/router'
import Head from 'next/head'

export default function News(props) {
    const router = useRouter();
    console.log(props);
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Source | {router.query.source}</title>
            </Head>
            <h1>{router.query.source}</h1>
        </>
    )
}

export async function getStaticProps(context){
    
    const contextSlug = context.params.slug;
    let dataSource = [];
    const requete = await fetch("http://localhost:3000/api/requeteSource", {
        method: "POST",
        body: JSON.stringify(contextSlug),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
    .then(data => dataSource = data.articles);

    return {
        props: {
            dataSource
        }
    }
}

export async function getStaticPaths(){
    const requete = await fetch("http://localhost:3000/api/requeteListSource");
    const response = await requete.json();

    // Récupération du name pour en faire des pages
    const paths = response.sources.map((item, i) => {
        return(
            {params: {slug: item.id}}
        )
    })

    return {
        // paths: [
        //     // dans l'objet params slug = le nom de la page défini entre crochet [slug].js
        //     {params: {slug: "words"}}
        // ],
        paths,
        //si dans l'url le chemin n'est pas défini juste au dessus return page 404
        fallback: false
    }
}
