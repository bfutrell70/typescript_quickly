// Listing 4.10 - Using the interface with a generic type, page 83

interface Comparator <T> {
    compareTo(value: T): number;
}

class Rectangle implements Comparator<Rectangle> {
    width!: number;
    height!: number;

    compareTo(value: Rectangle): number {
        // the algorithm of comparing rectangles goes here
        return 0;
    }
}

class Triangle implements Comparator<Triangle> {
    side1!: number;
    side2!: number;
    side3!: number;

    compareTo(value: Triangle): number {
        // the algorithm of comparing triangles goes here
        return 0;
    }
}

const rectangle1 = new Rectangle();
const rectangle2 = new Rectangle();
const triangle = new Triangle();

rectangle1.compareTo(rectangle2);

// on page 84 of the book, it mentiones that this would have an error
// "Argument of type 'Triangle' is not assignable to parameter of type 'Rectangle'"
// Before I added properties to the Rectangle and Triangle classes no error occurred on the
// line below. Once the properties between the two classes were different the error appeared.
rectangle1.compareTo(triangle);