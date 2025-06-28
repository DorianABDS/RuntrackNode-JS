import { URL } from 'url';

const urlString = "https://www.google.com/search?query=nodejs";
const parsedUrl = new URL(urlString);

console.log("Protocole :", parsedUrl.protocol);
console.log("Nom d'hôte :", parsedUrl.hostname);
console.log("Paramètres :", parsedUrl.searchParams.toString());

parsedUrl.hostname = "www.laplateforme.io";
parsedUrl.searchParams.append("lang", "fr");

console.log("Nouvelle URL :", parsedUrl.toString());
