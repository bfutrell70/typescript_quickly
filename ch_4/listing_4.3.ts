// Listing 4.3 - Converting temperature without enums, page 72

function convertTemperature(temp: number, fromTo: string): number {
    return ('FtoC' === fromTo) ?
        (temp - 32) * 5.0 / 9.0 :
        temp * 9.0 / 5.0 + 32;
}

console.log(`70F is ${convertTemperature(70, 'FtoC')}C`);
console.log(`21C is ${convertTemperature(21, 'CtoF')}F`);
console.log(`35C is ${convertTemperature(35, 'ABCD')}F`);