const fs = require('fs');

let data;

try {
  data = fs.readFileSync('./data.txt', 'utf8');
  console.log("Contenu du fichier data.txt: ", data);
} catch (err) {
  console.error(err);
}

function letterDivide(text) {
    const letters = text.split('');
    const filtered = letters.filter((_, index) => index % 2 === 0);
    return filtered.join(''); 
}

if (data) {
  const result = letterDivide(data);
  console.log("Le résultat est : ", result);
}
