let display = document.querySelector(".display input")
const space = document.querySelector(".display p");
let buttons = Array.from(document.querySelectorAll(".button"))

let memory = "";
let result = "";
let operator = "";
let number1 = "";
let number2 = "";

buttons.map((button) => {
    button.addEventListener("click", (e) => {
       let valueButton = button.value;
       const receivingNum = /\d/;
       if(receivingNum.test(valueButton) || valueButton === "."){
        if(operator === ""){
            number1 += valueButton;
            display.value = number1;
        }
        else {
            number2 += valueButton;
            display.value = number2;
        }
    }
    if(valueButton === "+" || valueButton === "-" || valueButton === "*" || valueButton === "/"){
        operator = valueButton; 
    }
    if(number1 !== "" && number2 !== "" && operator){
        if(valueButton === "=" || valueButton === "+" || valueButton === "-" || valueButton === "*" || valueButton === "/"){
            number1 = parseFloat(number1);
            number2 = parseFloat(number2);
            switch(operator){
                case "+":
                    result = number1 + number2
                    number1 = result
                    number2 = ""
                    result = ""
                    display.value = number1
                    break;
                case "-":
                    result = number1 - number2
                    number1 = result
                    number2 = ""
                    result = ""
                    display.value = number1
                    break;
                case "*":
                    result = number1 * number2
                    number1 = result
                    number2 = ""
                    result = ""
                    display.value = number1
                    break;
                case "/":
                    result = number1 / number2
                    number1 = result
                    number2 = ""
                    result = ""
                    display.value = number1
                    break;
                default:
                    alert("Что-то пошло не так.");
                }
            }
          }
          if(valueButton === "M+"){
            memory = display.value;
            memory *=1;
            space.style.display = "inline";
            
        }
        else if(valueButton === "M-"){
            memory = "";
            space.style.display = "none";
        }

        if(valueButton === "MRC"){
            display.value = "";
                memory = "";
                space.style.display = "none";
                alert("Ошибка запроса!")
        }
         })
    })

    

