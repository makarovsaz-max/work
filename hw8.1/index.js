/*творити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.

Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.*/

class Driver {
    constructor(age, sex, fullName, experience) {
        this.age = age;
        this.sex = sex;
        this.fullName = fullName;
        this.experience = experience;
    }
}


class Engine {
    constructor (power, made){
        this.power = power;
        this.made = made;
    }
}


class Car {
    constructor (stamp, carClass, weight, year) {
        this.stamp = stamp;
        this.carClass = carClass;
        this.weight = weight;
        this.year = year;
    }
    start (){
        console.log("Старт");
    }

    stop () {
        console.log("Стоп");
    }

    turnRight () {
        console.log("Вправо");
    }

    turnLeft () {
        console.log("Влево");
    }
}

let drive = new Driver ("32 года", "Мужчина", "Petrov Oleksii Viktorovich", "10 лет")
let country = new Engine(60, "Украина")
let truck = new Car("ЗАЗ «ПЕРЕМОГА»", "Бизнес", "1,5 тонны", "2023 года")
console.log(drive,country,truck)

class Lorry extends Car {
    constructor(stamp,carClass,weight,loadCapacity){
        super(stamp,carClass,weight);
        this.loadCapacity = loadCapacity;
    }
}

class sportCar extends Car {
    constructor (stamp, carClass, weight, maxSpeed) {
        super(stamp,carClass,weight);
        this.maxSpeed = maxSpeed;
    }
}
