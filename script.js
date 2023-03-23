 let playerSelection;
 let computerSelection = computerPlay();   
let cpu_HP = 100;
let player_HP = 100;
//window.onload = function() {
  // document.getElementById("my_audio").play();
//}

 



// Create Random number from 1-3 (inclusive) if 1 Assign "Rock", 2 Assign "Paper" if 3 Assign Scissors
function computerPlay() {
 let computerChoice = Math.floor(Math.random()*(3 - 1 + 1)) + 1;
   
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
} 



// PLAY ROUND WITH ROCK SELECTED //

 function playRound_rock() {
    playerSelection = "Rock"; 
 playerSelection = playerSelection.toLowerCase();
 
  
 //console.log(playerScore);
 //console.log(computerScore);
 computerSelection = computerPlay();
 
 
rockBtnEl.removeEventListener('click', playRound_rock);


paperBtnEl.removeEventListener('click', playRound_paper);


scissorsBtnEl.removeEventListener('click', playRound_scissors);

 switch(computerSelection) {
     case "Paper":
         
         const para = document.createElement("p");
         const node = document.createTextNode("CPU chose paper.");
         para.appendChild(node);
         const para2 = document.createElement("p");
         const node2 = document.createTextNode("You take damage!");
         para2.appendChild(node2);

         function delayText1() {
            document.getElementById("place-text").appendChild(para);
         }
         
         function delayText2() {
            document.getElementById("place-text").appendChild(para2);
         }
     
         remover();
         delayText1();
         setTimeout(delayText2, 2000);
          //setTimeout(player_damage, 4000);
         setTimeout(player_displayChoice_rock_lose, 2000);
         setTimeout(cpu_displayChoice_paper_win, 2000);
         if ( player_HP === 20) {
		
            setTimeout(player_damage, 4000);
            setTimeout(game_Over_lose, 7000);
            } else {
             setTimeout(player_damage, 4000);
              setTimeout(remover, 6000);
              setTimeout(mainText, 7000);
              setTimeout(activate_Buttons, 9000);
            }
         break;
     case "Scissors":
         
         const para_scissors = document.createElement("p");
         const node_scissors = document.createTextNode("CPU chose scissors.");
         para_scissors.appendChild(node_scissors);
         const para2_scissors2 = document.createElement("p");
         const node2_scissors2 = document.createTextNode("CPU takes damage!");
         para2_scissors2.appendChild(node2_scissors2);

         function delayText_Scissors() {
            document.getElementById("place-text").appendChild(para_scissors);
         }

         function delayText_Scissors2() {
            document.getElementById("place-text").appendChild(para2_scissors2);
         }

         remover();
         delayText_Scissors();
         setTimeout(delayText_Scissors2, 2000);
         //setTimeout(cpu_damage, 5000);
         setTimeout(player_displayChoice_rock_win, 2000);
         setTimeout(cpu_displayChoice_scissors_lose, 2000);
         if ( cpu_HP === 20) {
		
            setTimeout(cpu_damage, 4000);
            setTimeout(game_Over_win, 7000);
            } else {
              setTimeout(cpu_damage, 5000);
              setTimeout(remover, 6000);
              setTimeout(mainText, 7000);
              setTimeout(activate_Buttons, 9000);
            }
      
     


         break;
         case "Rock":
            const para_rock = document.createElement("p");
            const node_rock = document.createTextNode("CPU chose rock.");
            para_rock.appendChild(node_rock);
            const para2_rock2 = document.createElement("p");
            const node2_rock2 = document.createTextNode("No one takes damage!");
            para2_rock2.appendChild(node2_rock2);
   
            function delayText_rock() {
               document.getElementById("place-text").appendChild(para_rock);
            }
            
            function delayText_rock2() {
               document.getElementById("place-text").appendChild(para2_rock2);
            }
        
            remover();
            delayText_rock();
            setTimeout(delayText_rock2, 2000);
            setTimeout(player_displayChoice_rock_win, 2000);
         setTimeout(cpu_displayChoice_rock_win, 2000);
            setTimeout(remover, 6000);
            setTimeout(mainText, 7000);
            setTimeout(activate_Buttons, 9000);
         break;  
 }

 


 

 }

 // PLAY ROUND WITH ROCK SELECTED //











