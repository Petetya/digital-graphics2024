declare function sealed(constructor: Function): void;
declare class Car {
    price: number;
    year: number;
    getInfo(): string;
}
declare var myCar: Car;
declare function toUpperCase(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
