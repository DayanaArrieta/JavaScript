//The forecast today is 293 Kelvin
const kelvin = 293;
// Temperature on celsius
const celsius = 293-273;
// Temperature on fahrenheit
let fahrenheit = celsius * (9/5) + 32
// Round variable
fahrenheit = Math.floor((celsius * (9/5) + 32))

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)