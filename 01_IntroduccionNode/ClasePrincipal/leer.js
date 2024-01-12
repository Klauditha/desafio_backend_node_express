const fs = require('fs');

const tareas = fs.readFileSync('./tareas.txt', 'utf-8');

console.log(tareas);

const person = fs.readFileSync('./person.json', 'utf-8');

console.log(JSON.parse(person));