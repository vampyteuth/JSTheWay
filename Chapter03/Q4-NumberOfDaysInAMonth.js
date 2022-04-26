// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. 
//Leap years are excluded. Incorrect inputs must be taken into account.

let month = Number(prompt('Enter a month by it\'s number', '1 to 12'))

switch(month){
    case 1:
        console.log(`January is 31 days long.`)
        break;
    case 2:
        console.log(`February is 28 days long.`)
        break;
    case 3:
        console.log(`March is 31 days long.`)
        break;
    case 4:
        console.log(`April is 30 days long.`)
        break;
    case 5:
        console.log(`May is 31 days long.`)
        break;
    case 6:
        console.log(`June is 30 days long.`)
        break;
    case 7:            
        console.log(`July is 31 days long.`)
        break;
    case 8:
        console.log(`August is 31 days long.`)
        break;
    case 9:
        console.log(`September is 31 days long.`)
        break;
    case 10:
        console.log(`October is 31 days long.`)
        break;
    case 11:
        console.log(`November is 30 days long.`)
        break; 
   case 12:
        console.log(`December is 30 days long.`)
        break;
    default:
        console.log(prompt('You entered an incorrect number. Try Again'))

}

