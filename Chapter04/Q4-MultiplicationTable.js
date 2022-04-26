// Write a program that asks the user for a number, then shows the multiplication table for this number.

let number = prompt('Enter a number to see its times table.')

for (let i=1; i<10; i++) {
    let product = number * i
console.table(`${number} * ${i} = ${product}`)
}


// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

let number = 10

while (number < 2 || number >9) {
    number = prompt('Enter a number to see its times table.')
}
for (let i=1; i<10; i++) {
    let product = number * i
console.table(`${number} * ${i} = ${product}`)
}