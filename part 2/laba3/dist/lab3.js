// 1.1 Реализуйте интерфейс Владелец (Owner) 
var TypeOfDocument;
(function (TypeOfDocument) {
    TypeOfDocument[TypeOfDocument["FirstType"] = 0] = "FirstType";
    TypeOfDocument[TypeOfDocument["SecondType"] = 1] = "SecondType";
})(TypeOfDocument || (TypeOfDocument = {}));
class HomeOwner {
    /**
     *
     */
    constructor(surname, name, middleName, birth, documnetType, seriesOfTheDocument, numberOfTheDocument) {
        this._surname = surname;
        this._name = name;
        this._middleName = middleName;
        this._birth = birth;
        this._documnetType = documnetType;
        this._seriesOfTheDocument = seriesOfTheDocument;
        this._numberOfTheDocument = numberOfTheDocument;
    }
    get surname() {
        return this._surname;
    }
    set surname(surname) {
        this._surname = surname;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get middleName() {
        return this._middleName;
    }
    set middleName(middleName) {
        this._middleName = middleName;
    }
    get birth() {
        return this._birth;
    }
    set birth(birth) {
        this._birth = birth;
    }
    get documnetType() {
        return this._documnetType;
    }
    set documnetType(documnetType) {
        this._documnetType = documnetType;
    }
    get seriesOfTheDocument() {
        return this._seriesOfTheDocument;
    }
    set seriesOfTheDocument(seriesOfTheDocument) {
        this._seriesOfTheDocument = seriesOfTheDocument;
    }
    get numberOfTheDocument() {
        return this._numberOfTheDocument;
    }
    set numberOfTheDocument(numberOfTheDocument) {
        this._numberOfTheDocument = numberOfTheDocument;
    }
    printInfo() {
        console.log(`surname: ${this.surname},
                     name: ${this.name},
                     middleName: ${this.middleName},
                     birth: ${this.birth},
                     documnetType: ${this.documnetType}, 
                     seriesOfTheDocument: ${this.seriesOfTheDocument},
                     numberOfTheDocument: ${this.numberOfTheDocument} `);
    }
    ;
}
class SUV {
    /**
     *
     */
    constructor(brand, model, manufacturingYear, VIN, registrationNumber, ownerInfo) {
        this._brand = brand;
        this._model = model;
        this._manufacturingYear = manufacturingYear;
        this._VIN = VIN;
        this._registrationNumber = registrationNumber;
        this._ownerInfo = ownerInfo;
    }
    get brand() {
        return this._brand;
    }
    set brand(brand) {
        this._brand = brand;
    }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
    }
    get manufacturingYear() {
        return this._manufacturingYear;
    }
    set manufacturingYear(manufacturingYear) {
        this._manufacturingYear = manufacturingYear;
    }
    get VIN() {
        return this._VIN;
    }
    set VIN(VIN) {
        this._VIN = VIN;
    }
    get registrationNumber() {
        return this._registrationNumber;
    }
    set registrationNumber(registrationNumber) {
        this._registrationNumber = registrationNumber;
    }
    get ownerInfo() {
        return this._ownerInfo;
    }
    set ownerInfo(ownerInfo) {
        this._ownerInfo = ownerInfo;
    }
    printVehicleInfo() {
        console.log(`
             brand: ${this.brand},
             model: ${this.model},
             manufacturingYear: ${this.manufacturingYear},
             VIN: ${this.VIN},
             registrationNumber: ${this.registrationNumber},
             `);
    }
}
// 2
var CarBodyStyle;
(function (CarBodyStyle) {
    CarBodyStyle[CarBodyStyle["Sedan"] = 0] = "Sedan";
    CarBodyStyle[CarBodyStyle["Hatchback"] = 1] = "Hatchback";
    CarBodyStyle[CarBodyStyle["SUV"] = 2] = "SUV";
})(CarBodyStyle || (CarBodyStyle = {}));
var CarClass;
(function (CarClass) {
    CarClass[CarClass["A"] = 0] = "A";
    CarClass[CarClass["B"] = 1] = "B";
    CarClass[CarClass["C"] = 2] = "C";
    CarClass[CarClass["E"] = 3] = "E";
    CarClass[CarClass["S"] = 4] = "S";
})(CarClass || (CarClass = {}));
class SedanKia {
    printVehicleInfo() {
        console.log(`
             brand: ${this.brand},
             model: ${this.model},
             manufacturingYear: ${this.manufacturingYear},
             VIN: ${this.VIN},
             registrationNumber: ${this.registrationNumber},
             carBodyStyle: ${this.carBodyStyle},
             carClass: ${this.carClass}
             `);
    }
}
class HondaShine {
    printVehicleInfo() {
        console.log(`
             brand: ${this.brand},
             model: ${this.model},
             manufacturingYear: ${this.manufacturingYear},
             VIN: ${this.VIN},
             registrationNumber: ${this.registrationNumber},
             motorcycleFrame: ${this.motorcycleFrame},
             isForSport: ${this.isForSport}
             `);
    }
}
class MyVehicleStorage {
    getVehicles() {
        return this.vehicles.filter((x) => x);
    }
}
const myVehicleStorage = new MyVehicleStorage();
myVehicleStorage.vehicles = [];
myVehicleStorage.vehicles.push(new HondaShine());
myVehicleStorage.vehicles.push(new SedanKia());
console.log(myVehicleStorage.getVehicles());
