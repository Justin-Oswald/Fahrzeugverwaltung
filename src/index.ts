// basically alle imports aus Classes.js
import { RentalResult, Vehicles, EcoVehicles, EVehicles, EBike, ECar, EScooter, Bike } from "./Classes";

// Array mit allein verfügbaren Fahrzeugen
const vehicles: Vehicles[] = [
    new EBike("EBike 1", "001", "New", 0.20, "Free", 100),
    new EBike("EBike 2", "002", "New", 0.20, "Free", 100),
    new ECar("ECar 1", "003", "New", 0.20, "Free", 100),
    new ECar("ECar 2", "004", "New", 0.20, "Free", 100),
    new EScooter("EScooter 1", "005", "New", 0.20, "Free", 100),
    new EScooter("EScooter 2", "006", "New", 0.20, "Free", 100),
    new Bike("Bike 1", "007", "New", 0.20, "Free"),
    new Bike("Bike 2", "008", "New", 0.20, "Free")
];

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