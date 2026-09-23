// Hauptklasse der Fahrzeuge

class Vehicles{
    constructor(
        public name: string,
        public readonly id: number,
        public condidtion: string,
        protected pricePerMinute: number,
        public availability: string,
    ){}
}

// Erste Unterklasse für alle E-Fahrzeuge

class EVehicles extends Vehicles {
    constructor(
        name: string,
        id: number,
        condition: string,
        pricePerMinute: number,
        availability: string,
        public batteryLevel: number
    ){
        super(name, id,condition,pricePerMinute,availability);
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