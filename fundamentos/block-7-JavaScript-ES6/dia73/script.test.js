const { expect } = require('expect');
const sum = require('./script');

test('Verifica se a soma de 1 e 2 eh 3',() => {
    expect(sum(1,2)).toBe(3);

})