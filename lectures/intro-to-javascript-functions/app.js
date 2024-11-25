// D.R.Y.: DONT REPEAT YOURSELF

// There are 2 parts with working with functions
// 1. Function declaration/definition

function addTwoNumbers(num1, num2){
    // instructions or actions
    console.log(num1+num2)
}

// 2. Calling of the function
addTwoNumbers(10, 20)

// -------------------------------------
function planetHasWater(planet){
    if(planet.toLowerCase() === 'mars' || planet.toLowerCase() === 'earth'){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

planetHasWater('Mars')
planetHasWater('mars')
planetHasWater('Earth')
planetHasWater('earth')
planetHasWater('mercury')
planetHasWater('Pluto')

// Function
function computeArea(width, height){
    let result = width*height
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${result.toLocaleString()} square units.`
}

// Funtion Expression
const computeArea2 = function(width, height){
    let result = width*height
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${result.toLocaleString()} square units.`
}

// Arrow Functions
const computeArea3 = (width, height) => {
    let result = width*height
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${result.toLocaleString()} square units.`
}

// 3 features of arrow function
// 1. if we have 1 line code we don't need the curly brackets 
// 2. if we have 1 line code we don't need the return
// 3. if we have 1 parameter, we don't need paranthesis

console.log(computeArea(250,10))
console.log(computeArea2(250,80))
console.log(computeArea3(300, 400))