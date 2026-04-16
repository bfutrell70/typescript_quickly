// Listing 5.6 - Undecorated Greeter class, page 99

class Greeter {
    constructor(public name: string) {

    }

    sayHello(): void {
        console.log(`Hello ${this.name}`);
    }
}

const grt = new Greeter('John');
grt.sayHello();
