window.onload


const span = document.createElement("span")

const input = document.createElement("input")
input.placeholder = "Price"

const btn = document.createElement("button")
btn.innerText = "X"


const paragraph = document.createElement("p");
paragraph.innerText ="Принимаем числа больше нуля."; 

const container = document.querySelector("#container");
container.append(input);

input.addEventListener("focus", () => {
    input.classList.remove("red-border");
    input.classList.add("green-border");
    container.removeChild(paragraph);
})
input.addEventListener("blur", () => {
    container.append(btn);
    input.classList.remove("green-border");
    const inputValue = parseFloat(input.value);


    if(isNaN(inputValue)){
        alert("Введите число.");
        input.classList.add("red-border");
    }
    else if(inputValue < 0){
        container.append(paragraph);
        input.classList.add("red-border");
    }
    else{
        span.innerText = inputValue;
        container.prepend(span);
    }
});

btn.addEventListener("click", () => {
    if(span.innerText){
        container.removeChild(span);
        container.removeChild(btn);
    }
})


const inputs = document.querySelectorAll("#container-1 input");

inputs.forEach( input =>{
    const length = parseInt(input.getAttribute("data-length"));

    input.addEventListener("focus", ()=>{
        input.classList.remove("green-border");  
        input.classList.remove("red-border");  
    })

    input.addEventListener("blur",()=>{
        if(input.value.length === length){
            input.classList.add("green-border");  
        } else if (input.value.length < length){
            input.classList.add("red-border");
        } else {
            alert("Введите число.")
        }
        
       
    });

});