// PLAY ROUND WITH PAPER SELECTED //

function playRound_paper() {
   playerSelection = "paper"; 
playerSelection = playerSelection.toLowerCase();

 
//console.log(playerScore);
//console.log(computerScore);
computerSelection = computerPlay();
rockBtnEl.removeEventListener('click', playRound_rock);


paperBtnEl.removeEventListener('click', playRound_paper);


scissorsBtnEl.removeEventListener('click', playRound_scissors);



switch(computerSelection) {
    case "Paper":
        
        const para = document.createElement("p");
        const node = document.createTextNode("CPU chose paper.");
        para.appendChild(node);
        const para2 = document.createElement("p");
        const node2 = document.createTextNode("No one takes damage!");
        para2.appendChild(node2);

        function delayText1() {
           document.getElementById("place-text").appendChild(para);
        }
        
        function delayText2() {
           document.getElementById("place-text").appendChild(para2);
        }
    
        remover();
        delayText1();
        setTimeout(delayText2, 2000);
        setTimeout(player_displayChoice_paper_win, 2000);
        setTimeout(cpu_displayChoice_paper_win, 2000);
        
        setTimeout(remover, 6000);
        setTimeout(mainText, 7000);
        setTimeout(activate_Buttons, 9000);

        break;
    case "Scissors":
        
        const para_scissors = document.createElement("p");
        const node_scissors = document.createTextNode("CPU chose scissors.");
        para_scissors.appendChild(node_scissors);
        const para2_scissors2 = document.createElement("p");
        const node2_scissors2 = document.createTextNode("You take damage!");
        para2_scissors2.appendChild(node2_scissors2);

        function delayText_Scissors() {
           document.getElementById("place-text").appendChild(para_scissors);
        }

        function delayText_Scissors2() {
           document.getElementById("place-text").appendChild(para2_scissors2);
        }

        remover();
        delayText_Scissors();
        setTimeout(delayText_Scissors2, 2000);
        setTimeout(player_displayChoice_paper_lose, 2000);
        setTimeout(cpu_displayChoice_scissors_win, 2000);
        //setTimeout(player_damage, 5000);
        if ( player_HP === 20) {
		
         setTimeout(player_damage, 4000);
         setTimeout(game_Over_lose, 7000);
         } else {
         setTimeout(player_damage, 4000);
           setTimeout(remover, 6000);
           setTimeout(mainText, 7000);
           setTimeout(activate_Buttons, 9000);
         }


        break;
        case "Rock":
           const para_rock = document.createElement("p");
           const node_rock = document.createTextNode("CPU chose rock.");
           para_rock.appendChild(node_rock);
           const para2_rock2 = document.createElement("p");
           const node2_rock2 = document.createTextNode("CPU takes damage!");
           para2_rock2.appendChild(node2_rock2);
  
           function delayText_rock() {
              document.getElementById("place-text").appendChild(para_rock);
           }
           
           function delayText_rock2() {
              document.getElementById("place-text").appendChild(para2_rock2);
           }
       
           remover();
           delayText_rock();
           setTimeout(delayText_rock2, 2000);
           setTimeout(player_displayChoice_paper_win, 2000);
        setTimeout(cpu_displayChoice_rock_lose, 2000);
           //setTimeout(cpu_damage, 5000);


           if ( cpu_HP === 20) {
		
            setTimeout(cpu_damage, 4000);
            setTimeout(game_Over_win, 7000);
            } else {
              setTimeout(cpu_damage, 4000);
              setTimeout(remover, 6000);
              setTimeout(mainText, 7000);
              setTimeout(activate_Buttons, 9000);

            break;}
      
}






}




// PLAY ROUND WITH PAPER SELECTED //












 

// PLAY ROUND WITH SCISSORS SELECTED //


