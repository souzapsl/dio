var currentNumberWrapper = document.getElementById('currentNumber');

var currentNumberWrapperEvent = document.getElementById('currentNumberEvent');

var currentNumberEvent = 0;

var currentNumber = 0;

var decrementLimit = -3;

var incrementLimit = 10;

function increment() {
    if(currentNumber == incrementLimit) {
        alert('Limite de incremento atingido');
        return;
    }
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black';
    }
}

function decrement() {
    if(currentNumber == decrementLimit) {
        alert('Limite de decremento atingido');
        return;
    }
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
}

document.getElementById('minus').addEventListener("click", function(){
    if(currentNumberEvent == decrementLimit) {
        alert('Limite de decremento atingido');
        return;
    }
    currentNumberEvent -= 1;
    currentNumberWrapperEvent.innerHTML = currentNumberEvent;
    if(currentNumberEvent < 0) {
        currentNumberWrapperEvent.style.color = 'red';
    }
});

document.getElementById('plus').addEventListener("click", function(){
    if(currentNumberEvent == incrementLimit) {
        alert('Limite de incremento atingido');
        return;
    }
    currentNumberEvent += 1;
    currentNumberWrapperEvent.innerHTML = currentNumberEvent;
    if(currentNumberEvent >= 0) {
        currentNumberWrapperEvent.style.color = 'black';
    }
});