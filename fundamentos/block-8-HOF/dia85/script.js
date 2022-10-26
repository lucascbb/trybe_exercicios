
// Spread Operator ----------------------------------------------------

const specialFruit = ['uva', 'laranja', 'abacaxi'];
const additionalItens = ['melancia', 'limao', 'mamao'];

const fruitSalad = (fruit, additional) => {
   const fruta = [...fruit, ...additional];
   return fruta
};
console.log(fruitSalad(specialFruit, additionalItens));


// Parâmetro Rest ------------------------------------------------------
// Sua função é muito mais flexível quando queremos passar múltiplos
// parâmetros com o rest pois você não precisa especificar quantos
// argumentos a função irá receber!

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88


// Object Destructuring ------------------------------------------------

const user = {
  nome: 'Maria',
  age: 21,
  nationality: 'brasileira',
};

const {nome, age, nationality} = user
console.log(`A ${nome} tem ${age} anos de idade
e sua nacionalidade eh ${nationality}`);
;

const character = {
  nome: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  }
}

const{description: {specieName: specie}, description:{jedi: vdd}} = character
console.log(specie, vdd);


// Array Destructuring ------------------------------------------------

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [br, jp, ch, ca] = arrayCountries;

console.log(br); // Brazil
console.log(jp); // Japan
console.log(ch); // China
console.log(ca); // Canada

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]);

const [oi] = saudacoes;
console.log(oi);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
console.log(comida, animal, bebida); 

[comida, animal, bebida] = [bebida, comida, animal]
console.log(comida, animal, bebida); 


// Default Destructuring -------------------------------------------------
// Se nao declaramos um valor pra variavel, ainda sim podemos colocar
// um padrao. Pra qnd nao for passado valor, vai ser sempre o valor que
// a gnt declarar no parametro
const personagem = ({ idade = 24, sexo= 'Feminino'}) => `Fulano tem ${idade} anos e eh do sexo ${sexo}`

const player1 = {
  idade: 22,
  sexo: 'Masculino'
}; console.log(personagem(player1));

const player2 = {
 //NADA
 //NADA
}; console.log(personagem(player2));


// Object Property Shorthand -----------------------------------------------
// Dessa maneira o valor passado no console.log ja atribiu a chave
// antes do valor passado (R: {id: 54, name: 'isabella'})
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};
console.log(newUser(54, 'isabella', 'isabella@email.com'));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
}); console.log(getPosition(-19.8157, -43.9542));


// Default Parameters -------------------------------------------------------
// Dessa maneira mesmo que nao seja passado o valor USER
// Podemos atribuir um valor direto antes (user = 'Usuario')

const greeting = (user = 'Usuario') => console.log(`Welcome ${user}!`);
greeting(); 

const multiply = (number, value = 10) => {
   return number * value;
};

console.log(multiply(8));