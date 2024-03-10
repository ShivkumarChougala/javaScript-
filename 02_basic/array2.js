// learn how to combined two array we csn use may prototype but we some usefull


const marvelHeroes = ["Hulk","ironMAn","Thor"]
const duHeroes = ["superman","Batman"]

// const newArry = marvelHeroes.concat(duHeroes)
// console.log(newArry);  // [ 'Hulk', 'ironMAn', 'Thor', 'superman', 'Batman' ]


const anotherArry = [...marvelHeroes,...duHeroes]  // this method is called spread 

console.log(anotherArry); // [ 'Hulk', 'ironMAn', 'Thor', 'superman', 'Batman' ]

// of nd from used to convert into array
const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));  // [ 100, 200, 300 ]

