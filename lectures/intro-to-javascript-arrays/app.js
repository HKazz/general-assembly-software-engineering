console.log("test")
/*
Data types in Javascript:
1. Strings
2. Number
3. Boolean
4. null
5. undefined
6. Array
*/
// Arrays are a collection of ordered values
// declaring an array
const myStudents = ["Adel","Sara","Abdulrahman",11,true,199]
console.log(myStudents)
console.log(myStudents[4])
// get the length of the array
console.log(myStudents.length)
// fetches the last element in the array
console.log(myStudents[myStudents.length-1])
// push(): add element to end of array
myStudents.push("Ali")
console.log(myStudents)
// remove an element from the end of the array
myStudents.pop()
console.log(myStudents)
// changing first element
myStudents[0] = "Husain"
myStudents[1] = "Ahmed"
console.log(myStudents)
const mySecondArray = [[1,2,3],[4,5,6],[11,12,13]]
console.log(mySecondArray)
console.log(mySecondArray[1][1])
console.log(myStudents)
// shift(): removes from the beggenning of array
myStudents.shift()
console.log(myStudents)
console.log(myStudents.indexOf("Abdulrahman"))
// unshift(): add to beggening of array
myStudents.unshift("Sara")
console.log(myStudents)
// splice(start,deleteCount,elementToAdd)
myStudents.splice(4,1,"Abdullah","Kareem")
console.log(myStudents)
// myStudents[1]= "new srudet"
// console.log(myStudents)
mySecondArray[0].splice(0,1,"Ali")
console.log(mySecondArray)

// 3 ways of looping through an array

for(let i = 0; i<myStudents.length; i++){
    console.log(myStudents[i])
}

console.log("============================")

// for of

for(let oneStudent of myStudents){
    console.log(oneStudent)
}

console.log("============================")

// argument of forEach is a function

// myStudents.forEach(function(oneStudent){
//     console.log(oneStudent)
// })

// written as an arrow function
myStudents.forEach((oneStudent,index) =>{
    console.log(oneStudent + " is at the index of " + index)
})

// combines all elements into a string
console.log(myStudents.join("-"))
let myString = "ahmed,abdullah,kareem,adel"
console.log(myString)
console.log(myString.split(","))
