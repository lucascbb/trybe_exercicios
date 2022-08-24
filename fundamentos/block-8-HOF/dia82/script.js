const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

emailListInData.forEach( (element) => { console.log(`O email ${element} esta cadastrado`)});

//--------------------------------------------------------------------------------------------------
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find ( (num) => num % 3 === 0 && num % 5 === 0)
console.log(findDivisibleBy3And5)


//--------------------------------------------------------------------------------------------------
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find ((cincoLetras) => cincoLetras.length === 5)
console.log(findNameWithFiveLetters);

//--------------------------------------------------------------------------------------------------
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = musicas.find ((id) => id.id === '31031685')
console.log(findMusic);

//--------------------------------------------------------------------------------------------------
const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => { return arr.some((nome) => nome === name); };
console.log(hasName(names2, 'Ana'))

//--------------------------------------------------------------------------------------------------

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const maiorIdade = (array, idade) => { return array.every((responsavel) => responsavel.age >= idade)};
console.log(maiorIdade(people, 18))

//----------------------------------------------------------------------------------------------------

people.sort((a, b) => { return a.age - b.age; });
console.log(people);

people.sort((a,b) => {return b.age - a.age})
console.log(people);