// 1) Реализовать метод, возвращающий максимальное число из массива вещественных чисел

function getMaxNum(arr: number[]): number {
    let max: number = Number.MIN_SAFE_INTEGER;

    for (let x of arr) {
        if (x > max) {
            max = x;
        }
    }

    return max;
}

const arr: number[] = [1, 2, 3, 4, 45, 6, 7, 8];
console.log(getMaxNum(arr));

// 1.2) Реализовать метод, возвращающий флаг наличия хотя бы одного отрицательного числа в матрице целых чисел

function isNegativePresent(M: number[][]): boolean {
    let isPresent: boolean = false;


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

let threeNumbers: [number, number, number];



// 3) Создайте тип перечисление для типов мячей для различных видов спортивных игр. 
// Выведите какой-либо тип мяча в консоль.

enum TypesOfSportsBalls {
    Football,
    Volleyball,
    Basketball,
}
console.log(TypesOfSportsBalls[TypesOfSportsBalls.Basketball]);

// 4) Реализуйте метод, который будет выводить информацию в консоль о создаваемом объекте типа Cat или Dog,
//  применяя Обобщенный тип, ограниченный типом Pet.
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printInfo< T extends Pet>( pet: T ): void{
    console.log(pet.speak());
}
let dog: Dog = new Dog();
let cat: Cat = new Cat();
printInfo(cat);
printInfo(dog);



// 5) Создайте тип с применением перечисления из 3го задания 
// (для использования его в качестве типа поля, для некоторых случаев возможно его использование при реализации массива). 
// Добавьте собственные поля стандартных типов, корректно характеризующие ту или иную предметную область,
// совпадающую с вашим типом перечисления. Создайте объект на основе вашего типа и выведите его в консоль в формате JSON.


type FootballPlayer = {
    age: number;
    name: string;
    ball: TypesOfSportsBalls.Football
}

const footballPlayer: FootballPlayer = {
    age: 20,
    name: "Messi",
    ball: TypesOfSportsBalls.Football
}
console.log(JSON.stringify(footballPlayer));