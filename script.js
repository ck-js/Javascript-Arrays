
const cars= ["Honda", "Toyota", "Lexus"]
const firstCar = cars[0]; 
console.log(`The first car is a ${firstCar}`);

const passCode = [5, 2, 2, 6];
console.log(passCode);
passCode[0] = 3;
passCode[3] = 5;
console.log(passCode);

const strains = ["SGV", "Northern Lights", "Durban Poisan", "Laughing Buddha"];
strains.push("Wedding Cake", "Bubblegum");
let removeStrain = strains.pop();
console.log(removeStrain + "just sold out") 
const strainsLength = strains.length;
if (strainsLength <= 5) {
console.log("You have " + strainsLength +
 " strains left, time to stock up");

} else {
    console.log("You have " + strainsLength +
    " strains in stock, no need to stock up");
}
for (let i = 0; i < strainsLength; i++){
console.log(strains[i]);
}

const myNumbers = [];
for (let i = 1; i <= 1000; i++) {
myNumbers.push(i);
}
console.log(`There are now ${myNumbers.length} elements in the my number array.
Thanks to the for loop and the push array method with the loop initializer.`)