function playRound_scissors() {
   playerSelection = "scissors"; 
playerSelection = playerSelection.toLowerCase();

 
//console.log(playerScore);
//console.log(computerScore);
computerSelection = computerPlay();


rockBtnEl.removeEventListener('click', playRound_rock);


paperBtnEl.removeEventListener('click', playRound_paper);


scissorsBtnEl.removeEventListener('click', playRound_scissors);

switch(computerSelection) {
    case "Paper":
        
        const para = document.createElement("p");
        const node = document.createTextNode("CPU chose paper.");
        para.appendChild(node);
        const para2 = document.createElement("p");
        const node2 = document.createTextNode("CPU take damage!");
        para2.appendChild(node2);

        function delayText1() {
           document.getElementById("place-text").appendChild(para);
        }
        
        function delayText2() {
           document.getElementById("place-text").appendChild(para2);
        }
    
        remover();
        delayText1();
        setTimeout(delayText2, 2000);
        setTimeout(player_displayChoice_scissors_win, 2000);
        setTimeout(cpu_displayChoice_paper_lose, 2000);
        //setTimeout(cpu_damage, 4000);
        
       
	if ( cpu_HP === 20) {
		
		setTimeout(cpu_damage, 4000);
		setTimeout(game_Over_win, 7000);
		} else {
        setTimeout(cpu_damage, 4000);
        setTimeout(remover, 6000);
        setTimeout(mainText, 7000);
        setTimeout(activate_Buttons, 9000);
      }

        
        break;
    case "Scissors":
        
        const para_scissors = document.createElement("p");
        const node_scissors = document.createTextNode("CPU chose scissors.");
        para_scissors.appendChild(node_scissors);
        const para2_scissors2 = document.createElement("p");
        const node2_scissors2 = document.createTextNode("No one takes damage!");
        para2_scissors2.appendChild(node2_scissors2);

        function delayText_Scissors() {
           document.getElementById("place-text").appendChild(para_scissors);
        }

        function delayText_Scissors2() {
           document.getElementById("place-text").appendChild(para2_scissors2);
        }

        remover();
        delayText_Scissors();
        setTimeout(delayText_Scissors2, 2000);
        setTimeout(player_displayChoice_scissors_win, 2000);
        setTimeout(cpu_displayChoice_scissors_win, 2000);
        
        setTimeout(remover, 6000);
        setTimeout(mainText, 7000);
        setTimeout(activate_Buttons, 9000);
    


        break;
        case "Rock":
           const para_rock = document.createElement("p");
           const node_rock = document.createTextNode("CPU chose rock.");
           para_rock.appendChild(node_rock);
           const para2_rock2 = document.createElement("p");
           const node2_rock2 = document.createTextNode("You take damage!");
           para2_rock2.appendChild(node2_rock2);
  
           function delayText_rock() {
              document.getElementById("place-text").appendChild(para_rock);
           }
           
           function delayText_rock2() {
              document.getElementById("place-text").appendChild(para2_rock2);
           }
       
           remover();
           delayText_rock();
           setTimeout(delayText_rock2, 2000);
           setTimeout(player_displayChoice_scissors_lose, 2000);
           setTimeout(cpu_displayChoice_rock_win, 2000);
           //setTimeout(player_damage, 4000);
           
	if ( player_HP === 20) {
		
		setTimeout(player_damage, 4000);
		setTimeout(game_Over_lose, 7000);
		} else {
        setTimeout(player_damage, 4000); 
        setTimeout(remover, 6000);
        setTimeout(mainText, 7000);
        setTimeout(activate_Buttons, 9000);
      }
        break;  
}






}








