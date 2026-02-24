const age = 24;

// if else if
if(age>18) {
    console.log("Adult");
} else if(age<18) {
    console.log("Teenage");
} else {
    console.log("18 years.Congo!");
}

// ternary operator
console.log(age>18?"Adult":(age<18)?"Teenage":"18 years.Congo!");

// switch
let prompt = require("prompt-sync")();
let date = Number(prompt("enter date "));
switch(date) {
    case 1:
        day = "sunday";
        break;
    case 2:
        day = "monday";
        break;
    case 3:
        day = "tuesday";
        break;
    case 4:
        day = "wednesday";
        break;
    case 5:
        day = "thursday";
        break;
    case 6:
        day = "friday";
        break;
    case 7:
        day = "saturday";
        break;
    default:
        day = "invalid";
}
console.log(day);

// boolean
console.log(true || false);