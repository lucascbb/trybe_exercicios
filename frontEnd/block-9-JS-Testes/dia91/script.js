// linhaDeProducao.js

// setTimeout(() => {
//   console.log('Comprar parafusos'); // Comprar parafusos
//   console.log('Adicionar ao estoque'); // Adicionar ao estoque
// });

// console.log('1 - Receber roda'); // 1 - Receber roda
// console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// Saída:
// 1 - Receber roda
// 2 - Encaixar parafusos
// 3 - Fixar roda no carro
// Comprar parafusos
// Adicionar ao estoque

// pushNumberAsync.js

const pushNumber = (list, number) => list.push(number);

const numbers = [];

const THREE_SECONDS = 3000;

setTimeout(() => pushNumber(numbers, 1), 2);
setTimeout(() => pushNumber(numbers, 2), 1);
setTimeout(() => pushNumber(numbers, 3), 3);

setTimeout(() => console.log(numbers), THREE_SECONDS);

// Saída:
// [ 2, 3, 1 ]