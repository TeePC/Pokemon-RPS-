 let playerSelection = "Rock";
 let computerSelection = computerPlay();   
 let playerScore = 0;
 let computerScore = 0;



// Create Random number from 1-3 (inclusive) if 1 Assign "Rock", 2 Assign "Paper" if 3 Assign Scissors
function computerPlay() {
 let computerChoice = Math.floor(Math.random()*3) + 1;
   
    if (computerChoice == 1 ) {
        computerChoice = "Rock";
        return computerChoice;
    } else if ( computerChoice == 2) {
        computerChoice = "Paper";
        return computerChoice;
    } else {
        computerChoice = "Scissors";
        return computerChoice;
    } 
} //if 3 Assign "Scissors"

//Assuming playerSelection is Rock, if computerPlay() generates Paper, alert you lose. ETC
 function playRound(playerSelection, computerSelection) {
 playerSelection = playerSelection.toLowerCase();
  
 //console.log(playerScore);
 //console.log(computerScore);
 computerSelection = computerPlay();
 

 switch(computerSelection) {
     case "Paper":
         alert('You Lose! Paper beats Rock.');
         computerScore = ++computerScore;
         //console.log(computerScore);
         //console.log(playerScore);
         break;
     case "Scissors":
         alert('You Win! Rock beats Scissors.');
         playerScore = ++playerScore;
         //console.log(playerScore);
         //console.log(computerScore);
         break;
         case "Rock":
         alert('Draw! You both picked the same choice!');
         break;  
 }

 


 

 }

  // Loop playRound function 5 times, after 5 times display game over
 function game() {

    for (let gameRound = 1; gameRound < 6; ++gameRound) {
        playRound(playerSelection, computerSelection);
        console.log(gameRound);
        console.log(playerScore);  
        console.log(computerScore);

    
        if (gameRound == 5) {
            if (playerScore > computerScore) {
                alert('You win! You won '+ playerScore + ' Rounds ' + 'while the computer won, ' + computerScore + ' rounds.')
            } else if (playerScore < computerScore) {
                alert('You Lose! You won '+ playerScore + ' Rounds ' + 'while the computer won ' + computerScore + ' rounds.')
            } else if (playerScore == computerScore) {
                alert("It's a draw! You and the computer both won " + 'playerScore' + ' rounds.')
            }
            else {
                alert('uh oh, something went wrong..');
            
        }
    
     }
    }

    resetScore();    
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    

}
  //when game is over depending on score display one of these messages

   // if (gameRound == 5) {
       // if (playerScore > computerScore) {
       //     alert('You win! You won '+ playerScore + ' Rounds ' + 'while the computer won, ' + computerScore + ' rounds.')
      //  } else if (playerScore < computerScore) {
      //      alert('You Lose! You won '+ playerScore + ' Rounds ' + 'while the computer won ' + computerScore + ' rounds.')
    //   } else {
      //      alert('uh oh, something went wrong..');
        
  //  }

 //}