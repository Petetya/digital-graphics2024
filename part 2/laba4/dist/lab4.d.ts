export declare namespace Transport {
    export enum TypeOfDocument {
        FirstType = 0,
        SecondType = 1
    }
    interface Owner {
        surname: string;
        name: string;
        middleName: string;
        birth: Date;
        documnetType: TypeOfDocument;
        seriesOfTheDocument: number;
        numberOfTheDocument: number;
        printInfo(): void;
    }
    export class HomeOwner implements Owner {
        private _surname;
        private _name;
        private _middleName;
        private _birth;
        private _documnetType;
        private _seriesOfTheDocument;
        private _numberOfTheDocument;
        /**
         *
         */
        constructor(surname: string, name: string, middleName: string, birth: Date, documnetType: TypeOfDocument, seriesOfTheDocument: number, numberOfTheDocument: number);
        get surname(): string;
        set surname(surname: string);
        get name(): string;
        set name(name: string);
        get middleName(): string;
        set middleName(middleName: string);
        get birth(): Date;
        set birth(birth: Date);
        get documnetType(): TypeOfDocument;
        set documnetType(documnetType: TypeOfDocument);
        get seriesOfTheDocument(): number;
        set seriesOfTheDocument(seriesOfTheDocument: number);
        get numberOfTheDocument(): number;
        set numberOfTheDocument(numberOfTheDocument: number);
        printInfo(): void;
    }
    export interface Vehicle {
        brand: string;
        model: string;
        manufacturingYear: number;
        VIN: string;
        registrationNumber: number;
        ownerInfo: string;
        printVehicleInfo(): void;
    }
    export class SUV implements Vehicle {
        private _brand;
        private _model;
        private _manufacturingYear;
        private _VIN;
        private _registrationNumber;
        private _ownerInfo;
        /**
         *
         */
        constructor(brand: string, model: string, manufacturingYear: number, VIN: string, registrationNumber: number, ownerInfo: string);
        get brand(): string;
        set brand(brand: string);
        get model(): string;
        set model(model: string);
        get manufacturingYear(): number;
        set manufacturingYear(manufacturingYear: number);
        get VIN(): string;
        set VIN(VIN: string);
        get registrationNumber(): number;
        set registrationNumber(registrationNumber: number);
        get ownerInfo(): string;
        set ownerInfo(ownerInfo: string);
        printVehicleInfo(): void;
    }
    enum CarBodyStyle {
        Sedan = 0,
        Hatchback = 1,
        SUV = 2
    }
    enum CarClass {
        A = 0,
        B = 1,
        C = 2,
        E = 3,
        S = 4
    }
    interface Car extends Vehicle {
        carBodyStyle: CarBodyStyle;
        carClass: CarClass;
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
        printVehicleInfo(): void;
    }
    interface Motorbike extends Vehicle {
        motorcycleFrame: string;
        isForSport: boolean;
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
        printVehicleInfo(): void;
    }
    interface VehicleStorage<T extends Vehicle> {
        createdAt: Date;
        vehicles: T[];
        getVehicles(): T[];
    }
    export class MyVehicleStorage<T extends Vehicle> implements VehicleStorage<T> {
        createdAt: Date;
        vehicles: T[];
        /**
         *
         */
        constructor(_vehicles: T[]);
        getVehicles(): T[];
    }
    export {};
}
