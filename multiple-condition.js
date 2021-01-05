
var savingMoney =50000;
var getaJob = true;

if( getaJob == true && savingMoney > 20000){
    console.log("Congratulations");

}
else{

console.log('Try again.....');

}

//another way


var savingMoney =50000;
var getaJob = false;

if( getaJob == true && savingMoney > 20000){
    console.log("Congratulations");

}
else{

console.log('Try again..... and again');

}

//OR operation

var savingMoney =50000;
var getaJob = false;

if( getaJob == true || savingMoney > 20000){
    console.log("Congratulations");

}
else{

console.log('Try again..... and again');

}

//multiple condition 


var savingMoney =5000;
var getaJob = true;

if( getaJob == true && savingMoney > 20000){
    console.log("Congratulations");

}

else if(getaJob == true){

console.log("weldone! you are trying...go ahead");

}
else{

console.log('Try again..... and again');

}