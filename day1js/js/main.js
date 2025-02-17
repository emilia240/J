console.log('Test: ', 'Hello Mundo');


//data types

//string
let myString = 'Hello, world';
console.log('Exercise 1', myString);


//number
let myNumber = 10;
console.log('Exercise 2', myNumber);

//boolean
let myBoolean = true;
let isLoggedIn = false;


//object
let myObject = {
    allegiance: 'Rebel Alliance', 
    name: 'Yoda',
    age: 900,
    inStock: false
}


console.log('Exercise 3', myObject.name);


let recipes = [
    {
        imgURL: 'https://lorempicsum.photos/200/300',
        title: 'Tikka masala',
        description: 'bla bla',
        category: 'pasta',
        link: 'bla bla link',

        isVegan: false,
        time: 60
    },

    {
        imgURL: 'https://lorempicsum.photos/200/300',
        title: 'Tikka masala2',
        description: 'bla bla2',
        category: 'salad',
        link: 'bla bla link2',

        isVegan: true,
        time: 30
    }
]

console.log('Exercise 4', recipes);


//operators
let sum = 10 + 5;
console.log(sum);


//comparison;
let isEqual = (14 == 14);
console.log('Exercise 6', isEqual);



let number_one = 10;
let number_two = 20;
let totalSum = number_one + number_two;
 console.log(`the total sum of ${number_one} + ${number_two} is: ${totalSum}`);
//pay attention to template literals

 //if statement + for loop 
 let score = 71;
 if (score >= 90) {
    console.log("you pass the test with an A");
 }
 else if (score >= 80) {
    console.log("You passed the test with a B")
 }
 else {
    console.log("you failed the test");
 }


 //FOR LOOP
 for (let i = 0; i<6; i++) {
    console.log("number: ", i)
 }