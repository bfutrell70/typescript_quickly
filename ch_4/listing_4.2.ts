// Listing 4.2 - The enum with auto-increment values, page 71

enum Weekdays {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday, 
    Friday,
    Saturday,
    Sunday
}

console.log(Weekdays.Sunday);

// Reversing numeric enums
console.log(Weekdays[6]);