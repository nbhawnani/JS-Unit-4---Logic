//condition statements using if else if else commands
let a=50, b=50.23;

if (a==b){
  console.log("a is equal to b")
}else if (a>b){
  console.log("a is greater than b")
  
}else{
  //a < b
  console.log("a is lesser than b")
}

// = is the assignment operator 
//Comparison operators
//>, >=, <, <=, ==, !=

// 0 results to a false
let num=0
if (num){
  console.log("A valid number")
}
else{
  console.log("0 results in a false condition")
}

//Using typeof in the condition
let a1="50"

if (typeof(a1)=="number"){
  console.log("a is a number")
}else{
  console.log("a is not a number")
}
/*
// "" empty string, null and undefined results in a false
// all other values result in a true
let strA="jghfhgdhhdh"
if (strA){
  alert(strA,"condition is true")
}
else{
  alert(strA,"condition is false")
}
*/

//strict equal comparison === checks for equality in data type as well as value
let num2="100"

if (num2===100){
  console.log("data type and values match")
}
else{
  console.log("Data type and values both do not match")
}

//compound statements using logical operators &&, ||, !
// && - requires all sub conditions to be true
// || - requires only 1 of the sub conditions to be true
// ! - reverses the value of the condition

let boolRainy=false
let intTemp=70

if (boolRainy && intTemp>=75){
  console.log("Let's stay indoors")
}else if( !boolRainy && intTemp>=75){
  console.log("Let's go out")
}else{
  console.log("Its cold!")
}

if (!boolRainy || intTemp>=75){
  console.log("Either ways let's go out")
}


