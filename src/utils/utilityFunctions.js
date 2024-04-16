export function getPrice(price) {
    price = price/100;
    if(Number.isInteger(price)) return price;
    else return price.toFixed(2);
}