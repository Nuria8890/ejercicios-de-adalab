"use strict";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Curso React.js", completed: false },
  { text: "Saltar a la comba", completed: false },
  { text: "Piscina", completed: true },
];

console.log(defaultTodos);
/*
0
: 
{text: 'Cortar cebolla', completed: true}
1
: 
{text: 'Curso React.js', completed: false}
2
: 
{text: 'Saltar a la comba', completed: false}
3
: 
{text: 'Piscina', completed: true}
*/

//  1. Convierto mi array en cadena de texto y lo guardo en una constante
const stringifyedTodos = JSON.stringify(defaultTodos);

console.log(stringifyedTodos); // [{"text":"Cortar cebolla","completed":true},{"text":"Curso React.js","completed":false},{"text":"Saltar a la comba","completed":false},{"text":"Piscina","completed":true}]

// 2. Guardo esa constante en localStorage
localStorage.setItem("defaultTodos", stringifyedTodos);

// 3. Recupero el valor guardado en localStorage y lo guardo en una constante
const getTodos = localStorage.getItem("defaultTodos");

console.log(getTodos); // [{"text":"Cortar cebolla","completed":true},{"text":"Curso React.js","completed":false},{"text":"Saltar a la comba","completed":false},{"text":"Piscina","completed":true}]

// 4. Convierto el valor recuperado en un array y lo guardo en una constante
const parseTodos = JSON.parse(getTodos);

console.log(parseTodos);
/*
0
: 
{text: 'Cortar cebolla', completed: true}
1
: 
{text: 'Curso React.js', completed: false}
2
: 
{text: 'Saltar a la comba', completed: false}
3
: 
{text: 'Piscina', completed: true}
*/
