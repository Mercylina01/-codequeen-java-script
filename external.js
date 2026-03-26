console.log("My name is Mercylina");

//Declaring variables
//Declaring variables we var,let,const
var name = "Mercylina";
console.log(name);
name = "Mercy";
console.log(name);
//number data type
let age = 25;
console.log(age);
age = 26;
console.log("My age has been changed ",age);

//const is used to declare a variable that cannot be reassigned
const country = "Kenya";
console.log(country);
//country = "Uganda"; // This will throw an error because we cannot reassign a const variable


//Data types in JavaScript
//String
let city = "Nairobi";
console.log(city);

//Bolean
let isStudent = true;
console.log(isStudent);

//null
let car = null;
console.log(car);

//undefined
let address;
console.log(address);

//Object
let person = {
    name: "Mercylina",
    age: 25,
    isStudent: true
};
console.log(person);

//array
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
console.log(fruits[0]); // Accessing the first element of the array
console.log(fruits.length); // Getting the length of the array

//symbol
const x = Symbol();


//CONDITIONAL STATEMENTS
//Alllows us to execute a block of code based on a condition

if(age > 18){
    console.log("You are an adult");
}

if(age<18){
    console.log("You are a minor");
}
else{
    console.log("Dont take wine");
}

//multiple conditions
let score = 85;
if (score >=90) {
    console.log("Grade A");
} else if(score >=80){
    console.log("Grade B");
}