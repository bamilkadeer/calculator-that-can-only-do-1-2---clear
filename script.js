const number =  document.querySelectorAll('[data-number]');
const clear  =  document.querySelectorAll('[data-clear]');
const symbol =  document.querySelectorAll('[data-symbol]');
const equals =  document.querySelectorAll('[data-equals]');
let   screen =  document.querySelector   ('.number');
let preNumber = document.querySelector   ('.previousNumber');



let counter  = 0;
let lastchar = true; 
let buffer   = '';
let bufferbuffer = '';
let lastSymbol;
let firstInput;
let secondInput;
let runningTotal;

number.forEach(function(button) {

    button.onclick = function()
    {
     
     screen.innerText = buffer;
     screen.style.color = 'black';
     lastchar = button.innerText.toString();
     buffer = buffer.toString() + button.innerText.toString();
     bufferbuffer = bufferbuffer.toString() + button.innerText.toString();

     screen.innerText = buffer;
    }
});

clear.forEach(function(button) {

    button.onclick = function()
    {
     counter = 0;
     preNumber.innerText = '';
     screen.style.color = 'green';
     buffer = '';
     bufferbuffer = '';
     screen.innerText = buffer;
    }
});

symbol.forEach(function(button) {

    button.onclick = function()
    {
     if(screen.innerText === '' || lastchar === false || counter >= 1)
       { 
        return;
       }
       else{
            lastSymbol = button.innerText.toString();
            counter++;
            screen.style.color = 'green';
            buffer = buffer.toString() + button.innerText.toString();

            bufferbuffer = bufferbuffer.toString() + button.innerText.toString();

            console.log(buffer);
            preNumber.innerText = bufferbuffer;

            screen.innerText = buffer;
            lastchar = false;
            firstInput = parseInt(buffer);
            buffer = '';
            bufferbuffer = '';
            console.log(firstInput);
           }
    }
});

equals.forEach(function(button){

    button.onclick = function()
    {
    counter = 0;
    preNumber.innerText = buffer;

    calculate(firstInput, parseInt(buffer));


    console.log (parseInt(bufferbuffer));
    firstInput = parseInt(bufferbuffer);
    screen.style.color = 'red';




    }
});

function calculate (x, y){

    console.log(symbol.innerText)
    console.log(lastSymbol)
    switch(lastSymbol){
                       case "-":
                        buffer =  x - y;
                        screen.innerText = buffer.toString();
                        
                       break;
     
                       case "+":
                        buffer =  x + y;
                        screen.innerText = buffer.toString();

                       break;

                       case "÷":
                        buffer =  x /y;
                        screen.innerText = buffer.toString();
                        
                       break;
     
                       case "x":
                        buffer =  x * y;
                        screen.innerText = buffer.toString();

                       break;
                      }
}
