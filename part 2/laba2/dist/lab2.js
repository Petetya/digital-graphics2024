// 1) Реализовать метод, возвращающий максимальное число из массива вещественных чисел
function getMaxNum(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let x of arr) {
        if (x > max) {
            max = x;
        }
    }
    return max;
}
const arr = [1, 2, 3, 4, 45, 6, 7, 8];
console.log(getMaxNum(arr));
// 1.2) Реализовать метод, возвращающий флаг наличия хотя бы одного отрицательного числа в матрице целых чисел
function isNegativePresent(M) {
    let isPresent = false;
    for (let i = 0; i < M.length && !isPresent; i++) {
        for (let j = 0; j < M[0].length && !isPresent; j++) {
            if (M[i][j] < 0) {
                isPresent = true;
            }
        }
    }
    return isPresent;
}
console.log(isNegativePresent([[1, 2, 3], [4, 5, 6], [-7, 8, 9]]));
// 2) Создайте кортеж, который может содержать только 3 числовых значения.
let threeNumbers;
// 3) Создайте тип перечисление для типов мячей для различных видов спортивных игр. 
// Выведите какой-либо тип мяча в консоль.
var TypesOfSportsBalls;
(function (TypesOfSportsBalls) {
    TypesOfSportsBalls[TypesOfSportsBalls["Football"] = 0] = "Football";
    TypesOfSportsBalls[TypesOfSportsBalls["Volleyball"] = 1] = "Volleyball";
    TypesOfSportsBalls[TypesOfSportsBalls["Basketball"] = 2] = "Basketball";
})(TypesOfSportsBalls || (TypesOfSportsBalls = {}));
console.log(TypesOfSportsBalls[TypesOfSportsBalls.Basketball]);
// 4) Реализуйте метод, который будет выводить информацию в консоль о создаваемом объекте типа Cat или Dog,
//  применяя Обобщенный тип, ограниченный типом Pet.
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printInfo(pet) {
    console.log(pet.speak());
}
let dog = new Dog();
let cat = new Cat();
printInfo(cat);
printInfo(dog);
const footballPlayer = {
    age: 20,
    name: "Messi",
    ball: TypesOfSportsBalls.Football
};
console.log(JSON.stringify(footballPlayer));
