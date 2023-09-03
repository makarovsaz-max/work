let words = [
    "программа",
    "джава",
    "питон",
    "руби"
   ];
   
let word = words[Math.floor(Math.random() * words.length)];

let answerWords = [];
 for (let x = 0; x < word.length; x++) {
    answerWords[x] = "_";
}
let remainedLetters = word.length;

while (remainedLetters > 0){
    alert(answerWords.join(" "));
    
    let guess = prompt("Відгадайте букву або нажміть скасувати, щоб вийти з ігри");
    if(guess === null){
        break;
    } else if(guess.length !== 1){
        alert("Будь ласка, введіть тільки одну літеру");
    } else{
        for(let y = 0; y < word.length; y++){
            if(word[y] === guess){
                answerWords[y] = guess;
                remainedLetters--;
            }
        }
    }
}
alert(answerWords.join(" "));
alert("Чудово, Ви виграли, було загадано слово: " + word);