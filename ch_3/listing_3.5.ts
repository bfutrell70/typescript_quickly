// Listing 3.5 - The abstract Person class, page 52
abstract class Person {
    constructor(public name: string) {}

    changeAddress(newAddress: string): void {
        console.log(`Changing address to ${newAddress}`);
    }

    giveDayOff(): void {
        console.log(`Giving a day off to ${this.name}`);
    }

    promote(percent: number) {
        this.giveDayOff();
        this.increasePay(percent);
    }

    // declare an abstract method
    // implementation is left to the subclasses
    abstract increasePay(percent: number): void;
}

// Listing 3.6 - Descendants of the Person class, page 53
class Employee extends Person {
    increasePay(percent: number): void {
        console.log(`Increasing the salary of ${this.name} by ${percent}%`);
    }
}

class Contractor extends Person {
    increasePay(percent: number): void {
        console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
    }
}

// Listing 3.7 - Running the promotion campaign, page 53
const workers: Person[] = [];

workers[0] = new Employee('John');
workers[1] = new Contractor('Mary');

workers.forEach(worker => worker.promote(5));