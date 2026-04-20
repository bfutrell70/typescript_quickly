// Listing 5.15 - A poor version of filterBy(), page 106

function filterBy<T>(
    property: any,
    value: any,
    array:T[]
) {
    return array.filter(item => item[property] === value);
}