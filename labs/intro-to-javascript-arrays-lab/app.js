// exercise 1
const foods = []
console.log('Exercise 1 result:', foods)

// exercise 2
foods.push("pizza","cheeseburger")
console.log('Exercise 2 result:',foods)

// exercise 3
foods.unshift("taco")
console.log('Exercise 3 result:',foods)

// exercise 4
favFood = foods[1]
console.log("Exercise 4 result:",favFood)

// exercise 5
foods.splice(2,0,"tofu")
console.log('Exercise 5 result:',foods)

// exercise 6
foods.splice(1,1,'sushi','cupcake')
console.log('Exercise 6 result:',foods)

// exercise 7
const yummy = foods.slice(1,3)
console.log('Exercise 7 result',yummy)

// exercise 8
const soyIdx = foods.indexOf('tofu')
console.log('Exercise 8 result:',soyIdx)

// exercise 9
let allFoods = foods.join('->')
console.log('Exercise 9 result:',allFoods)

// exercise 10
let hasSoup = foods.includes('soup')
console.log('Exercise 10 result:',hasSoup)

// exercise 11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]

const odds = []

for(let number of nums){
    if(number % 2 !==0){
        odds.push(number)
    }
}
console.log('Exercise 11 result:', odds)

// exercise 12
const fizz = []
const buzz = []
const fizzbuzz = []

for(let number of nums){
    if(number % 3 == 0){
        fizz.push(number)
    }
    else if(number % 5 == 0){
        buzz.push(number)
    }
    else if(number % 5 == 0 && number % 3 == 0){
        fizzbuz.push(number)
    }
}
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

// exercise 13
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
]

const numList = numArrays[numArrays.length-1]
console.log('Exercise 13 result:', numList);

// exercise 14
let num = numArrays[2][1]
console.log('Exercise 14 result:',num)

// exercise 15
let total =0
numArrays.forEach((num)=>{
    num.forEach((innerValue)=>{
        total+=innerValue
    })
    
})

console.log(total)