// Section 2.4 - A mini project
class Dog {
    constructor(readonly name: string) {

    }

    sayHello(): string {
        return "Dog says hello!";
    }
}

class Fish {
    constructor(readonly name: string) {

    }

    dive(howDeep: number): string {
        return `Fish is diving to ${howDeep} meters`;
    }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string | undefined {
    if (pet instanceof Dog) {
        return pet.sayHello();
    }
    else if (pet instanceof Fish) {
        return 'Fish cannot talk, sorry';
    }
}

const myDog = new Dog('Sammy');
const myFish = new Fish('Dimpsey');

console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
//console.log(talkToPet({ name: 'John'}));