// Listing 4.20 - Using the generic numFunc<t> function, page 92

type numFunc<T> = (arg: T) => (c: number) => number;

const noArgFunc: numFunc<void> = () => 
    (c: number) => c + 5;

const numArgFunc: numFunc<number> = (someValue: number) =>
    (multiplier: number) => someValue * multiplier;

const stringArgFunc: numFunc<string> = (someText: string) =>
    (padding: number) => someText.length + padding;

// numFunc returns a function (c: number) => number
// line below returns a function (x: number) => string, causing an error
const createSumString: numFunc<number> = () => (x: number) => 'Hello';