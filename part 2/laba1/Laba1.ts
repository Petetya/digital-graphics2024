const funcNumbers = (a: number, b: number): number => a - b;
console.log('Вариант 5:', funcNumbers(5, 10));

const numberValue: number = 42;
let stringValue: string = "Hello TypeScript";
const booleanValue: boolean = true;
let arrayValue: number[] = [1, 2, 3, 4, 5];
const nullValue: null = null;
let undefinedValue: undefined = undefined;
const objectValue: object = { key: "value" };
let dateValue: Date = new Date();

interface Entity {
    id: number;
}
interface ToJsonStringify extends
    Entity {
    e1: number;
    e2: number;
}
const data: ToJsonStringify = {
    id: 5,
    e1: 12345,
    e2: 999,
}

const jsonString = JSON.stringify(data);
console.log('Результат преобразования в JSON:');
console.log(jsonString);