// PLAY ROUND WITH SCISSORS SELECTED //













 
//CPU DAMAGE FUNCTIONS  //

 function cpu_shrink() {
    let i = 0;
    if ( i == 0) {
        i = 1;
        const elem = document.getElementById("CPU_HP");
        const cpu_percent = document.getElementById("cpu-percentage");
        let id = setInterval(frame, 50);
        function frame() {
           if ( cpu_HP <= 80) {
            clearInterval(id);
            i=0;
           } else {
            cpu_HP--;
            elem.style.width = cpu_HP + "%";
            //elem.innerHTML = cpu_Hp;
            cpu_percent.innerHTML = cpu_HP + "%";
           }
        } 
    }
 }


 // Using same logic as shrinky to shrink from 75 to 50.

 
 function cpu_shrink2() {
    let i = 0;
    if ( i == 0) {
        i = 1;
        const elem = document.getElementById("CPU_HP");
        const cpu_percent = document.getElementById("cpu-percentage");
        let id = setInterval(frame, 50);
        function frame() {
           if ( cpu_HP<= 60) {
            clearInterval(id);
            i=0;
           } else {
            cpu_HP--;
            elem.style.width = cpu_HP + "%";
            //elem.innerHTML = cpu_Hp;
            const list = elem.classList;
            list.add("changeColor");
            elem.style.backgroundColor = "yellow";
            cpu_percent.innerHTML = cpu_HP + "%";
           }
        } 
    }
 }

 function cpu_shrink3() {
    let i = 0;
    if ( i == 0) {
        i = 1;
        const elem = document.getElementById("CPU_HP");
        const cpu_percent = document.getElementById("cpu-percentage");

        let id = setInterval(frame, 50);
        function frame() {
           if ( cpu_HP<= 40) {
            clearInterval(id);
            i=0;
           } else {
            cpu_HP--;
            elem.style.width = cpu_HP + "%";
            //elem.innerHTML = cpu_Hp;
            const list = elem.classList;
            list.add("changeColorRed");
            elem.style.backgroundColor = "red";
            cpu_percent.innerHTML = cpu_HP + "%";
           }
        } 
    }
 }

 function cpu_shrink4() {
    let i = 0;
    if ( i == 0) {
        i = 1;
        const elem = document.getElementById("CPU_HP");
        const cpu_percent = document.getElementById("cpu-percentage");

        let id = setInterval(frame, 50);
        function frame() {
           if ( cpu_HP<= 20) {
            clearInterval(id);
            i=0;
           } else {
            cpu_HP--;
            elem.style.width = cpu_HP + "%";
            //elem.innerHTML = cpu_Hp;
            const list = elem.classList;
            list.add("changeColorRed");
            elem.style.backgroundColor = "red";
            cpu_percent.innerHTML = cpu_HP + "%";
           }
        } 
    }
 }

 function cpu_shrink5() {
    let i = 0;
    if ( i == 0) {
        i = 1;
        const elem = document.getElementById("CPU_HP");
        const cpu_percent = document.getElementById("cpu-percentage");

        let id = setInterval(frame, 50);
        function frame() {
           if ( cpu_HP<= 0) {
            clearInterval(id);
            i=0;
           } else {
            cpu_HP--;
            elem.style.width = cpu_HP + "%";
           // elem.innerHTML = cpu_Hp;
            const list = elem.classList;
            list.add("changeColorRed");
            elem.style.backgroundColor = "red";
            cpu_percent.innerHTML = cpu_HP + "%";
           }
        } 
    }
 }


 function cpu_damage() {


    if (cpu_HP === 100) {
		cpu_shrink()
		
	} else if (cpu_HP === 80) {
		cpu_shrink2()
	
	} else if (cpu_HP === 60) {

		cpu_shrink3()

	} else if (cpu_HP === 40) {


		cpu_shrink4()
    
	 } else if (cpu_HP === 20) {

        cpu_shrink5()

		} 

		}



// CPU DAMAGE FUNCTIONS //











