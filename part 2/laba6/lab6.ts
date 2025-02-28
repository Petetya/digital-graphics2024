// 2) Создайте декоратор, выполняющий блокировку изменения прототипа класса автомобиль.

function sealed(constructor: Function){
    Object.seal(constructor.prototype);
    
}

@sealed
class Car{
    price: number = 1000;
    year: number = 2025;
    @toUpperCase
    getInfo(): string{
        return "price: " + this.price + "; year: " + this.year;
    }
}

var myCar = new Car();



// Object.defineProperty( Car.prototype , 'newPropery', {
//     value: true,
//     enumerable: true,
//     writable: true,
//     configurable: true,
// })



// 3 Реализуйте декоратор метода, выполняющий преобразование возвращаемой строки с некими сведениями об объекте
//  класса Автомобиль, заменяя все буквы на ЗАГЛАВНЫЕ.

function toUpperCase(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]){
        let result = originalMethod.call(this, args)
        return result.toUpperCase()
    }
}

console.log(myCar.getInfo());