// crear la tabla del 5 usando un boocle for*/

const fs = require('fs');

const base = 19;

const multiplicar = (base) => {
  let resultado = '';
  for (let i = 1; i <= 10; i++) {
    resultado += `${base} x ${i} = ${base * i}\n`;
  }
  return resultado;
};

//multiplicar(base);

//fs.writeFileSync(`./tabla-${base}.txt`, multiplicar(base));
//console.log(`Se creo el archivo tabla-${base}.txt`);

module.exports = multiplicar;
