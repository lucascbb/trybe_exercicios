// FILTER
const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const filtered = objPeople.filter((pessoa) => pessoa.age >= 18);
console.log(filtered);



// MAP 
const numbers = [19, 22, 23, 32, 15];

const mapeamento = numbers.map((element) =>{
  const criaObjeto = {};
  criaObjeto.Idade = element;
  criaObjeto.Sexo = 'Masculino';
  criaObjeto.Status = 'Empregado';
  return criaObjeto;
})
console.log(mapeamento)