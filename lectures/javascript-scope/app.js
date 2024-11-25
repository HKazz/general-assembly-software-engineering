// 2 main scopes
// 1. Global Scope
// 2. Block Scope
// 3. Function Scope

function addTwoNumbers(){
    let num1 = 10
    let num2 = 20

    return num1 + num2
}

addTwoNumbers()
console.log(addTwoNumbers())


// function scope explained
function thirdFunction(){
}
    
    if(true){
        var myNumber = 100
    }

console.log(myNumber)


