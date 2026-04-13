"use strict";
// Figure 4.3 - An enum without the const keyword, page 75
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
const theNextMove = Direction.Down;
