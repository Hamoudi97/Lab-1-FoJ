//Declare and Use Variables

const StudentName = "Ahmed"; //A variable named studentName and assign it a string value.
let StudentAge = 27; //A variable named studentAge and assign it a numeric value.
let isEnrolled = true; //A variable named isEnrolled and assign it a boolean value.

console.log(`My name is ${StudentName} and I am ${StudentAge} years old. I am enrolled in the Fundamentals of Java Script course. Below is my enrollment status.`); //Log these variables to the console.
console.log(isEnrolled);


//Create and log examples for all five basic JavaScript data types:

let FirstHobby = "videogames";
var SecondHobby = 'working out';
let ThirdHobby = "eating out";

console.log(`I like playing ${FirstHobby}, ${SecondHobby} and ${ThirdHobby} at different restaurants. `); //String: A text value.

let MyHeight = 176;

console.log(`I am approx. ${MyHeight} centimeters tall.`); //Number: An integer or floating-point number.

let Hunger = true;
let Satiated = false;

console.log(Hunger);
console.log(Satiated); //Boolean: true or false.

let FavouriteVideoGames = ['GTA 5', 'Destiny 2', 'PUBG'];
FavouriteVideoGames.push('FIFA');
console.log(FavouriteVideoGames[0]);
console.log(FavouriteVideoGames);
FavouriteVideoGames.pop([3])
console.log(FavouriteVideoGames[3]); //Array: A collection of values (e.g., ["apple", "banana", "cherry"]).

let Friend1 = {
    Name: 'Moiz',
    Age: 27,
    Gender: 'Male'
};

console.log(Friend1); //Object: An entity with properties (e.g., { firstName: "John", lastName: "Doe" }).

let x=5;
let y=10;


console.log(x+y-5);
console.log(y*x);
console.log(y/x);

console.log(20>y);
console.log(y<x);
console.log(y===10);
console.log(x!=y);

let a=true;
let b=false;

console.log(a && a);
console.log(a || b);
console.log(!!!b);








