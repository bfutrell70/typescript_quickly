function getFinalPrice(price, discount) {
    return price - price / discount;
}
console.log(getFinalPrice(100, 20));
console.log(getFinalPrice(100, 10));
