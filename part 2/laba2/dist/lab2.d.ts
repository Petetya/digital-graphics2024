declare function getMaxNum(arr: number[]): number;
declare const arr: number[];
declare function isNegativePresent(M: number[][]): boolean;
declare let threeNumbers: [number, number, number];
declare enum TypesOfSportsBalls {
    Football = 0,
    Volleyball = 1,
    Basketball = 2
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function printInfo<T extends Pet>(pet: T): void;
declare let dog: Dog;
declare let cat: Cat;
type FootballPlayer = {
    age: number;
    name: string;
    ball: TypesOfSportsBalls.Football;
};
declare const footballPlayer: FootballPlayer;
