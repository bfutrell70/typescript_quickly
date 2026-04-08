function calcTax2(state, income, dependents) {
    if (state === 'NY') {
        return income * 0.06 - dependents * 500;
    }
    else if (state === 'NJ') {
        return income * 0.05 - dependents * 300;
    }
}
var tax3 = calcTax2('NJ', 50000, 2);
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("expected string or number, get '".concat(padding, "'."));
}
function padLeft2(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
}
console.log("'".concat(padLeft("Hello world", 4), "'"));
console.log("'".concat(padLeft("Hello world", "John says "), "'"));
//console.log(padLeft("Hello world", true));
console.log("'".concat(padLeft2("Hello world", 4), "'"));
console.log("'".concat(padLeft2("Hello world", "John says "), "'"));
// console.log(padLeft2("Hello world", true));
