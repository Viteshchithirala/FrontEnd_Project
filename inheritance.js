let vehicle = {
    hasWheels: true,
    startEngine() {
        console.log("Engine started");
    }
};

let car = {
    doors: 4,
    __proto__: vehicle
};

let electricCar = {
    batteryCapacity: "75 kWh",
    __proto__: car
};

// Accessing properties and methods through the prototype chain
car.startEngine();  // Output: "Engine started"
console.log(electricCar.batteryCapacity);  // Output: "75 kWh"
console.log(electricCar.doors);  // Output: 4
console.log(electricCar.hasWheels);  // Output: true
