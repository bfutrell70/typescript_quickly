"use strict";
// Listing 2.24 - Using a discriminated union
function area(shape) {
    switch (shape.kind) {
        case "rectangle": return shape.height * shape.width;
        case "circle": return Math.PI * shape.radius ** 2;
    }
}
const myRectangle = { kind: "rectangle", width: 10, height: 10 };
console.log(`Rectangle's area is ${area(myRectangle)}`);
const myCircle = { kind: "circle", radius: 10 };
console.log(`Circle's area is ${area(myCircle)}`);
