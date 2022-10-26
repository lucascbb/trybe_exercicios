const numbers = [1, 2, 3, 4, 5];
const arrAys = [100, 'lucas', true]

//FOR EACH (para repetir todos os elementos de um array;)
arrAys.forEach( (element, index, array) => { 
  console.log(`${element}`)
  console.log(`${index}`);
  console.log(`${array}`);
});


// SOME (testar se ALGUM elemento de um array satisfaz a uma condição;)
const algum = () => numbers.some( (num) => num === 6 );
console.log(algum());


// EVERY (testar se TODOS os elementos de um array satisfazem a uma condição;)
const tudo = () => numbers.every( (num) => num > 3);
console.log(tudo());


// FIND (encontra o primeiro elemento de um array que satisfaça a uma condição;)
const primeiro = numbers.find( (num) => num > 3);
console.log(primeiro)


// SORT - STRING (ordena arrays de acordo com algum critério.)
const food = ['arroz', 'zebra', 'carne', 'queijo', 'batata'];
food.sort();
console.log(food);


// SORT - NUMBER (ordena arrays de acordo com algum critério.)
const menorPontos = [40, 100, 1, 5, 25, 10];
menorPontos.sort((a,b) => a-b);
console.log(menorPontos);

const maiorPontos = [40, 100, 1, 5, 25, 10];
maiorPontos.sort((a,b) => b-a);
console.log(maiorPontos);