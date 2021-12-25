const numberArray = [3, 4, 5, 6];
const newNumberArray = [7, 8, 9, ...numberArray]
console.log(newNumberArray);



const threeNumber = (a, b, c) => a + b + c;
console.log(threeNumber(10, 20, 30));
const newThreeNumber = [40, 50, 10]
console.log(threeNumber(...newThreeNumber));