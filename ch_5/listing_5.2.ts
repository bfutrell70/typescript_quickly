// Listing 5.2 - Declaring a custom whoAmI decorator, page 96

function whoAmI(target: Function): void {
    console.log(`You are: \n${target}`);
}

// Listing 5.3 - Applying the decorator whoAmI to a class, page 97

@whoAmI
class Friend {
    constructor(private name: string, private age: number) {}
}