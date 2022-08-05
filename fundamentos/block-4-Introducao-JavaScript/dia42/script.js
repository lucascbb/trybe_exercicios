//Exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let valores of numbers) {console.log(valores)};



//Exercicio 2
let soma = 0;

for(let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];

} console.log(soma);



// Exercicio 3
let sum = 0;
for(let index = 0; index < numbers.length; index += 1) {
  sum = sum + numbers[index];
} console.log(sum / numbers.length);



// Exercicio 4
// let sum = 27.8
if(sum > 20){
  console.log("valor maior que 20")
} else {console.log("valor menor ou igual que 20")}



// Exercicio 5
console.log(Math.max(...numbers));



// Exercicio 6
let result = 0;

for(let index = 0; index < numbers.length; index += 1)

{
  if (numbers[index] % 2 === 1) 
  {(result += 1)}
}

if(result > 0){console.log("Existe "+result+" numeros impares nesse array." )}
else{console.log("Nenhum valor impar encontrado")}



// Exercicio 7
console.log(Math.min(...numbers));



// Exercicio 8
numbers.push(10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 99, 101, 22, 98);
let resultado = 0;

for(let index = 0; index < numbers.length; index += 1){
    resultado += numbers[index];}
    console.log(resultado)



// Exercicio 9
numbers.push(10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 99, 101, 22, 98);

for(let index = 0; index < numbers.length; index += 1){
   console.log(numbers[index] / 2);}
  


// BONUS
//Exercicio 1
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numeros.sort((a, b) => a - b);
console.log(numeros)



//Exercicio 2
numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numeros1 = [];
numeros.forEach(element => {
numeros1.unshift(element) 
console.log(numeros1);
});

