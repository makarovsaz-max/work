const inputs = document.querySelectorAll("#main-1 input");

inputs.forEach( input =>{
    const length = parseInt(input.getAttribute("data-length"));

    input.addEventListener("focus", ()=>{
        input.classList.remove("green");  
        input.classList.remove("red");  
    })

    input.addEventListener("blur",()=>{
        if(input.value.length === length){
            input.classList.add("green");  
        }else if(input.value.length === 0){
            alert("Введіть щось!");
        }
        else{
            input.classList.add("red");
        }
    });

});

export default inputs;