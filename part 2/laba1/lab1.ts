
// 2) Реализуйте стрелочную функцию, возвращающую строку,
//  составленную (см. конкатенация) из 2х чисел, передаваемых в качестве параметров. 
const func = (a: number, b: number): string => "" + a + b;
console.log(func(1, 2));

// 3) Выполните создание объектов – констант (const) и переменных (let) 
// с указанием различных встроенных и специальных типов. Название переменной может быть любым.
// Количество объектов не более 8.

let a: number = 1;
let b: string = "1";
let c: [number, string] = [1, 'a'];
enum Pet { Dog, Cat };
let d: Pet = Pet.Cat;
let e: boolean = true;
const f: number[] = [1, 2, 3, 4, 5];
let g: any = new Object();
const h: { first: number, second: string } = { first: 1, second: "" }


// 4) Скопируйте и выполните преобразование объекта data к формату JSON в виде строки.
// Результат преобразования следует вывести в консоль.

interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}
const data: ToJsonStringify = {
    id: 1,
    name: "Василий",
}
console.log(JSON.stringify(data));