const fs = require('fs');

try {
  const data = fs.readFileSync('./data.txt', 'utf8');
  console.log("Contenu du fichier data.txt: ", data);
} catch (err) {
  console.error(err);
}
