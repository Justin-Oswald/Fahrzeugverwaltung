// Interface für meine rent rückgabe
export interface RentalResult {
    name: string;
    price: number;
};

// Hauptklasse der Fahrzeuge
export class Vehicles{
    constructor(
        public name: string,
        public readonly id: string,
        public condidtion: string,
        protected pricePerMinute: number,
        public availability: string,
    ){};
    
    //Miet Methode = Avail. Check und Preisausgabe
    rent(minutes: number): RentalResult {
        if (this.availability !== "Free") {
            throw new Error("This Vehicle is currently in use");
        }
        this.availability = "In use";
        return { name: this.name, price: minutes * this.pricePerMinute };
    };
    //Returnmethode aller fahrzeuge
    returnVehicle(){
        if (this.availability !== "In use"){
            throw new Error("This Vehicle has not been rented yet!")
        }
        this.availability = "Free";
    }
}

// Erste Unterklasse für alle E-Fahrzeuge
export class EVehicles extends Vehicles {
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
    rent(minutes: number): RentalResult{
        if (this.batteryLevel < 30){
            throw new Error("This Vehicle is unavailable due to insufficient charge");
        }
        const price = super.rent(minutes);
        this.batteryLevel -= minutes;
        return price;
    }
    //Returnmethode alle E fahrzeuge mit voll ladung
    returnVehicle(){
        super.returnVehicle();
        this.batteryLevel = 100;
    }

}
    // Unterklassen der Fahrzeugtypen
    export class EScooter extends EVehicles{}
    export class EBike extends EVehicles{}
    export class ECar extends EVehicles{}

// Zweite Unterklasse für alle nicht E-Fahrzeuge
export class EcoVehicles extends Vehicles {}

    // Unterklassen der Fahrzeugtypen
    export class Bike extends EcoVehicles {}


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
