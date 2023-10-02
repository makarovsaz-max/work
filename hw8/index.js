const ul = document.querySelector("ul");
const firstInput = document.querySelector("input[value='Вибрати перший елемент']");
const lastInput = document.querySelector("input[value='Вибрати останній елемент']");
const nextInput = document.querySelector("input[value='Вибрати наступний елемент']");
const previousInput = document.querySelector("input[value='Вибрати попередній елемент']");
const addToTheEndInput = document.querySelector("input[value='Додати елемент у кінець']");
const deleteAtTheBeginningInput = document.querySelector("input[value='Видалити елемент з початку']");
const deleteAtTheEndInput = document.querySelector("input[value='Видалити елемент з кінця']");
const deleteAtTheCenterInput = document.querySelector("input[value='Видалити елемент з середини']");
const addToTheBeginningInput = document.querySelector("input[value='Додати елемент на початок']");



let yourElement = null;
firstInput.onclick = function () {
    if(yourElement !== null) {
        yourElement.classList.remove("select")
    }
    ul.firstElementChild.classList.add("select")
    yourElement = ul.firstElementChild;
}

lastInput.onclick = function () {
    if(yourElement !== null) {
        yourElement.classList.remove("select")
    }
    ul.lastElementChild.classList.add("select")
    yourElement = ul.LastElementChild;
}

nextInput.onclick = function () {
    if(yourElement !== null){
        yourElement.classList.remove("select");
    }
    const nextElement = yourElement.nextElementSibling;
        if (nextElement !== null) {
            nextElement.classList.add("select");
            yourElement = nextElement;
        }else{
            yourElement = ul.firstElementChild;
            yourElement.classList.add("select");
        } 
}

previousInput.onclick = function () {
    if(yourElement !== null){
        yourElement.classList.remove("select");
    }
    const previousElement = yourElement.previousElementSibling;
    if(previousElement !== null) {
        previousElement.classList.add("select");
        yourElement = previousElement;
    }
}

addToTheEndInput.onclick = function () {
    let liAddEnd = document.createElement('li');
    liAddEnd.innerText = 'Новий елемент'
    ul.appendChild(liAddEnd)
}

deleteAtTheBeginningInput.onclick = function () {
    let deleteBegin = ul.firstElementChild;
    ul.removeChild(deleteBegin)

}

deleteAtTheEndInput.onclick = function () {
    let deleteEnd = ul.lastElementChild;
    ul.removeChild(deleteEnd)
}

deleteAtTheCenterInput.onclick = function () {
    const deleteCenter =  ul.children[4]
    ul.removeChild(deleteCenter)

}

addToTheBeginningInput.onclick = function () {
    let addBegin = document.createElement('li');
    addBegin.innerText = 'Новий елемент'
    ul.prepend(addBegin)
}