//Exercicio 1.1
const myName = "Lucas";

//Exercicio 1.2
const birthCity = "Sao Paulo";

//Exercicio 1.3
let birthYear = 1998;
//1.5
birthYear = 2030;

//Exercicio 1.4
console.log(myName);
console.log(birthCity);
console.log(birthYear);
// outra opcao 
console.log(myName, birthCity, birthYear);

//----------------------------------------------------------------

// Exercicio 2.1
const base = 5
let height = 8

// Exercicio 2.2
const area = base * height;
console.log(area);

// Exercicio 2.3
const perimeter = (2* height) + (2* base);
console.log(perimeter);

//----------------------------------------------------------------

// Exercicio 3.1
const nota = 99;

// Exercicio 3.2
if(nota >= 80){
    console.log("Parabens, vc foi aprovado")
} else if( nota >= 60){
    console.log("Voce esta na lista de espera")
} else {
    console.log("voce foi reprovado")
}

//Exercicio 4.1
const hora = 16;

// Exercicio 4.2
let message;

// Exercicio 4.3 &&
if(hora >= 22){console.log("Não deveríamos comer agora")}
else if (hora >= 18){console.log("Vamos jantar")}
else if (hora >= 14){console.log("Bolo da tarde")}
else if(hora >= 11){console.log("Hora do almoco")}
else if (hora >= 4){console.log("Cafe da manha")}
else {console.log("Mto cedo")}

// Exercicio 4.4 ||
let day = "quarta-feira"

// Exercicio 4.5
if(day === "segunda-feira" || day === "terça-feira" || day === "quarta-feira" || day === "quinta-feira" || day === "sexta-feira"){
    console.log("Dia de Trybe")
} else {console.log("Eh fds")}


//AGORA VAMOS A PRATICA
//Exercicio 1
const a = 9
const b = 5

console.log(a +b)
console.log(a -b)
console.log(a *b)
console.log(a / b)
console.log(a % b)

//Exercicio 2
const a2 = 3
const b2 = 6

if(a2 > b2){console.log(a2)}
else if(a2 < b2){console.log(b2)}

// Exercicio 3
const a3 = 2
const b3 = 7
const c = 4

if(a3 > b3 && a3 > c){console.log(a3)}
else if(b3 > a3 && b3 > c){console.log(b3)}
else {console.log(c)};

// Exercicio 4
let param = 0

if(param > 0){console.log("Positive")}
else if(param < 0){console.log("Negative")}
else {console.log("Zero")}

// Exercicio 5
let atri = 80;
let btri = 40;
let ctri = 60;

if(atri + btri + ctri === 180){console.log(true)}
else if(atri < 0 || btri < 0 || ctri < 0){console.log("invalido: um ou mais angulos menor que zero")}
else{console.log("Erro no triangulo")}

// Exercicio 8
const x = 11
const y = 25
const z = 30

if (x % 2 === 0 || y % 2 === 0 || z % 2 === 0 ){console.log(true)}
else {console.log(false)}

// Exercicio 9
const x2 = 14
const y2 = 45
const z2 = 34

if (x2 % 2 === 1 || y2 % 2 === 1 || z2 % 2 === 1 ){console.log(true)}
else {console.log(false)}

// Exercicio 10
const salario = 10000;

if      (salario <= 1556.94){net = (salario) - salario * 0.08;} //8%
else if (salario <= 2594.92){net = (salario) - salario * 0.09;} //9%
else if (salario <= 5189.82){net = (salario) - salario * 0.11;} //11%
else                        {net = salario - 570.88;}


if     (net <= 1903.98){console.log(net * 1)}
else if(net <= 2826.65){console.log((net)-((net * 0.075)- 142.80))}
else if(net <= 3751.05){console.log((net)-((net * 0.150)- 354.80))}
else if(net <= 4664.68){console.log((net)-((net * 0.225)- 636.14))}
else                   {console.log((net)-((net * 0.275)- 869.36))}


//if (salary <= 1556.94) {aliquotINSS = salary * 0.08;

