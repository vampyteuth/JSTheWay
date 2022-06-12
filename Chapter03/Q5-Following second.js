// Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). 
// The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

// This is not as simple as it seems... Look at the following results to see for yourself:

// 14h17m59s => 14h18m0s
// 6h59m59s => 7h0m0s
// 23h59m59s => 0h0m0s (midnight)


let hour = prompt('Enter an hour between 0 and 23')
let minute = prompt('Enter an hour between 0 and 60')
let second = (+prompt('Enter an hour between 0 and 60')) +1

if(second === 60) {
    second = 0
    Number(minute++)
    if (minute === 60){
        minute = 0
        Number(hour++)
      if (hour === 24){
        hour = 0
        minute = 0
        second = 0
      }
   }
}
    console.log(`${hour}h:${minute}m:${second}s`)
