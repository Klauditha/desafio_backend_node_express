const fs = require('fs');

const task = `
1. Ir al gym
2. Ir al cine
3. Ir al supermercado
4. Ir al parque
`

fs.writeFileSync('./tareas.txt', task);
console.log("Se creo el archivo tareas.txt");