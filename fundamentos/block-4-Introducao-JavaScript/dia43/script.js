//Exercicio 1
let x = 1;

for(let index = 1; index <= 10; index += 1){
    (x = x * index)
}console.log(x)


//Exercicio 2
let word = "tryber"
console.log(word.split("").reverse().join(""))

//Exercicio 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0]

for(let index = 0; index < array.length; index += 1){
    if(array[index].length > maior.length){
        maior = array[index];
    }
} console.log(maior);

let menor = array[0]

for(let index = 0; index < array.length; index += 1){
    if(array[index].length < menor.length){
        menor = array[index];
    }
} console.log(menor);

//Exercicio 4
// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores,
// ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne
// o maior número primo entre 2 e 50.
//2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47

let maiorNumero = 0;
let primo = 0;
let naoPrimo = 0;

for( let index = 6; index <= 50; index += 1){
if(index % 2 === 0 || index % 3 === 0 || index % 5 === 0 || index % 7 === 0){}
else {console.log(index)}
}

//Bonus
let aster = "*****"
let n = 5

let nova = n * aster
console.log(nova)