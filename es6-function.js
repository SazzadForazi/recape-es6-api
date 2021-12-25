function add(a, b) {
    let sum = a + b;
    return sum;
}
console.log(add(6, 5));

// #using es6

var sum = (a, b) => {
    return a + b;
}
console.log(add(5, 5));



var sum = (a, b) => a + b;
console.log(add(10, 5)); 