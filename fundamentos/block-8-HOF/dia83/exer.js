const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//Exercicio 1

// const formatedBookNames = books.map((element) => element.name + ' - ' +element.genre + ' - ' + element.author.name)
// console.log(formatedBookNames)

//Exercicio 2

// const nameAndAge = books.map((element) =>{
//   const criaObjeto = {};
//   criaObjeto.Age = element.releaseYear - element.author.birthYear;
//   criaObjeto.Author = element.author.name;
//   return criaObjeto
// } )
// nameAndAge.sort((a, b) => a.Age -b.Age);
// console.log(nameAndAge);

//Exercicio 3
// const fantasyOrScienceFiction = books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')
// console.log(fantasyOrScienceFiction)

//Exercicio 4
// const livrosOrdered = books.filter((element) => 2022 - element.releaseYear >= 60);
// livrosOrdered.sort((a, b) => a.releaseYear - b.releaseYear);
// console.log(livrosOrdered)

//Exercicio 5
// const autores = books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')
// const fantasyOrScienceFictionAuthors = autores.map((element2) => element2.author.name)
// fantasyOrScienceFictionAuthors.sort()

// console.log(fantasyOrScienceFictionAuthors);

//Exercicio 6
// const livros = books.filter((element) => 2022 - element.releaseYear >= 60);
// const oldBooks = livros.map((element2)=> element2.name);
// console.log(oldBooks);

//Exercicio 7
const iniciais = books.filter((element) => 
element.author.name[1] === '.' &&
element.author.name[4] === '.' &&
element.author.name[7] === '.');
const expectedResult = iniciais.map((element) => element.name)
console.log(expectedResult)