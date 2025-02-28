"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lab7_2_1 = require("./lab7_2");
// 1)  Реализуйте внутри класса Хранилище метод (не забудьте добавить его определение в интерфейс),
// позволяющий выполнить сортировку по Марке А до Я Транспортного средства.
// Метод должен возвращать отсортированный массив Транспортных средств.
const arr = [new lab7_2_1.Car('Toyoto'), new lab7_2_1.Car('Cadillac'), new lab7_2_1.Car('Volga'), new lab7_2_1.Car('Chevrolet')];
const storage = new lab7_2_1.MyVehicleStorage(arr);
console.log(storage.getSortedArray());
// 2) Реализуйте метод, возвращающий все Транспортные средства, 
// Фамилия владельца которых полностью совпадает с заданной в параметре.
// Метод должен быть невосприимчивым к регистру в передаваемом параметре.
const ivanovCar = new lab7_2_1.Car('Toyoto');
ivanovCar.ownerInfo = { name: 'Ivan', surname: "Ivanov", middlename: "Ivanovich" };
const petrovCar = new lab7_2_1.Car('Cadillac');
petrovCar.ownerInfo = { name: "Sergey", surname: "Petrov", middlename: "Petrovich" };
const petrovCar2 = new lab7_2_1.Car('Kia');
petrovCar2.ownerInfo = { name: "Sergey", surname: "Petrov", middlename: "Petrovich" };
const sobolevCar = new lab7_2_1.Car('Chevrolet');
sobolevCar.ownerInfo = { name: "Alexander", surname: "Sobolev", middlename: "Alexandrovich" };
const arr2 = [ivanovCar, petrovCar, sobolevCar, petrovCar2];
const storage2 = new lab7_2_1.MyVehicleStorage(arr2);
console.log(storage2.getVehiclesBySurname("Petrov"));
// 3) Реализуйте метод внутри класса Транспортное средство, 
// возвращающий сведения только VIN-номер, ФИО владельца (одной строкой поля) и Регистрационный номер.
const ivanovCar3 = new lab7_2_1.Car('Toyoto');
ivanovCar3.ownerInfo = { name: 'Ivan', surname: "Ivanov", middlename: "Ivanovich" };
const petrovCar3 = new lab7_2_1.Car('Cadillac');
petrovCar3.ownerInfo = { name: "Sergey", surname: "Petrov", middlename: "Petrovich" };
const petrovCar3_2 = new lab7_2_1.Car('Kia');
petrovCar3_2.ownerInfo = { name: "Sergey", surname: "Petrov", middlename: "Petrovich" };
const sobolevCar3 = new lab7_2_1.Car('Chevrolet');
sobolevCar3.ownerInfo = { name: "Alexander", surname: "Sobolev", middlename: "Alexandrovich" };
const arr3 = [ivanovCar3, petrovCar3, sobolevCar3, petrovCar3_2];
const storage3 = new lab7_2_1.MyVehicleStorage(arr3);
console.log(storage3.getShortInfo());
