//Elements

//BIG Score
const player0= document.querySelector('.player--0')
const player1= document.querySelector('.player--1')
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice')

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


let scores,currentScore,activePlayer,playing //empty values


//SWITCH PLAYER FUNCTION


const switchPlayer= ()=>{
  //Switch to next player
 document.getElementById(`current--${activePlayer}`).textContent  = 0
 activePlayer = activePlayer === 0 ? 1 : 0 //reassign the active player, we star always from the player 0(1) so if the player is 0 thant switch to 1(2)
 currentScore = 0

 //Switch UI
 player0.classList.toggle('player--active')
 player1.classList.toggle('player--active')
}

//STARTING CONDITION
const init = ()=>{
scores = [ 0, 0]
currentScore = 0;
 activePlayer= 0;
 playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;

diceEl.classList.add('hidden');

player0.classList.remove('player--winner')
player1.classList.remove('player--winner')

player0.classList.add('player--active')
player1.classList.remove('player--active')
}




init()



//Rolling dice 

btnRoll.addEventListener('click' , () =>{

  if(playing){

    //Generate a random dice roll
    const dice =  Math.trunc( Math.random() * 6) + 1;
   
    //Display the dice generated
  
    diceEl.classList.remove('hidden');
    diceEl.src = `./img/dice-${dice}.png`
    
    if(dice !==1){
      //add dice to current score
      currentScore = currentScore + dice
      document.getElementById(`current--${activePlayer}`).textContent = currentScore
  
    }else{
      switchPlayer()
  
    }

  }

})



//BUTTON HOLD 

btnHold.addEventListener('click', ()=>{
  
  if(playing){
    // add current score to active player's score
     scores[activePlayer] += currentScore;
     //score[1] = score[1] + currentScore
  
     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    

  // check if player's score is >= 100

  if(scores[activePlayer] >= 100){
   //finish game 
   playing = false;
   document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
   document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
   diceEl.classList.add('hidden');


  }else{
    //switch player
   switchPlayer()
    }
  }
})


//New game 

btnNew.addEventListener('click', init) 