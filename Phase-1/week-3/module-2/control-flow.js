
console.log('hello');

let amIHungry= true ; //boolean or false
const bankAccount = 40.4;

console.log("conditional statements");

if (amIHungry){
    console.log(amIHungry);
    //bankAccount = 44;
    //console.log(bankAccount);
    amIHungry = false;
    console.log(amIHungry);
} else {
    console.log("Dont order food");
}
// Food based on ingredients 

let weHaveEggs = false;
let weHaveBacon = true;

if(weHaveEggs){
    console.log('We can make an omelet');
}
if(weHaveBacon){
    console.log('make some bacon');
}