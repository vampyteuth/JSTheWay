
// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

let num1 = prompt("enter the first number")
let num2 = prompt("enter the second number")

if (num1>num2){
    console.log(`${num1} is larger than ${num2}`)
}else if(num1===num2){
    console.log(`${num1} is equal to ${num2}`)
}else{
    console.log(`${num1} is less than ${num2}`)
}
