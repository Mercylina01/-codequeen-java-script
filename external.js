name = "Mercylina";
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
let numbers = [1 , 2, 3, 4, 5];
let mixedarray = ["Hello", 42, true, null];
console.log(mixedarray[2]); // Accessing the third element of the array
console.log(numbers[-1]); // Accessing the last element of the array
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
let scores = 85;
if (scores >=90) {
    console.log("Grade A");
} else if(scores >=80){
    console.log("Grade B");
}

// comparrison operators
// >    greater than
// <   less than
// >=   greater or equal
// <=   less or equal
// ==   equal (not strict)
// ===  strictly equal (BEST to use)
// !=  not equal


//logical operators
// &&  AND
if(age > 18 && age < 30){

    console.log("You are a young adult");
}

if(age <18 && isStudent){
    console.log("Eligible");

}

// || OR
//one must be true
if (age <18 || isStudent) {
    console.log("Discount applies");}


    //NOT operator
    //negates the condition
    if(!isStudent){
        console.log("You are not a student");
    }

    //Alevel grading system
    let score =  99;
    if(score>=90){
        console.log("Grade A"); 

    }else if(score>=80){
        console.log("Grade B");
    }
    else if(score>=70){
        console.log("Grade C");
    }  else if(score>=60){
        console.log("Grade D");
    }   else if(score>=50){
        console.log("Grade E");
    }
    else if(score>=40){
            console.log("Grade O");
    }   else{
        console.log("Grade F");
    }           