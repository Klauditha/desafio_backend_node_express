const fs = require('fs');
const multiplicar = require('./multiplicar');

let base = 4;
//multiplicar(base);

fs.writeFileSync(`./tabla-${base}.txt`, multiplicar(base));
console.log(`Se creo el archivo tabla-${base}.txt`);
