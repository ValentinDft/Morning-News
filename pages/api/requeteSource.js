require('dotenv').config()
export default async function handler(req, res) {

    let source = req.body;
    let requete = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${process.env.KEY_NEWS_API}`);
    let response = await requete.json();
    
  res.status(200).json(response)
}