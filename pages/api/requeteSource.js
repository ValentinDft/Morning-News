// Requete source des journaux
require('dotenv').config()
export default async function handler(req, res) {
  let requete = await fetch(`https://newsapi.org/v2/sources?language=fr&country=fr&apiKey=${process.env.KEY_NEWS_API}`);
  let response = await requete.json();

  res.status(200).json( response )
}
