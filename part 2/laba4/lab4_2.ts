import {Transport} from "./lab4"

const homeOwner = new Transport.HomeOwner(
    "surname",
    "name",
    "middlename",
    new Date(),
    Transport.TypeOfDocument.FirstType,
    1,
    1);

homeOwner.printInfo()

const mySUV: Transport.SUV = new Transport.SUV(
    "brand",
    "model",
    1,
    "29r32982h",
    1,
    "brwuinienv");
mySUV.printVehicleInfo();

const sedanKia: Transport.SedanKia = new Transport.SedanKia();

sedanKia.printVehicleInfo();

const hondaShine: Transport.HomeOwner = new Transport.HomeOwner(
    "surname",
    "name",
    "middlename",
    new Date(),
    Transport.TypeOfDocument.FirstType,
    1,
    2,);

hondaShine.printInfo();


const vehicles: Transport.SedanKia[] = []
vehicles.push(new Transport.SedanKia());
vehicles.push(new Transport.SedanKia());

const myVehicleStorage: Transport.MyVehicleStorage<Transport.SedanKia> 
    = new Transport.MyVehicleStorage(vehicles);
    
console.log(myVehicleStorage.getVehicles());