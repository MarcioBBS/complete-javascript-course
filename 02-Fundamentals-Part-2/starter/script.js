'use strict';

let driver = false;
const passTest = true;

//if (passTest) drivera = true; // Error: The drivera is not defined.

//let interface = 234234; // Error: Future syntax


// Playing with Callback functions.
const catSays = function (max) {
    let catMessage = "";

    for (let i = 0; i < max; i++) {
        catMessage += 'meow';
    }

    return catMessage;
};

function helloCat(callbackFunc) {

    console.log("hello " + callbackFunc(3));

}

//helloCat(catSays);


// Function Expression
const calcAge = function (birthYear) {
    return 2020 - birthYear;
};


// Arrow functions
const calcAgeArrow = birthYear => 2020 - birthYear;

// console.log(calcAge(1979));
// console.log(calcAgeArrow(1979));

const retire = (name, birthYear) => {
    let age = calcAge(birthYear);
    const retirement = 65 - age; // considering the US retirement is 65 years old.

    return `${name} you need to work more ${retirement} years until you get retired! 👍`;
}

// console.log(retire('Leah', 1982));


// Code chanlendge #1

let CreateTeam = function (name, score1, score2, score3) {
    this.name = name;
    this.score1 = score1;
    this.score2 = score2;
    this.score3 = score3;
    this.average = calcAverage(this.score1, this.score2, this.score3);
}

CreateTeam.prototype.totalScore = function () {
    return this.score1 + this.score2 + this.score3;
}

let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


let checkWinner = (team1, team2) => {

    if (team1.average > team2.average * 2) {
        return console.log(`🐬  ${team1.name} won (${team1.totalScore()} x ${team2.totalScore()}) 🏆`);

    } else if (team2.average > team1.average * 2) {
        return console.log(`🐨 ${team2.name} won (${team2.totalScore()} x ${team1.totalScore()}) 🏆`);
    } else {
        return console.log(`There's no winner at this game 🤷‍♂️`);
    }

}

let Dolphins = new CreateTeam('Dolphins', 44, 23, 71);
let Koalas = new CreateTeam('Koalas', 65, 54, 49);

let DolphinsD2 = new CreateTeam('Dolphins_D2', 85, 54, 41);
let KoalasD2 = new CreateTeam('Koalas_D2', 23, 34, 27);

// checkWinner(Dolphins, Koalas);
// checkWinner(DolphinsD2, KoalasD2);

// END --- Code chanlendge #1




// BEGIN - Arrays
let numbers = [7, 9, 6, 8];

// ADD elements
numbers.push(5); // Adds item on the end of the array
// console.log(numbers);

numbers.unshift(2);
// console.log(numbers); // Adds item on the begin of the array

// Remove elements
numbers.pop(); // It removes item on the end of the array
// console.log(numbers);

numbers.shift(); // It removes item on the begin of the array
// console.log(numbers);

// Other usefull Arrays methods
// indexOF
// console.log(numbers.indexOf(6)); // It returns 2. Postion 2
// console.log(numbers.indexOf(999)); // If the element is not in the array then, the method returns -1


//includes - it returns a boolean
// console.log(numbers.includes(6)); // True;
// console.log(numbers.includes(999)); // False



// Code chanlendge #2

let bills = [125, 555, 44];
let calcTip = bill => (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);
let tips = bills.map(el => calcTip(el));
// console.log(tips);

let total = bills.map((el, index) => el + tips[index]);
// console.log(total);

// END --- Code chanlendge #2

// BEGIN - Objects Dot x Bracket notation

const pessoa = {
    firstName: 'Marcio',
    lastName: 'Braz',
    age: 2020 - 1979,
    job: 'software engineer',
    family: ['Leah', 'Julian', 'Pam', 'Gary']
};


// Dot notation: It's more "clean" to use.
//console.log(pessoa.firstName);


// Brackets notation: We can use expressions here
let keyName = 'Name';
// console.log(pessoa['first' + keyName]);
// console.log(pessoa['last' + keyName]);

//const interestedIn = prompt('What do you want to know about this person?');

// if (pessoa[interestedIn]) {
//     console.log(pessoa[interestedIn]);

// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and family');
// }

// How to add properties to the object?

pessoa.gender = 'male'; // Using Dot notation
pessoa['city'] = 'Torrancee';

// console.log(pessoa);

// Challendege: Build the follow text based on the peson object:
// "Marcio has 4 persons in his family, and his son is Julian"
// const inputSonName = prompt(`What's your son's name?`);
// const getPersonSon = pessoa.family.map(el => el == inputSonName ? inputSonName : 'You don not have a son!');


// console.log(`${pessoa['first' + keyName]} has ${pessoa.family.length} people in his family, and his son is ${pessoa.family[1]}`);

// END - Objects Dot x Bracket notation

// BEGIN - Object Methods

const person = {
    firstName: 'Marcio',
    lastName: 'Braz',
    birthYear: 1979,
    job: 'software engineer',
    family: ['Leah', 'Julian', 'Pam', 'Gary'],
    hasDriveLicense: false,

    calcAge: function () {
        this.age = 2020 - this.birthYear;
        return this.age;
    },

    // Marcio is 41 years old, software engineer and he has (or not) a driver's license
    // buildString: function () {
    //     return this.hasDriveLicense ? `${this.firstName} is ${this.calcAge()} years old, ${this.job} and he has a driver's license` : `${this.firstName} is ${this.calcAge()} years old, ${this.job} and he has not a driver's license`
    // }

    buildString: function () {
        return `${this.firstName} is ${this.calcAge()} years old, ${this.job} and he has ${this.hasDriveLicense ? 'a' : 'not a'} driver's license`;
    }
};

// console.log(person.buildString());


//Testing typeof
/*
console.log(typeof person.hasDriveLicense);
console.log(typeof person.birthYear);
console.log(typeof person.firstName);
console.log(typeof person.family); // Array is an object
*/

// END - Object Methods



// Array's print it backwards!!!
let numbersArray = [1, 2, 3, 4, 5];

//Add number in the begin
numbersArray.unshift(0);
//Add number in the end
numbersArray.push(6)
//Remve number in the begin
numbersArray.shift();
//Remve number in the end
numbersArray.pop();
//console.log(numbersArray);


for (let i = numbersArray.length - 1; i >= 0; i--) {
    //console.log(i);
}



/*  *** Multi Dimentional Array's ***
Build the following structure:
Exercise 1 Set 1
Exercise 1 Set 2
Exercise 1 Set 3

Exercise 2 Set 1
Exercise 2 Set 2
Exercise 2 Set 3

Exercise 3 Set 1
Exercise 3 Set 2
Exercise 3 Set 3
*/

/*
for (let i = 1; i <= 3; i++) {

    console.log(`------------> Starting exercise ${i} 🏋️‍♂️`);

    for (let j = 1; j <= 3; j++) {
        console.log(`Exercise ${i} Set ${j}`);
    }

    console.log('');
}
*/

// Code chanlendge #4
let bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let calcTip2 = bill => (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);
let tips2 = bills2.map(el => calcTip2(el));
// console.log(tips2);
let total2 = bills2.map((el, index) => el + tips2[index]);

console.log(total2);
console.log('-----');


let calcAverage2 = arr => {
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
        average += arr[i];
    }


    return average / arr.length;
}

let res = calcAverage2(total2);

console.log(res);
// END --- Code chanlendge #4