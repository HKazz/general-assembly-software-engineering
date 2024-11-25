
// console.log(): prints something for me

console.log("test");

let generalAssemblyBahrain = "Bahrain"

let name = "Hasan"
let age = 23
let city = "Manama"

console.log(`My name is ${name}, I'm ${age} and I'm from ${city} in Bahrain.`)

// -----------------------------------------------------------

// Control flow lesson

console.log(3==3)
console.log(3==4)
console.log(3<4)
console.log(3>4)
console.log(3=="3")
console.log(3==="3")

// if statements

let light = "green"

if(light == "green"){
    console.log("go")
}
else if(light == "yellow"){
    console.log("slow")
}
else if(light == "red"){
    console.log("stop")
}
else{
    console.log("go home")
}

// if statement excersize

let myNumber = 100
// let myNumber = prompt("Please enter a number")
// let myNumber = -100

if(myNumber>0){
    console.log(`${myNumber} is a positive number.`)
    // alert(`${myNumber} is a positive number.`)
}
else if(myNumber === 0){
    console.log(`${myNumber} is zero`)
    // alert(`${myNumber} is zero`)
}
else{
    console.log(`${myNumber} is a negative number.`)
    // alert(`${myNumber} is a negative number.`)
}

// for loop
// for(start; stop; increment/decrement)
for(let i = 1; i<=20; i++){
    expo = i**2
    console.log(`${i} squared is ${expo}`)
}