const number =  document.querySelectorAll('[data-number]');
const clear =  document.querySelectorAll('[data-clear]');
const symbol =  document.querySelectorAll('[data-symbol]');
let screen =  document.querySelector('.number');
const equals = document.querySelectorAll('[data-equals]');

let counter = 0;
let lastSymbol;
let firstInput;
let secondInput;
let runningTotal;
let lastchar = true; 
let buffer = '';
//const number =  document.querySelector('.one');






    


number.forEach(function(button) {


    button.onclick = function(){
        screen.innerText = buffer;

        screen.style.color = 'black';
        lastchar = button.innerText.toString();
        buffer = buffer.toString() + button.innerText.toString();
screen.innerText = buffer;
    }
    
});


clear.forEach(function(button) {



    button.onclick = function(){
        counter = 0;
        screen.style.color = 'green';
        buffer = '';
screen.innerText = buffer;
    }
    
});

symbol.forEach(function(button) {



    button.onclick = function(){

        if(screen.innerText === '' || lastchar === false || counter >= 1){
 return;

        }
        else{
            lastSymbol = button.innerText.toString();
            counter++;
            screen.style.color = 'green';
            buffer = buffer.toString() + button.innerText.toString();
    screen.innerText = buffer;
    lastchar = false;
    firstInput = parseInt(buffer);
    buffer = '';
console.log(firstInput);
        }
    }
    
});




equals.forEach(function(button) {


    button.onclick = function(){
counter = 0;

calculate(firstInput, parseInt(buffer));


        screen.style.color = 'red';
    }
    
});



function calculate (x, y){


    console.log(symbol.innerText)
    console.log(lastSymbol)
switch(lastSymbol){
   
   case "-":
   
    buffer =  x - y;
   console.log(x);
   console.log(y);

   console.log(buffer);
   screen.innerText = buffer.toString();
   console.log('hello');
break;

case "+":

buffer =  x + y;
console.log(x);
console.log(y);

console.log(buffer);
screen.innerText = buffer.toString();
console.log('hello');
break;

}
}