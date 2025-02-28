// 2) Создайте декоратор, выполняющий блокировку изменения прототипа класса автомобиль.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function sealed(constructor) {
    Object.seal(constructor.prototype);
}
let Car = class Car {
    constructor() {
        this.price = 1000;
        this.year = 2025;
    }
    getInfo() {
        return "price: " + this.price + "; year: " + this.year;
    }
};
__decorate([
    toUpperCase
], Car.prototype, "getInfo", null);
Car = __decorate([
    sealed
], Car);
var myCar = new Car();
// Object.defineProperty( Car.prototype , 'newPropery', {
//     value: true,
//     enumerable: true,
//     writable: true,
//     configurable: true,
// })
// 3 Реализуйте декоратор метода, выполняющий преобразование возвращаемой строки с некими сведениями об объекте
//  класса Автомобиль, заменяя все буквы на ЗАГЛАВНЫЕ.
function toUpperCase(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let result = originalMethod.call(this, args);
        return result.toUpperCase();
    };
}
console.log(myCar.getInfo());
