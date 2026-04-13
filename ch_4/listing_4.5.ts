// Listing 4.5 - Declaring a string enum, page 73

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}


function move(where: Direction): void {
    if (where === Direction.Up) {
        // Do something
    }
}

// wrong argument type
// move("North");

move(Direction.Down);

// alternative to enum
function move2(direction: 'Up' | 'Down' | 'Left' | 'Right'): void {

}

// another alternative is a custom type
type Direction2 = 'Up' | 'Down' | 'Left' | 'Right';
function move3(direction: Direction2): void {

}

// compilation error
// move3('North');
move3('Up');