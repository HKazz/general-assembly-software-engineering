// isAdult() function
// function isAdult(age){
//     if(age >= 18){
//         console.log('Adult')
//     }
//     else{
//         console.log('Minor')
//     }
// }
const isAdult = age => {
    if(age >= 18){
        return 'Adult'
    }
    else{
        return 'Minor'
    }
}
console.log(isAdult(25))
console.log(isAdult(5))

// isCharAVowl() Function
const isCharAVowl = letter => {
    if(letter.length > 1){
        return 'Please enter only one character'
    }
    else if(letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u'){
        return true
    }
    else{
        return false
    }
}
console.log(isCharAVowl('a'))
console.log(isCharAVowl('and'))

// generateEmail() Function
const generateEmail = (name, domain) => {
    return `${name}@${domain}`
}
console.log(generateEmail('hasan','gmail.com'))

// greetUser() Function
const greetUser = (name,timeOfDay) => {
    return `Good ${timeOfDay}, ${name}!`
}

console.log(greetUser('Hasan', 'Morning'))
console.log(greetUser('Hasan', 'Afternoon'))
console.log(greetUser('Hasan', 'Evening'))

// maxOfThree() Function
const maxOfThree = numbers => {
    let heighest = Math.max(...numbers)
    return heighest
}

console.log(maxOfThree([1,5,25,88]))

// calculateTip() Function
const calculateTip = (billAmount, tipPercentage) => {
    return (billAmount*tipPercentage/100);
}
console.log(calculateTip(50,20))
console.log(calculateTip(150,5))

// convertTemperature() Function
const convertTemperature = (temperature, scale) =>{
    if(scale.toLowerCase() === 'f'){
        return ((temperature-32)*5)/9;
    }
    else if(scale.toLowerCase() === 'c'){
        return ((temperature*9)/5)+32;
    }
}
console.log(convertTemperature(40,'c'))
console.log(convertTemperature(90,'f'))

// basicCalculator() Function
const basicCalculator = (num1, num2, operation) => {
    if(operation.toLowerCase() === 'add'){
        return num1+num2
    }
    if(operation.toLowerCase() === 'subtract'){
        return num1-num2
    }
    if(operation.toLowerCase() === 'multiply'){
        return num1*num2
    }
    if(operation.toLowerCase() === 'divide'){
        return num1/num2
    }
}

console.log(basicCalculator(1,2,'add'))
console.log(basicCalculator(2,2,'subtract'))
console.log(basicCalculator(4,2,'divide'))
console.log(basicCalculator(5,2,'multiply'))

// calculateGrade Function
const calculateGrade = score => {
    if(score>= 90){
        return 'A'
    }
    else if(score>=80 && score<90){
        return 'B'
    }
    else if(score>=70 && score<80){
        return 'C'
    }
    else if(score>=60 && score<69){
        return 'D'
    }
    else if(score<60){
        return 'F'
    }
}

console.log(calculateGrade(90))
console.log(calculateGrade(82))
console.log(calculateGrade(72))
console.log(calculateGrade(62))
console.log(calculateGrade(52))

// createUsername() Function
const createUsername = (firstName, lastName) => {
    total = firstName.length+lastName.length
    return firstName.slice(0,3)+lastName.slice(0,3)+total
}

console.log(createUsername('hasan','kazerooni'))
console.log(createUsername('omar','kamal'))

// numArg() Function
const numArgs = (...params) =>{
    return params.length
}

console.log(numArgs(1,2,3,4,5))
console.log(numArgs(1,2,3,4,5,6,7))