// Listing 5.4 - Declaring a custom UIcomponent decorator, page 97

// decorator factory
function UIcomponent(html: string) {
    console.log(`The decorator recieved ${html} \n`);

    // decorator function
    return function(target: Function) {
        console.log(`Someone wants to create a UI component from\n ${target}`);
    }
}

// Listing 5.5 - Applying a custom UIcomponent decorator, page 98

@UIcomponent("<h1>Hello Shopper!</h1>")
class Shopper {
    constructor(private name: string) {}
}