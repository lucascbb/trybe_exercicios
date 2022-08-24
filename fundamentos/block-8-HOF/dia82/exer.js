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

//Exercicio 1
// const authorBornIn1947 = (ano) => books.find((primeiraPessoa) => primeiraPessoa.author.birthYear === ano ).author.name;
// console.log(authorBornIn1947(1947));

//Exercicio 2

  // escreva aqui o seu código

//Exercicio 3
const getNamedBook = () => books.find((nomeLivro26) => nomeLivro26.name.length === 26).name
console.log(getNamedBook());

// //Exercicio 4
// books.sort((a, b) => a.releaseYear - b.releaseYear);
// console.log(books)

//Exercicio 5
// const everyoneWasBornOnSecXX = () => books.every((nascimento) => 
// {return nascimento.author.birthYear >= 1901 && nascimento.author.birthYear <= 2000});
//   console.log(everyoneWasBornOnSecXX());