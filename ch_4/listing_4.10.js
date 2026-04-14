"use strict";
// Listing 4.10 - Using the interface with a generic type, page 83
class Rectangle {
    compareTo(value) {
        // the algorithm of comparing rectangles goes here
        return 0;
    }
}
class Triangle {
    compareTo(value) {
        // the algorithm of comparing triangles goes here
        return 0;
    }
}
const rectangle1 = new Rectangle();
const rectangle2 = new Rectangle();
const triangle = new Triangle();
rectangle1.compareTo(rectangle2);
rectangle1.compareTo(triangle);
