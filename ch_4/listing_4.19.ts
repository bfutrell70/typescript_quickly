// Listing 4.19 - Using a higher-order function, page 91

const outerFunc = (someValue: number) => (multiplier: number) => someValue * multiplier;

// supplying someValue parameter
const innerFunc = outerFunc(10);

// supplying multiplier parameter
let result = innerFunc(5);
console.log(result);

result = innerFunc(2);
console.log(result);