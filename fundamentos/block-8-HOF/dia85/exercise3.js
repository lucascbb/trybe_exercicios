
const alex = {
  nome: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  nome: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({nome, age, likes}) => `${nome} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex)); 
console.log(personLikes(gunnar)); 