// Player DAMAGE FUNCTIONS //
function player_shrink() {
    let i = 0;
    if ( i == 0) {
        i = 1;
        const elem = document.getElementById("player_HP");
        const player_percent = document.getElementById("player-percentage");
        let id = setInterval(frame, 50);
        function frame() {
           if ( player_HP <= 80) {
            clearInterval(id);
            i=0;
           } else {
            player_HP--;
            elem.style.width = player_HP + "%";
           // elem.innerHTML = player_HP;
            player_percent.innerHTML = player_HP + "%";
           }
        } 
    }
 }


 // Using same logic as shrinky to shrink from 75 to 50.

 //
 function player_shrink2() {
    let i = 0;
    if ( i == 0) {
        i = 1;
        const elem = document.getElementById("player_HP");
        const player_percent = document.getElementById("player-percentage");
        let id = setInterval(frame, 50);
        function frame() {
           if ( player_HP<= 60) {
            clearInterval(id);
            i=0;
           } else {
            player_HP--;
            elem.style.width = player_HP + "%";
           // elem.innerHTML = player_HP;
            const list = elem.classList;
            list.add("changeColor");
            elem.style.backgroundColor = "yellow";
            player_percent.innerHTML = player_HP + "%";
           }
        } 
    }
 }

 function player_shrink3() {
    let i = 0;
    if ( i == 0) {
        i = 1;
        const elem = document.getElementById("player_HP");
        const player_percent = document.getElementById("player-percentage");
        const stop_audio = document.getElementById("my_audio");
        stop_audio.pause();

        let id = setInterval(frame, 50);
        function frame() {
           if ( player_HP<= 40) {
            clearInterval(id);
            i=0;
           } else {
            player_HP--;
            elem.style.width = player_HP + "%";
            //elem.innerHTML = player_HP;
            const list = elem.classList;
            list.add("changeColorRed");
            elem.style.backgroundColor = "red";
            player_percent.innerHTML = player_HP + "%";
            const play_low = document.getElementById("low_hp_music").play();
           }
        } 
    }
 }

 function player_shrink4() {
    let i = 0;
    if ( i == 0) {
        i = 1;
        const elem = document.getElementById("player_HP");
        const player_percent = document.getElementById("player-percentage");
        let id = setInterval(frame, 50);
        function frame() {
           if ( player_HP<= 20) {
            clearInterval(id);
            i=0;
           } else {
            player_HP--;
            elem.style.width = player_HP + "%";
           // elem.innerHTML = player_HP;
            const list = elem.classList;
            list.add("changeColorRed");
            elem.style.backgroundColor = "red";
            player_percent.innerHTML = player_HP + "%";
           }
        } 
    }
 }

 function player_shrink5() {
    let i = 0;
    if ( i == 0) {
        i = 1;
        const elem = document.getElementById("player_HP");
        const player_percent = document.getElementById("player-percentage");
        let id = setInterval(frame, 50);
        function frame() {
           if ( player_HP<= 0) {
            clearInterval(id);
            i=0;
           } else {
            player_HP--;
            elem.style.width = player_HP + "%";
           // elem.innerHTML = player_HP;
            const list = elem.classList;
            list.add("changeColorRed");
            elem.style.backgroundColor = "red";
            player_percent.innerHTML = player_HP + "%";
           }
        } 
    }
 }

 
 function player_damage() {


    if (player_HP === 100) {
		player_shrink()
		
	} else if (player_HP === 80) {
		player_shrink2()
	
	} else if (player_HP === 60) {

		player_shrink3()

	} else if (player_HP === 40) {


		player_shrink4()
    
	 } else if (player_HP === 20) {

			player_shrink5()

		} 

		}



// Player DAMAGE FUNCTIONS //









// CORE FUNCTIONALITY FUNCTIONS // 

function mainText() {
   const main_P = document.createElement("p");
   const node_main = document.createTextNode("Choose an Option!");
   main_P.appendChild(node_main);
   document.getElementById("place-text").appendChild(main_P);
   } 


   function game_Over_win() {
      rockBtnEl.removeEventListener('click', playRound_rock);
      paperBtnEl.removeEventListener('click', playRound_paper);
      scissorsBtnEl.removeEventListener('click', playRound_scissors);

      remover();
      const first_p = document.createElement("p");
      const first_node = document.createTextNode("You Won!");
      first_p.appendChild(first_node);
      document.getElementById("place-text").appendChild(first_p);

     setTimeout(play_Again, 2000)

   }

   function game_Over_lose() {
      rockBtnEl.removeEventListener('click', playRound_rock);
      paperBtnEl.removeEventListener('click', playRound_paper);
      scissorsBtnEl.removeEventListener('click', playRound_scissors);

      remover();
      const first_p = document.createElement("p");
      const first_node = document.createTextNode("You Lost....");
      first_p.appendChild(first_node);
      document.getElementById("place-text").appendChild(first_p);

     setTimeout(play_Again, 2000)

   }

   function play_Again() {
      const second_a = document.createElement('a');
      const second_node = document.createTextNode('Click Here to play again.');
      second_a.classList.add("test3")
      second_a.title = "Play Again!";
      second_a.href = "index.html";
      second_a.appendChild(second_node);
      
      document.getElementById("place-text").appendChild(second_a);   
      }

 function battleText() {
    const para = document.createElement("p");
    const node = document.createTextNode("CPU chose rock!");
    para.appendChild(node);
    document.getElementById("place-text").appendChild(para);
    
 }





