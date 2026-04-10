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