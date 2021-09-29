import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

// Icons
import { FaRegNewspaper } from "react-icons/fa";

export default function News(props) {

    const router = useRouter();
    
    return (
        <ContainerPage>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Morning News | {router.query.source}</title>
            </Head>

            <ContainerTitle>
                <h1>Morning News | {router.query.source}</h1>
            </ContainerTitle>
            
            <ContainerArticle>
                {props.dataSource.map((article) => {
                    return(
                        <CardArticle key={uuidv4()}> 
                            <div style={{minHeight: "120px",overflow: "hidden"}}>
                                <h4 style={{color: "#4F3E48", textAlign: "justify"}}>{article.title}</h4>
                            </div>

                            <img src={article.urlToImage} style={{width: 250, height: 150, objectFit: "cover", borderRadius: "10px"}}/>
                            
                            <div style={{minHeight: "200px",overflow: "hidden", display: "flex", alignItems: "center"}}>
                                <p style={{textAlign: "justify"}}>{article.description}</p>
                            </div>

                            <p style={{textAlign: "center"}}>{article.publishedAt}</p>

                            <LienSource>
                                <a href={article.url} target="_blank" style={{color: "black"}}>
                                    <Icon/>
                                </a>
                            </LienSource>
                            
                        </CardArticle>
                    )
                })}
            </ContainerArticle>
        </ContainerPage>
    )
}

const ContainerPage = styled.div`
    background: rgb(203,164,127);
background: linear-gradient(0deg, rgba(203,164,127,0.8130602582830007) 0%, rgba(236,230,224,1) 69%);
`;

const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0px;
`;

const ContainerArticle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-column-gap: 50px;
    justify-content: space-around;
`;

const CardArticle = styled.div`
background-color: white;
    border: 3px solid #BBA194;
    padding: 10px 20px;
    border-radius: 15px;
    margin-bottom: 15%;
    box-shadow: 15px 15px 15px rgb(0 0 0 / 30%), 0 0 25px rgb(0 0 0 / 50%);
    transition: box-shadow 0.5s ease, transform 0.8s ease;
    &:hover {
        box-shadow: 8px 8px 8px rgb(0 0 0 / 20%), 0 0 15px rgb(0 0 0 / 30%);
        transform: scale(0.98);
    }
`;

const LienSource = styled.div`
    display: flex;
    justify-content: center;
`;

const Icon = styled(FaRegNewspaper)`
    transform: scale(1.5);
    cursor: pointer;
    transition: all 0.8s ease;
    &:hover {
        transform: scale(1.8);
        color: #BBA194;
    }
`;

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
