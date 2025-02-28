export interface Vehicle {
    brand: string,
    model: string,
    manufacturingYear: number,
    VIN: string,
    registrationNumber: number,
    ownerInfo: { name: string, surname: string, middlename: string },
    printVehicleInfo(): void,
}
export interface VehicleStorage<T extends Vehicle> {
    createdAt: Date,
    vehicles: T[]
    getVehicles(): T[],
    getSortedArray(): T[],
    getVehiclesBySurname(surname: string): T[],
    getShortInfo(): { VIN: string, fullName: string, registrationNumber: number }[],
}

export class MyVehicleStorage<T extends Vehicle> implements VehicleStorage<T> {
    createdAt: Date;
    vehicles: T[];

    constructor(_vehicles: T[]) {
        this.vehicles = _vehicles;
    }

    getVehicles(): T[] {
        return this.vehicles;
    }
    getSortedArray(): T[] {
        return this.vehicles.sort(compareTwoObjectByBrand)
    }
    getVehiclesBySurname(surname: string): T[] {
        surname = surname.toLowerCase();
        return this.vehicles.filter(x => x.ownerInfo.surname.toLowerCase() === surname);
    }
    getShortInfo(): { VIN: string, fullName: string, registrationNumber: number }[] {
        let arr = this.vehicles.map(x => {

            return {
                VIN: x.VIN,
                fullName: x.ownerInfo.surname + x.ownerInfo.name + x.ownerInfo.middlename,
                registrationNumber: x.registrationNumber
            }
        }
        )
        return arr;
    }
}


function compareTwoObjectByBrand(a: Vehicle, b: Vehicle) {
    if (a.brand < b.brand) {
        return -1
    }
    if (a.brand > b.brand) {
        return 1;
    }
    return 0
}

export class Car implements Vehicle {
    brand: string;
    model: string;
    manufacturingYear: number;
    VIN: string;
    registrationNumber: number;
    ownerInfo: { name: string, surname: string, middlename: string };
    printVehicleInfo(): void {
        console.log(this.brand + " " + this.model + " " + this.manufacturingYear);
    }
    /**
     *
     */
    constructor(brand: string) {
        this.brand = brand;

    }

}