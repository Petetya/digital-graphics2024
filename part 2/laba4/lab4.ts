export namespace Transport {

    export enum TypeOfDocument {
        FirstType,
        SecondType
    }
    interface Owner {
        surname: string,
        name: string,
        middleName: string,
        birth: Date,
        documnetType: TypeOfDocument,
        seriesOfTheDocument: number,
        numberOfTheDocument: number,
        printInfo(): void,
    }

    export class HomeOwner implements Owner {
        private _surname: string;
        private _name: string;
        private _middleName: string;
        private _birth: Date;
        private _documnetType: TypeOfDocument;
        private _seriesOfTheDocument: number;
        private _numberOfTheDocument: number;

        /**
         *
         */
        constructor(surname: string, name: string, middleName: string,
            birth: Date,
            documnetType: TypeOfDocument,
            seriesOfTheDocument: number,
            numberOfTheDocument: number,) {
            this._surname = surname;
            this._name = name;
            this._middleName = middleName;
            this._birth = birth;
            this._documnetType = documnetType;
            this._seriesOfTheDocument = seriesOfTheDocument;
            this._numberOfTheDocument = numberOfTheDocument;

        }

        public get surname(): string {
            return this._surname;
        }
        public set surname(surname: string) {
            this._surname = surname;
        }
        public get name(): string {
            return this._name;
        }
        public set name(name: string) {
            this._name = name;
        }
        public get middleName(): string {
            return this._middleName;
        }
        public set middleName(middleName: string) {
            this._middleName = middleName;
        }
        public get birth(): Date {
            return this._birth;
        }
        public set birth(birth: Date) {
            this._birth = birth;
        }
        public get documnetType(): TypeOfDocument {
            return this._documnetType;
        }
        public set documnetType(documnetType: TypeOfDocument) {
            this._documnetType = documnetType;
        }
        public get seriesOfTheDocument(): number {
            return this._seriesOfTheDocument;
        }
        public set seriesOfTheDocument(seriesOfTheDocument: number) {
            this._seriesOfTheDocument = seriesOfTheDocument;
        }
        public get numberOfTheDocument(): number {
            return this._numberOfTheDocument;
        }
        public set numberOfTheDocument(numberOfTheDocument: number) {
            this._numberOfTheDocument = numberOfTheDocument;
        }
        printInfo() {
            console.log(`
                         surname: ${this.surname},
                         name: ${this.name},
                         middleName: ${this.middleName},
                         birth: ${this.birth},
                         documnetType: ${this.documnetType}, 
                         seriesOfTheDocument: ${this.seriesOfTheDocument},
                         numberOfTheDocument: ${this.numberOfTheDocument} `)
        };
    }



    export interface Vehicle {
        brand: string,
        model: string,
        manufacturingYear: number,
        VIN: string,
        registrationNumber: number,
        ownerInfo: string,
        printVehicleInfo(): void,
    }

    export class SUV implements Vehicle {
        private _brand: string;
        private _model: string;
        private _manufacturingYear: number;
        private _VIN: string;
        private _registrationNumber: number;
        private _ownerInfo: string;

        /**
         *
         */
        constructor(
            brand: string,
            model: string,
            manufacturingYear: number,
            VIN: string,
            registrationNumber: number,
            ownerInfo: string) {
            this._brand = brand;
            this._model = model;
            this._manufacturingYear = manufacturingYear;
            this._VIN = VIN;
            this._registrationNumber = registrationNumber;
            this._ownerInfo = ownerInfo;
        }

        public get brand(): string {
            return this._brand;
        }
        public set brand(brand: string) {
            this._brand = brand;
        }
        public get model(): string {
            return this._model;
        }
        public set model(model: string) {
            this._model = model;
        }
        public get manufacturingYear(): number {
            return this._manufacturingYear;
        }
        public set manufacturingYear(manufacturingYear: number) {
            this._manufacturingYear = manufacturingYear;
        }
        public get VIN(): string {
            return this._VIN;
        }
        public set VIN(VIN: string) {
            this._VIN = VIN;
        }
        public get registrationNumber(): number {
            return this._registrationNumber;
        }
        public set registrationNumber(registrationNumber: number) {
            this._registrationNumber = registrationNumber;
        }
        public get ownerInfo(): string {
            return this._ownerInfo;
        }
        public set ownerInfo(ownerInfo: string) {
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



    enum CarBodyStyle {
        Sedan,
        Hatchback,
        SUV,
    }
    enum CarClass {
        A,
        B,
        C,
        E,
        S
    }
    interface Car extends Vehicle {
        carBodyStyle: CarBodyStyle,
        carClass: CarClass,
    }

    export class SedanKia implements Car {
        carBodyStyle: CarBodyStyle;
        carClass: CarClass;
        brand: string;
        model: string;
        manufacturingYear: number;
        VIN: string;
        registrationNumber: number;
        ownerInfo: string;
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

    interface Motorbike extends Vehicle {
        motorcycleFrame: string,
        isForSport: boolean
    }
    export class HondaShine implements Motorbike {
        motorcycleFrame: string;
        isForSport: boolean;
        brand: string;
        model: string;
        manufacturingYear: number;
        VIN: string;
        registrationNumber: number;
        ownerInfo: string;
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


    interface VehicleStorage<T extends Vehicle> {
        createdAt: Date,
        vehicles: T[]
        getVehicles(): T[],
    }

    export class MyVehicleStorage<T extends Vehicle> implements VehicleStorage<T> {
        createdAt: Date;
        vehicles: T[];

        /**
         *
         */
        constructor(_vehicles :T[]) {
            this.vehicles = _vehicles;
        }

        getVehicles(): T[] {
            return this.vehicles;
        }
    }
}
