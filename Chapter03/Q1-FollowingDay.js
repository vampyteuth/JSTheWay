// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

let userChoice = prompt('Type in a day of the week and get the following day').toLowerCase()

switch(userChoice){
    case 'monday':
        console.log('tuesday')
        break;
    case'tuesday':
        console.log('wednesday')
        break;
    case 'wednesday':
        console.log('thursday')
        break;
    case 'thursday':
        console.log('friday')
        break;
    case 'friday':
        console.log('saturday')
        break;
    case 'saturday':
        console.log('sunday')
        break;
    case'sunday':
        console.log('monday')
            break;
    default:
        console.log('FAIL')
    }
