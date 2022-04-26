
// Write a program that continues to ask the user for a number until the entered 
// number is less than or equal to 100.
let ask = prompt('Give me a number')

while (ask > 100){
    prompt('Give me a number',1)
}



// When you are done with the above, improve the program so that the terminating 
// number is between 50 and 100.


let ask = 56;

while (ask <100 && ask > 50) {
    ask = prompt('Give me a number',0)
}