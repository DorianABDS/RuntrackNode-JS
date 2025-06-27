 import fs from "fs";

const content = 'Je manipule les fichiers avec un module node !';

fs.writeFile('./data.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(('Fichier écrit avec succès'));
  }
})