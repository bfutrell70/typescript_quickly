/*
    This code does not work as descibed in the book.

    Running the code from http://mng.bz/vlM4 does work, but shows errors.
    Running the code from this file shows the message 
    
    "Hello Mr. undefined"

    instead of

    "Hello Mr. Smith".

    The issue could be related to the version of TypeScript used in the book
    versus the current version.
    - As of 4/16/2026, the version of TypeScript used on the link above is 6.02.
    - The book appears to be using TypeScript version 3.4.1.
*/

// defined on page 98, not within a code listing
type constructorMixin = { new(...args: any[]): {}};

// Listing 5.7 - Declaring the useSalutation decorator, page 99

// a factory function that takes one parameter - salutation
function useSalutation(salutation: string) {
    
    // the decorator's body
    return function <T extends constructorMixin> (target: T) {
        
        // redeclares the decorated class
        return class extends target {
            name: string;
            
            // adds a private property to the new class
            private message = "Hello " + salutation + this.name;

            // redeclares the method
            sayHello() {
                console.log(`${this.message}`)
            }
        }
    }
}


// Listing 5.8 - Using the decorated Greeter class, page 100

@useSalutation("Mr. ")
class Greeter {
    constructor(public name: string) {}

    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

const grt = new Greeter("Smith");
grt.sayHello();