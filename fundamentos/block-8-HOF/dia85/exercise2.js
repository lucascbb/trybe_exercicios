const sum = (a,b,c) => a + b + c;
console.log(sum(4,5,6))


const suma = (...args) => args.reduce((accumulator, current) => 
accumulator + current, 0);
console.log(suma(4, 7, 8, 9, 60));