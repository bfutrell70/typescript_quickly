// Listing 3.13 - The MotorVehicle Interface, page 60
interface MotorVehicle {
    startEngine(): boolean;
    stopEngine(): boolean;
    brake(): boolean;
    accelerate(speed: number): void;
    honk(howLong: number): void;
}

// won't compile because the interface methods aren't implemented
// class BadCar implements MotorVehicle {
//
// }

// Listing 3.14 - A class that implements MotorVehicle
class Car implements MotorVehicle {
    startEngine(): boolean {
        return true;
    }
    stopEngine(): boolean {
        return true;
    }
    brake(): boolean {
        return true;
    }
    accelerate(speed: number): void {
        console.log(`Driving Faster`);
    }
    honk(howLong: number): void {
        console.log(`Beep beep yeah!`);
    }
}

const car = new Car();
car.startEngine();
car.honk(5);

// alternative declaration, not needed since type inference is used to
// determine the variable type
const car2: Car = new Car();

// only methods declared in the MotorVehicle interface would
// be callable within car3
const car3: MotorVehicle = new Car();

// Listing 3.15 - Flyable and Swimmable interfaces, page 62
interface Flyable {
    fly(howHigh: number): void;
    land(): void;
}

interface Swimmable {
    swim(howFar: number): void;
}

// Listing 3.16 - A car with three interfaces, page 62
class Car2 implements MotorVehicle, Flyable, Swimmable {
    startEngine(): boolean {
        return true;
    }
    stopEngine(): boolean {
        return true;
    }
    brake(): boolean {
        return true;
    }
    accelerate(speed: number): void {
        console.log(`Driving Faster`);
    }
    honk(howLong: number): void {
        console.log(`Beep beep yeah!`);
    }
    fly(howHigh: number): void {
        console.log(`How high can I fly?`);
    }
    land(): void {
        throw new Error("Landing the car!");
    }
    swim(howFar: number): void {
        throw new Error("Glub glub.");
    }

}

// Listing 3.17 - A class that extends and implements
class SecretServiceCar extends Car implements Flyable, Swimmable {
    fly(howHigh: number): void {
        console.log(`How high can I fly?`);
    }
    land(): void {
        throw new Error("Landing the car!");
    }
    swim(howFar: number): void {
        throw new Error("Glub glub.");
    }
}