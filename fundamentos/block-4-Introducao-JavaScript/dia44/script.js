//Exercicio 1
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
        name: 'Marta',
        lastName: 'Silva',
        age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
        bestInTheWorld:[ 2006, 2007, 2008, 2009, 2010, 2018 ]
      
}
//Exercicio 2
console.log(player.name + player.lastName + player['age'])

//Exercicio 3
console.log(player.bestInTheWorld.length)

//Exercicio 4
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.")

//Exercicio 5
console.log("A jogadora possui "+ player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata")



//Para fixar
//Exercicio 1

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let index in names) {
    console.log("Ola, "+ names[index]);
  }

//Exercicio 2
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for(let index in car){
    console.log(index + ": "+ car[index]);
}


//FUNCTION

let statusDoCarro = "Desligado";

function ligardDesligar(){
    if(statusDoCarro === "Ligado"){
        statusDoCarro = "Ligado"
    } else {
        statusDoCarro = "Desligado";
    } return statusDoCarro
}  console.log(statusDoCarro)

//-----------------------------------------------

let aceleracao = 0;

function acelerar(parametro){

    aceleracao = aceleracao + parametro;
    return "Acelerando a " + aceleracao;
} console.log(acelerar(10))


//-----------------------------------
let freio = -10;

function frear(param1){
    aceleracao = freio + param1
    return "Freando em " + aceleracao;
}   console.log(frear(-20))


//--------------------------------------
let volante = 0

function girarVolante(anguloRotacao) {
        volante = volante + anguloRotacao
        return "Volante ta " + volante + graus;
}   console.log(girarVolante(45))


//--------------------------------------


function corDoCarro(param){
        cor = param
        
        return "A cor do carro eh " + cor;

}       console.log(corDoCarro("azul"))

//Parte 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log("Boas vindas "+ info.personagem)

  info.recorrente= "sim";
  console.log(info.recorrente)

  //Exercicio 6
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  }; 
  
  
  console.log("o livro de " + leitor.nome + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo + '"')


  leitor.livrosFavoritos.push({  
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  },)

  console.log(leitor.livrosFavoritos[1].autor)
  console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favortitos.")
