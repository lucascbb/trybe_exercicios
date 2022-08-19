let nome = 'lucas'

console.log('Ola, ' + nome + '!');

console.log(`Ola, ${nome}!`)

console.log("-------------------------------")

let pessoa = {
    name: 'Mariana',
    sobrenome: 'Barboza',
    anoNascimento: 1998,
}

console.log(`Paciente: ${pessoa.name} ${pessoa.sobrenome} \nIdade: ${2022 - pessoa.anoNascimento}`)

console.log("-------------------------------")

const printName = function () {
    const myName = 'Robson';
    return myName;
  };
  console.log(printName());


 const print = (numero1, numero2) => numero1 + numero2;
 console.log(print(10, 30));
 console.log("-------------------------------")


// Exercicio 1

const factorial= (num) => {
    let resultado = 1;

    for (let index = 2; index <= num; index +=1) {
    resultado = resultado * index;
  } 
  
return resultado;
};
const print = factorial(4);
console.log(`${print}`);
























// Exercicio 4
function substituaX(param1){
const frase = 'Tryber x aqui!';
let res = frase.split(' ');
for (let i = 0; i < res.length; i+= 1) {
    if('x' == res[i]){res[i] = param1;}
} return res.join(' ');

} console.log(substituaX('bebeto'));



const minhasSkills = (func) => {

const skills = ['JavaScript', 'HTML', 'CSS'];
let result = "Minhas três principais habilidades são: " + skills


return result
}

console.log(minhasSkills(substituaX('Bebeto')));