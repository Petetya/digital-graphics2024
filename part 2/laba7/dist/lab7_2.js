"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.MyVehicleStorage = void 0;
class MyVehicleStorage {
    constructor(_vehicles) {
        this.vehicles = _vehicles;
    }
    getVehicles() {
        return this.vehicles;
    }
    getSortedArray() {
        return this.vehicles.sort(compareTwoObjectByBrand);
    }
    getVehiclesBySurname(surname) {
        surname = surname.toLowerCase();
        return this.vehicles.filter(x => x.ownerInfo.surname.toLowerCase() === surname);
    }
    getShortInfo() {
        let arr = this.vehicles.map(x => {
            return {
                VIN: x.VIN,
                fullName: x.ownerInfo.surname + x.ownerInfo.name + x.ownerInfo.middlename,
                registrationNumber: x.registrationNumber
            };
        });
        return arr;
    }
}
exports.MyVehicleStorage = MyVehicleStorage;
function compareTwoObjectByBrand(a, b) {
    if (a.brand < b.brand) {
        return -1;
    }
    if (a.brand > b.brand) {
        return 1;
    }
    return 0;
}
class Car {
    printVehicleInfo() {
        console.log(this.brand + " " + this.model + " " + this.manufacturingYear);
    }
    /**
     *
     */
    constructor(brand) {
        this.brand = brand;
    }
}
exports.Car = Car;
