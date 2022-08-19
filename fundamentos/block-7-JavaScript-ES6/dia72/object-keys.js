const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

const skill = (student) => {
    const array = Object.keys(student);
    for (const index in array) {
        console.log(`${array[index]}, Nivel: ${student[array[index]]}`)
    }
}
console.log('Estudante 1');
skill(student1);


const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
};


console.log(Object.keys(coolestTvShow)[0] + ': ' + Object.values(coolestTvShow)[0])
console.log(Object.keys(coolestTvShow)[1] + ': ' + Object.values(coolestTvShow)[1])
console.log((coolestTvShow).includes)