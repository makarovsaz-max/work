let cryptoWallet = {
    nameUser : "",
    userMoney : {
    bitcoin : {
        name : "Bitcoin",
        logo : "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        balance : Math.floor(Math.random()*5+1),
        course : 955194,
    },
    ethereum : {
        name : "Ethereum",
        logo : "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
        balance : Math.floor(Math.random()*10+1),
        course : 60326,
    },
    stellar : {
        name : "Stellar",
        logo : "https://s2.coinmarketcap.com/static/img/coins/64x64/512.png",
        balance : Math.floor(Math.random()*8+1),
        course :  4.84,
    }
}
};
    cryptoWallet.nameUser = prompt('Введите свое имя')
    if(cryptoWallet.nameUser == "null" || cryptoWallet.nameUser == null || cryptoWallet.nameUser == "" ){
    alert("Вы не ввели свои данные, попробуйте еще раз :)")
    location.reload(); // Взял с интернета
    } 

    




    
let ready = document.getElementById("btn")
const userBal = function () {
    let currency = document.getElementById("inp").value.toLowerCase()
    if (currency === "bitcoin") {
        
        document.write(`
        <div style="color: black; border: 1px solid black; text-align:center">
        <div><img style="width: 100px;height: 100px;" srс="${cryptoWallet.userMoney.bitcoin.logo}"></div>
        <h1> ${cryptoWallet.nameUser}, Добро пожаловать на cryptoWallet!</h1>
        <h3>В данный момент на вашем балансе ${cryptoWallet.userMoney.bitcoin.name} осталось   ${cryptoWallet.userMoney.bitcoin.balance} BTC</h3>
        <h3>если вы их продадите сегодня, то получите  ${parseInt(cryptoWallet.userMoney.bitcoin.balance * cryptoWallet.userMoney.bitcoin.course)}грн</h3>
        </div> 
        <span>
        Самый актуальный курс от cryptoWallet!
        </span>
        `)
    } else if(currency === "ethereum") {
        document.write(`
        <div style="color: black; border: 1px solid black; text-align:center">
        <div><img style="width: 100px;height: 100px;" srс="${cryptoWallet.userMoney.ethereum.logo}"></div>
        <h1> ${cryptoWallet.nameUser}, Добро пожаловать на cryptoWallet!</h1>
        <h3>В данный момент на вашем балансе ${cryptoWallet.userMoney.ethereum.name} осталось   ${cryptoWallet.userMoney.ethereum.balance} ETH</h3>
        <h3>если вы их продадите сегодня, то получите  ${parseInt(cryptoWallet.userMoney.ethereum.balance * cryptoWallet.userMoney.ethereum.course)}грн</h3>
        </div> 
        <span>
        Самый актуальный курс от cryptoWallet!
        </span>
        `)
    } else if(currency === "stellar") {
        document.write(`
        <div style="color: black; border: 1px solid black; text-align:center"> 
        <div><img style="width: 100px;height: 100px;" srс="${cryptoWallet.userMoney.stellar.logo}"></div>
        <h1> ${cryptoWallet.nameUser}, Добро пожаловать на cryptoWallet!</h1>
        <h3>В данный момент на вашем балансе ${cryptoWallet.userMoney.stellar.name} осталось   ${cryptoWallet.userMoney.stellar.balance} STL</h3>
        <h3>если вы их продадите сегодня, то получите  ${parseInt(cryptoWallet.userMoney.stellar.balance * cryptoWallet.userMoney.stellar.course)}грн</h3>
        </div>
        <span>
        Самый актуальный курс от cryptoWallet!
        </span> 
        `)
    } else{
        alert("Вы ввели неверное название криптовалюты!")
        return
     }

}

ready.onclick = function() {
    userBal()
}