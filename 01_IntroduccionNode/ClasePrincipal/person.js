const fs = require('fs');

const person = [
  {
    name: 'Cristian',
    age: 25,
  },
  {
    name: 'Cristina',
    age: 26,
  },
  {
    name: 'Juan',
    age: 27,
  },
];


fs.writeFileSync('./person.json', JSON.stringify(person));

