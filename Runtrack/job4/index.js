const fs = require('fs');
const path = require('path');

const items = fs.readdirSync('.');

items.forEach(item => {
    if (fs.statSync(item).isFile()) {
        const content = fs.readFileSync(item, 'utf8');
        console.log(`--- Contenu de ${item} ---`);
        console.log(content);
        console.log('-------------------------\n');
    }
});
