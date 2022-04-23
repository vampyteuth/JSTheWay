// Write a program that launches a carousel for 10 turns, 
//showing the turn number each time.
// When it's done, improve it so that the number of turns is given by the user.


for (i=0; i <= 10; i++) {
    console.log(i)
}

let userSayNumber = prompt("How many turns of the carousel should I make?")

for (i=0; i <= +userSayNumber; i++) {
    console.log(i)
}