// PLAYER  DISPLAY CHOICE AND SHAKING LOGIC PLAYER //


// ROCK //

function player_displayChoice_rock_win() {
    const img = document.getElementById("player-box")
    const list = img.classList;
    list.add("show-option-rock-win");
    
    setTimeout(player_removeChoice_rock_win, 4000);
   
}

function player_removeChoice_rock_win() {
   const img = document.getElementById("player-box")
    const list = img.classList;
    list.remove("show-option-rock-win");
   
}

function player_displayChoice_rock_lose() {
   const img = document.getElementById("player-box")
   const list = img.classList;
   list.add("show-option-rock-lose");
   
   setTimeout(player_removeChoice_rock_lose, 4000);
  
}

function player_removeChoice_rock_lose() {
  const img = document.getElementById("player-box")
   const list = img.classList;
   list.remove("show-option-rock-lose");
  
}


//  ROCK //




// PAPER //

function player_displayChoice_paper_win() {
   const img = document.getElementById("player-box")
   const list = img.classList;
   list.add("show-option-paper-win");
   
   setTimeout(player_removeChoice_paper_win, 4000);
  
}

function player_removeChoice_paper_win() {
  const img = document.getElementById("player-box")
   const list = img.classList;
   list.remove("show-option-paper-win");
  
}

function player_displayChoice_paper_lose() {
  const img = document.getElementById("player-box")
  const list = img.classList;
  list.add("show-option-paper-lose");
  
  setTimeout(player_removeChoice_paper_lose, 4000);
 
}

function player_removeChoice_paper_lose() {
 const img = document.getElementById("player-box")
  const list = img.classList;
  list.remove("show-option-paper-lose");
 
}


// PAPER //


// SCISSORS //

function player_displayChoice_scissors_win() {
   const img = document.getElementById("player-box")
   const list = img.classList;
   list.add("show-option-scissors-win");
   
   setTimeout(player_removeChoice_scissors_win, 4000);
  
}

function player_removeChoice_scissors_win() {
  const img = document.getElementById("player-box")
   const list = img.classList;
   list.remove("show-option-scissors-win");
  
}

function player_displayChoice_scissors_lose() {
  const img = document.getElementById("player-box")
  const list = img.classList;
  list.add("show-option-scissors-lose");
  
  setTimeout(player_removeChoice_scissors_lose, 4000);
 
}

function player_removeChoice_scissors_lose() {
 const img = document.getElementById("player-box")
  const list = img.classList;
  list.remove("show-option-scissors-lose");
 
}




// SCISSORS //




// PLAYER   DISPLAY CHOICE AND SHAKING LOGIC //























// CPU DISPLAY CHOICE AND SHAKING LOGIC //


// ROCK //

function cpu_displayChoice_rock_win() {
   const img = document.getElementById("cpu-box")
   const list = img.classList;
   list.add("show-option-rock-win");
   
   setTimeout(cpu_removeChoice_rock_win, 4000);
  
}

function cpu_removeChoice_rock_win() {
  const img = document.getElementById("cpu-box")
   const list = img.classList;
   list.remove("show-option-rock-win");
  
}

function cpu_displayChoice_rock_lose() {
  const img = document.getElementById("cpu-box")
  const list = img.classList;
  list.add("show-option-rock-lose");
  
  setTimeout(cpu_removeChoice_rock_lose, 4000);
 
}

function cpu_removeChoice_rock_lose() {
 const img = document.getElementById("cpu-box")
  const list = img.classList;
  list.remove("show-option-rock-lose");
 
}


//  ROCK //




