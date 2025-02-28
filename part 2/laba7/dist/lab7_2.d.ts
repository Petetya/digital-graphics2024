export interface Vehicle {
    brand: string;
    model: string;
    manufacturingYear: number;
    VIN: string;
    registrationNumber: number;
    ownerInfo: {
        name: string;
        surname: string;
        middlename: string;
    };
    printVehicleInfo(): void;
}
export interface VehicleStorage<T extends Vehicle> {
    createdAt: Date;
    vehicles: T[];
    getVehicles(): T[];
    getSortedArray(): T[];
    getVehiclesBySurname(surname: string): T[];
    getShortInfo(): {
        VIN: string;
        fullName: string;
        registrationNumber: number;
    }[];
}
export declare class MyVehicleStorage<T extends Vehicle> implements VehicleStorage<T> {
    createdAt: Date;
    vehicles: T[];
    constructor(_vehicles: T[]);
    getVehicles(): T[];
    getSortedArray(): T[];
    getVehiclesBySurname(surname: string): T[];
    getShortInfo(): {
        VIN: string;
        fullName: string;
        registrationNumber: number;
    }[];
}
export declare class Car implements Vehicle {
    brand: string;
    model: string;
    manufacturingYear: number;
    VIN: string;
    registrationNumber: number;
    ownerInfo: {
        name: string;
        surname: string;
        middlename: string;
    };
    printVehicleInfo(): void;
    /**
     *
     */
    constructor(brand: string);
}
