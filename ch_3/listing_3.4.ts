// Listing 3.4 - Using the super keyword, page 50

// If both the superclass and the subclass have constructors, the
// subclass constructor must invoke the constructor of the superclass using
// the super() method.
class Person {
    constructor(
        public firstName: string, 
        public lastName: string, 
        private age: number) {}

    sellStock(symbol: string, numberOfShares: number) {
        console.log(`Selling ${numberOfShares} of ${symbol}`);
    }
}

class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        age: number,
        public department: string
    ) {
        super(firstName, lastName, age);
    }

    sellStock(symbol: string, numberOfShares: number): void {
        super.sellStock(symbol, numberOfShares);

        this.reportToCompliance(symbol, numberOfShares);
    }

    reportToCompliance(symbol: string, numberOfShares: number) {
        console.log(`${this.lastName} from ${this.department} sold ${numberOfShares} shares of ${symbol}`);
    }
}

const empl = new Employee('Joe', 'Smith', 29, 'Accounting');
empl.sellStock('IBM', 100);