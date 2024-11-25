// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice
//    The match result - win/lose/tie
//    A result message - display who won that round

// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors")
//    We'll need a reference to a DOM element to display messages

// 3) Handle a player clicking a button

// 4) Handle generating random selections for the computer player

// 5) Compare the player choice to the computer choice, and check for a winner

// 6) Render a win/lose/tie message to the player 
//    Include both player and computer selections in the message
//    Clearly indicate who won

const choices = ['rock', 'paper', 'scissors']

let playerChoice
let computerChoice
let msg

const resultDisplayElement = document.querySelector('#result-display')
console.log(resultDisplayElement)

const buttonChoicesElement = document.querySelectorAll('.button-choice')

const compare = () =>{
    // TIE CONDITION
    if(playerChoice === computerChoice){
        msg = 'Tie'
        console.log(msg)
        resultDisplayElement.textContent = `Both players chose ${playerChoice}. ${msg}`
        resultDisplayElement.style.color = 'black'
    }
    // WIN CONDITIONS
    else if(playerChoice === choices[0] && computerChoice === choices[2]){
        msg = 'You win'
        console.log(msg)
        resultDisplayElement.style.color = 'green'
    }
    // WIN CONDITIONS
    else if(playerChoice === choices[1] && computerChoice === choices[0]){
        msg = 'You win'
        console.log(msg)
        resultDisplayElement.style.color = 'green'
    }
    // WIN CONDITIONS
    else if(playerChoice === choices[2] && computerChoice === choices[1]){
        msg = 'You win'
        console.log(msg)
        resultDisplayElement.style.color = 'green'
    }
    // LOSE CONDITION
    else{
        msg = 'You lose, try again'
        console.log(msg)
        resultDisplayElement.style.color = 'red'
    }
}

const play = (event)=>{
    playerChoice = event.target.id
    console.log(playerChoice)
    const randomIndex = Math.floor(Math.random() * 3)
    computerChoice = choices[randomIndex]
    console.log("Player choice equals: " + playerChoice)
    console.log("Computer choice equals: " + computerChoice)
    compare()
    resultDisplayElement.textContent = `Player Choice is ${playerChoice} & Computer Choice is ${computerChoice}. ${msg}`

}

buttonChoicesElement.forEach((button)=>{
    button.addEventListener('click', play)
})