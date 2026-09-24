// basically alle imports aus Classes.js
import { RentalResult, Vehicles, EcoVehicles, EVehicles, EBike, ECar, EScooter, Bike } from "./Classes";

// Array mit allein verfügbaren Fahrzeugen
const vehicles: Vehicles[] = [
    new EBike("EBike 1", "001", "New", 0.20, "Free", 100),
    new EBike("EBike 2", "002", "New", 0.20, "In use", 100),
    new ECar("ECar 1", "003", "New", 0.20, "Free", 100),
    new ECar("ECar 2", "004", "New", 0.20, "In use", 100),
    new EScooter("EScooter 1", "005", "New", 0.20, "Free", 100),
    new EScooter("EScooter 2", "006", "New", 0.20, "Free", 100),
    new Bike("Bike 1", "007", "New", 0.20, "In use"),
    new Bike("Bike 2", "008", "New", 0.20, "Free")
];

//Verfügbarkeits funktionen

function allAvailableVehicles(): Vehicles[] {
    return vehicles.filter(vehicle => vehicle.availability === "Free");
}

function allAvailableECars(): Vehicles[] {
    return vehicles.filter(vehicle =>
         vehicle.availability === "Free" && vehicle instanceof ECar);
}

function allAvailableEScooters(): Vehicles[] {
    return vehicles.filter(vehicle =>
         vehicle.availability === "Free" && vehicle instanceof EScooter);
}

function allAvailableEBikes(): Vehicles[] {
    return vehicles.filter(vehicle =>
         vehicle.availability === "Free" && vehicle instanceof EBike);
}

function allAvailableBikes(): Vehicles[] {
    return vehicles.filter(vehicle =>
         vehicle.availability === "Free" && vehicle instanceof Bike);
}


















//testumgebung
/*
const allAvailable = allAvailableVehicles();
allAvailable.forEach(vehicle =>{
    if (vehicle instanceof EVehicles) {
        console.log(`Name: ${vehicle.name} ID: ${vehicle.id} Batterylevel: ${vehicle.batteryLevel}`)
    } else {
        console.log(`Name: ${vehicle.name} ID: ${vehicle.id}`)
    }
});

const availableECars = allAvailableECars();
availableECars.forEach(vehicle => {
    if (vehicle instanceof ECar) {
        console.log(`Name: ${vehicle.name} ID: ${vehicle.id} Batterylevel: ${vehicle.batteryLevel}`)
    }
});

const availableEScooters = allAvailableEScooters();
availableEScooters.forEach(vehicle => {
    if (vehicle instanceof EScooter) {
        console.log(`Name: ${vehicle.name} ID: ${vehicle.id} Batterylevel: ${vehicle.batteryLevel}`)
    }
});

const availableEBikes = allAvailableEBikes();
availableEBikes.forEach(vehicle => {
    if (vehicle instanceof EBike) {
        console.log(`Name: ${vehicle.name} ID: ${vehicle.id} Batterylevel: ${vehicle.batteryLevel}`)
    }
});

const availableBikes = allAvailableBikes();
availableBikes.forEach(vehicle => console.log(`Name: ${vehicle.name} ID: ${vehicle.id}`));


    try {
    const car = vehicles.find(v => v.id === "003");
    if (!car) {
        console.log("Fahrzeug nicht gefunden");
    } else {
        console.log(car.rent(60));
        console.log(car)
        car.returnVehicle();
        car.returnVehicle();
        console.log(car);
    }
} catch (error) {
    console.log("Fehler:", (error as Error).message);
}
*/