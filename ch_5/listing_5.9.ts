// Listing 5.9 - The @logTrade method decorator, page 102

// the method must have three arguments:
// - target: an object that refers to the instantiated class that defines the method
// - propertyKey: the name of the method being decorated
// - descriptor: A descriptor of the method being decorated
// NOTE: The original code listing in the book didn't have argument types defiend.
// NOTE 2: With version 5+ of TypeScript, a method decorator has two parameters.
function logTrade(target: any, key: string, descriptor: PropertyDescriptor) {
    
    // stores the original code
    const originalCode = descriptor.value;

    // modified the code of the method being decorated
    descriptor.value = function() {
        console.log(`Invoked ${key} providing:`, arguments);
        
        // invokes the target method
        return originalCode.apply(this, arguments);
    }

    // returns the modified method
    return descriptor;
}

// Listing 5.10 - Using the @logTrade decorator, page 102-103

class Trade {

    // decorates the placeOrder() method.
    @logTrade
    placeOrder(stockName: string, quantity: number, operation: string, tradedID: number) {
        // the method implementation goes here
    }
}

const trade = new Trade();

// invokes placeOrder
trade.placeOrder("IBM", 100, "Buy", 123);