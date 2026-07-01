// Exercise 1 - User Profile

const username = "Muthana";
const age = 40;
const isOnline = true;

console.log(`Welcome, ${username}! You are ${age} years old and currently 
    ${isOnline ? "online" : "offline"}.`);

// Exercise 2 - Shopping Receipt

const price = 150;
const quantity = 3;

const subtotal = price * quantity;
const tax = subtotal * 0.25;
const finalTotal = subtotal + tax;

console.log("Subtotal:", subtotal);
console.log("Tax:", tax);
console.log("Final Total:", finalTotal);

// Exercise 3 - Data Type Check

console.log(10 == "10");
console.log(10 === "10");

console.log(undefined == null);
console.log(undefined === null);

// Exercise 4 - Age Verification

const visitorAge = 16;
const isTeenDiscount = visitorAge >= 12 && visitorAge <= 18;
console.log(isTeenDiscount);

// Exercise 5 - Smart Thermostat

const roomTemperature = 22;

if (roomTemperature > 25) {
    console.log("Turning on the AC...");
} else if (roomTemperature >= 18 && roomTemperature <= 25) {
    console.log("Temperature is perfect.");
} else {
    console.log("Turning on the heater...");
}

