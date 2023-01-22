function getComputerChoice(){
    let num = Math.floor(Math.random()*3)

    if(num === 1)
    {
        return "rock"
    }

    else if (num === 2)
    {
        return "paper"
    }

    else
    {return "scissors"}
}


let computerSelection = getComputerChoice()

function logic(p, c){

    playerSelection = p.toLowerCase()
    computerSelection = c.toLowerCase()

   if(playerSelection==="rock" && computerSelection === "scissors")
   {
    return `You Won! ${playerSelection} beats ${computerSelection}`
   }
   else if(playerSelection==="scissors" && computerSelection === "paper")
   {
    return `You Won! ${playerSelection} beats ${computerSelection}`
   }
   else if(playerSelection==="paper" && computerSelection === "rock")
   {
    return `You Won! ${playerSelection} beats ${computerSelection}`
   }

   else if(playerSelection==="rock" && computerSelection === "paper")
   {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
   }
   else if(playerSelection==="scissors" && computerSelection === "rock")
   {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
   }
   else if(playerSelection==="paper" && computerSelection === "scissors")
   {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
   }
   else if (playerSelection === computerSelection)
   {
    return "Tie"
   }
}

function game(){
    
    let array = []

    for( let i = 0; i<5; i++ )
    {
       array[i] = logic(prompt ("rock paper scissor"), getComputerChoice())

    }

    return array
}


console.log(game())