function showNumber (a, b) {
    return a + b
}

//showNumber();

console.log(showNumber(2, 3));
//passing a value; order matters


let greet = function (name) {
    console.log('hello person: ', name);
}


greet('Daria');
greet('Karolina');



//arrow fct

//let sayHi = () => {}

let sayHi = () => {
    console.log('Hi!');
}

sayHi();


/* let isPasswordCorrect = (userPWD) => {
    let correctPassword = '123456';

    if (correctPassword == userPWD) {
        console.log('Password is corect');
    } 
    else {
        console.log('Password is incorect');
    }
}; */

//isPasswordCorrect('123456')

//isPasswordCorrect(prompt());


//or
/* 
let userPWD = prompt('Please enter your password, dummy');
isPasswordCorrect(userPWD); 
*/

let checkEmailAndPassword = (email, password) => {
    const correctEmail = 'KW@easv.dk'
    const correctPassword = '123456'

    if (email == correctEmail && password == correctPassword) {
        console.log('login is correct')
    }
    else {
        console.log('login is incorect')
    }
}

checkEmailAndPassword('KW@easv.dk', '123456');



//agnostic function   (dependecies to work)
function calculateTotal (prices, taxRate, shippingCost) {
    //sum all prices
    let total = 0;
    for (let i = 0; i < itemPrices.length; i++) {
        //sum
        total = total + itemPrices[i]
        //or total += total;
    };
        //add tax
        total = total + total * tax;

        //SHIPPING
        total = total + shipping;

        return total
};


const itemPrices = [20, 5, 5]
const tax = 0.1
const shipping = 5

console.log(calculateTotal(itemPrices, tax, shipping));


let myString = "Hello World"
console.log(myString.toLocaleLowerCase());

let anotherNumber = 3.14156778969
console.log(anotherNumber.toFixed(5))

// to round up a no from decimal to number
console.log(Math.round(anotherNumber));


