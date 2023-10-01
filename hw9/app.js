let input = document.createElement("input");
        let btn = document.createElement("button");

        input.placeholder = "Номер телефону у форматі 000-000-00-00 ";
        btn.innerText = "Відправити";

        document.body.appendChild(input);
        document.body.appendChild(btn);

        const PhoneNumber = /\d\d\d-\d\d\d-\d\d-\d\d/;

        btn.onclick = function (){
            if(PhoneNumber.test(input.value) && input.value.length === 13){
                document.body.classList.add("green");
                document.location = "https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg";
            }else{
                let div = document.createElement("div");
                document.body.prepend(div);
                div.innerText = "Введите правильный номер телефона в формате 000-000-00-00!"
            }
        }