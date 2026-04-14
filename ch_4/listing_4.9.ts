// Listing 4.9 - Using the interface without a generic type, page 82

interface Comparator {
    compareTo(value: any): number;
}

class Rectangle implements Comparator {
    compareTo(value: any): number {
        // the algorithm for comparing rectangles goes here
        return 0;
    }
}

class Triangle implements Comparator {
    compareTo(value: any): number {
        // the algorithm for comparing triangles goes here
        return 0;
    }
}0

const rectangle1 = new Rectangle();
const rectangle2 = new Rectangle();
const triangle = new Triangle();

rectangle1.compareTo(rectangle2);

// would result in a runtime error - triangle fits the any type of the compareTo() parameter
rectangle1.compareTo(triangle);