// Hauptklasse der Fahrzeuge
class Vehicles{
    constructor(
        public name: string,
        public readonly id: string,
        public condidtion: string,
        protected pricePerMinute: number,
        public availability: string,
    ){}
    
    //Miet Methode = Avail. Check und Preisausgabe
    rent(minutes: number): number {
        if (this.availability !== "Free") {
            throw new Error("This Vehicle is currently in use");
        }
        this.availability = "In use";
        return minutes * this.pricePerMinute;
    }
}

// Erste Unterklasse für alle E-Fahrzeuge
class EVehicles extends Vehicles {
    constructor(
        name: string,
        id: string,
        condition: string,
        pricePerMinute: number,
        availability: string,
        public batteryLevel: number
    ){
        super(name, id,condition,pricePerMinute,availability);
    }
    //Miet Methode = avail. check, preisausgabe,battarylevel check
    rent(minutes: number): number{
        if (this.batteryLevel < 30){
            throw new Error("This Vehicle is unavailable due to insufficient charge");
        }
        return super.rent(minutes);
    }

}
    // Unterklassen der Fahrzeugtypen
    class EScooter extends EVehicles{}
    class EBike extends EVehicles{}
    class ECar extends EVehicles{}

// Zweite Unterklasse für alle nicht E-Fahrzeuge
class EcoVehicles extends Vehicles {}

    // Unterklassen der Fahrzeugtypen
    class Bike extends EcoVehicles {}


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

//testumgebung

try {
    const vehicle = vehicles[0];
    if (vehicle){
        console.log(vehicle.rent(30));
    } else {
        console.log("Kein fahrzeug mit dem index gefunden");
        } 
    }
    catch (error){
    console.log("Fehler:", (error as Error).message);
};

try {
    const vehicle = vehicles[0];
    if (vehicle){
        console.log(vehicle.rent(30));
    } else {
        console.log("Kein fahrzeug mit dem index gefunden");
        } 
    }
    catch (error){
    console.log("Fehler:", (error as Error).message);
};
