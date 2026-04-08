function calcTax2(state: string, income: number, dependents: number): number | undefined {
    if (state === 'NY') {
        return income * 0.06 - dependents * 500;
    } else if (state === 'NJ') {
        return income * 0.05 - dependents * 300;
    }
}

let tax3: number | undefined = calcTax2('NJ', 50000, 2);

function padLeft(value: string, padding: any): string {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }

    throw new Error(`expected string or number, get '${padding}'.`);
}

function padLeft2(value: string, padding: string | number): string {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
}

function padLeft3(value: string, padding: string | number): string {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    else {
        return padding;
    }
}

console.log(`'${padLeft("Hello world", 4)}'`);
console.log(`'${padLeft("Hello world", "John says ")}'`);
//console.log(padLeft("Hello world", true));

console.log(`'${padLeft2("Hello world", 4)}'`);
console.log(`'${padLeft2("Hello world", "John says ")}'`);
// console.log(padLeft2("Hello world", true));