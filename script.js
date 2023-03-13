
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