// PAPER //

function cpu_displayChoice_paper_win() {
  const img = document.getElementById("cpu-box")
  const list = img.classList;
  list.add("show-option-paper-win");
  
  setTimeout(cpu_removeChoice_paper_win, 4000);
 
}

function cpu_removeChoice_paper_win() {
 const img = document.getElementById("cpu-box")
  const list = img.classList;
  list.remove("show-option-paper-win");
 
}

function cpu_displayChoice_paper_lose() {
 const img = document.getElementById("cpu-box")
 const list = img.classList;
 list.add("show-option-paper-lose");
 
 setTimeout(cpu_removeChoice_paper_lose, 4000);

}

function cpu_removeChoice_paper_lose() {
const img = document.getElementById("cpu-box")
 const list = img.classList;
 list.remove("show-option-paper-lose");

}


// PAPER //


// SCISSORS //

function cpu_displayChoice_scissors_win() {
  const img = document.getElementById("cpu-box")
  const list = img.classList;
  list.add("show-option-scissors-win");
  
  setTimeout(cpu_removeChoice_scissors_win, 4000);
 
}

function cpu_removeChoice_scissors_win() {
 const img = document.getElementById("cpu-box")
  const list = img.classList;
  list.remove("show-option-scissors-win");
 
}

function cpu_displayChoice_scissors_lose() {
 const img = document.getElementById("cpu-box")
 const list = img.classList;
 list.add("show-option-scissors-lose");
 
 setTimeout(cpu_removeChoice_scissors_lose, 4000);

}

function cpu_removeChoice_scissors_lose() {
const img = document.getElementById("cpu-box")
 const list = img.classList;
 list.remove("show-option-scissors-lose");

}




// SCISSORS //






// CPU DISPLAY CHOICE AND SHAKING LOGIC //



function remove_again() {
   const img = document.getElementById("player-box")
    const list = img.classList;
    
}


const rockBtnEl = document.getElementById("rock");
rockBtnEl.addEventListener('click', playRound_rock);

const paperBtnEl = document.getElementById("paper");
paperBtnEl.addEventListener('click', playRound_paper);

const scissorsBtnEl = document.getElementById("scissors");
scissorsBtnEl.addEventListener('click', playRound_scissors);



function removeText() {
   const para = document.getElementById("place-text");
   para.remove();
}

function remover() {
   const box = document.getElementById("place-text");
   while ( box.hasChildNodes()) {
      box.removeChild(box.firstChild);
   }
}


function show_player_choice() {
   const img = document.createElement("img");
   const src = document.getElementById("player-box");
   img.src = "images/rock.png"
   const list = img.classList;
   list.add("choice-styles")
   src.appendChild(img)

}



function activate_Buttons() {
   rockBtnEl.addEventListener('click', playRound_rock);

   paperBtnEl.addEventListener('click', playRound_paper);
   
   
   scissorsBtnEl.addEventListener('click', playRound_scissors);

}




// CORE FUNCTIONALITY FUNCTIONS // 






// OLD FUNCTIONS //
 // Loop playRound function 5 times, after 5 times display game over
// function game() {

  // for (let gameRound = 1; gameRound < 6; ++gameRound) {
     // playRound(playerSelection, computerSelection);
    //  console.log(gameRound);
     //  console.log(playerScore);  
       //console.log(computerScore);

   
       //if (gameRound == 5) {
         //  if (playerScore > computerScore) {
           //    alert('You win! You won '+ playerScore + ' Rounds ' + 'while the computer won, ' + computerScore + ' rounds.')
           //} else if (playerScore < computerScore) {
            //   alert('You Lose! You won '+ playerScore + ' Rounds ' + 'while the computer won ' + computerScore + ' rounds.')
           //} else if (playerScore == computerScore) {
            //   alert("It's a draw! You and the computer both won " + playerScore + ' rounds.')
          // }
          // else {
           //    alert('uh oh, something went wrong..');
           
       //}
   
  //  }
   //}

   //resetScore();    
//}

//function resetScore() {
 //  playerScore = 0;
 //  computerScore = 0;
   

//}


// OLD FUNCTIONS //