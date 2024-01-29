const studRollno = 123;
let studEmail = "abc@gmail.com"
var studPasswd = "college"
studCity = "mumbai"
let studState;

//studRollno = 1 //this is not allowed
console.log(studRollno);

studEmail = "xyz@gmail.com"
studPasswd = "23232423@676"
studCity = "Pune"

//console.log(studPasswd);
//console.log(studState);

console.table([studRollno,studEmail,studPasswd,studState,studCity])

/*
Prefer not to use var
because of issue in block scope &  functional scope 
*/