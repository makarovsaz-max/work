const input = document.createElement("input");
input.placeholder = "Price";

const btn = document.createElement("button");
btn.innerText = "X";

const span = document.createElement("span");
const paragraph = document.createElement("p");
paragraph.innerText ="Enter a price greater than zero!"; 

const container = document.querySelector("#main");
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
        alert("Enter a price greater than zero!");
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

export default input;