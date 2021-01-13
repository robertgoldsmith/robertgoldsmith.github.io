/** ----------------------
  MODAL
----------------------- **/

const openModalBtn = document.getElementById("open-modal")
const closeModalBtn = document.getElementById("close-modal")
const overlay = document.getElementById("overlay")
const modal = document.getElementById("modal")


openModalBtn.addEventListener("click", function() {
  overlay.style.display = "block";
  
  document.addEventListener("click", function(event) {
    console.log(event.target)
    if(event.target === overlay){
      overlay.style.display = "none";
    }
  })
})

closeModalBtn.addEventListener("click", function() {
  document.getElementById("overlay").style.display = "none";
})


/** ----------------------
  SEARCH BAR
----------------------- **/

const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("keyup", function(event) {
  // at each keyup event, the target input's value
  // is set lower case. The *searchQuery* variable 
  // changes on every keyup.
  let searchQuery = event.target.value.toLowerCase();
  // get HTMLCollection
  let allNamesDOMCollection = document.getElementsByClassName('name');
  
  for (let i = 0; i < allNamesDOMCollection.length; i++) {
    // set each name to lowercase
    const currentName = allNamesDOMCollection[i].textContent.toLowerCase();
    // conditional, does indexed name include any of searchQuery? 
    if(currentName.includes(searchQuery.toLowerCase())){
        allNamesDOMCollection[i].style.display = 'block'
    } else {
        allNamesDOMCollection[i].style.display = 'none'
    }
  }
});

/** ----------------------
  CAROUSEL
----------------------- **/

const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

/** ----------------------
  DICE GAME
----------------------- **/

// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

// Flip button
function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function() {
  const randomNumber = Math.floor(Math.random() * 6) + 1

  if (player1Turn) {
    player1Score += randomNumber
    player1Scoreboard.textContent = player1Score
    player1Dice.textContent = randomNumber
    player1Dice.classList.remove("active")
    player2Dice.classList.add("active")
    message.textContent = "Player 2 Turn"
  } else {
    player2Score += randomNumber
    player2Scoreboard.textContent = player2Score
    player2Dice.textContent = randomNumber
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    message.textContent = "Player 1 Turn"
  }
  
  if (player1Score >= 20) {
    message.textContent = "Player 1 Won 🥳"
    showResetButton()
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 Won 🎉"
    showResetButton()
  }
  // Flip turn true, false, true, false, true.....etc.
  player1Turn = !player1Turn
})

// reset the board 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}


/** ----------------------
  SNAKE
----------------------- **/

// ---- variables ------------------------------
const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const scoreDisplay = document.getElementById('score')
let squares = []
let currentSnake = [2,1,0]
let direction = 1
const width = 10
let appleIndex = 0
let score = 0
let intervalTime = 1000
let speed = 0.9
let timerId = 0

// ---- create grid ------------------------------

function createGrid() {
  //create 100 of these elements with a for loop
  for (let i=0; i < width*width; i++) {
    //create element
  const square = document.createElement('div')
  //add styling to the element
  square.classList.add('square')
  //put the element into our grid
  grid.appendChild(square)
  //push it into a new squares array    
  squares.push(square)
  }
}

createGrid()

// ---- create snake ----------------------------

currentSnake.forEach(index => squares[index].classList.add('snake'))

// ----- reset -----------------------------

function startGame() {
  //remove the snake
  currentSnake.forEach(index => squares[index].classList.remove('snake'))
  //remove the apple
  squares[appleIndex].classList.remove('apple')
  clearInterval(timerId)
  currentSnake = [2,1,0]
  score = 0
  // add new score to browser
  scoreDisplay.textContent = score
  direction = 1
  intervalTime = 1000
  generateApple()
  //read the class of snake to our new currentSnake
  currentSnake.forEach(index => squares[index].classList.add('snake'))
  timerId = setInterval(move, intervalTime)
}

// ------ move ----------------------------

function move() {
  // collision
  if (
    (currentSnake[0] + width >= width*width && direction === width) || //if snake has hit bottom
    (currentSnake[0] % width === width-1 && direction === 1) || //if snake has hit right wall
    (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
    (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
    squares[currentSnake[0] + direction].classList.contains('snake')
  )
  return clearInterval(timerId) // STOP

  
  // -- pop tail, add direction --
  //remove last element from our currentSnake array
  const tail = currentSnake.pop()
  //remove styling from last element
  squares[tail].classList.remove('snake')
  //add square in direction we are heading
  currentSnake.unshift(currentSnake[0] + direction)
  //add styling so we can see it
  
  // -- deal with snake head gets apple --
  if (squares[currentSnake[0]].classList.contains('apple')) {
    //remove the class of apple
    squares[currentSnake[0]].classList.remove('apple')
    //grow our snake by adding class of snake to it
    squares[tail].classList.add('snake')
    console.log(tail)
    //grow our snake array
    currentSnake.push(tail)
    console.log(currentSnake)
    //generate new apple
    generateApple()
    //add one to the score
    score++
    //display our score
    scoreDisplay.textContent = score
    //speed up our snake
    clearInterval(timerId)
    console.log(intervalTime)
    intervalTime = intervalTime * speed
    console.log(intervalTime)
    timerId = setInterval(move, intervalTime)
  }

  squares[currentSnake[0]].classList.add('snake')
}

// ----------------------------------

function generateApple() {
  do {
      appleIndex = Math.floor(Math.random() * squares.length)
  } while (squares[appleIndex].classList.contains('snake'))
      squares[appleIndex].classList.add('apple')
} 
generateApple()


// ----------------------------------

// 39 is right arrow
// 38 is for the up arrow
// 37 is for the left arrow
// 40 is for the down arrow

function control(e) {
  if (e.keyCode === 39) {
      console.log('right pressed')
      e.preventDefault();
      direction = 1
  } else if (e.keyCode === 38) {
      console.log('up pressed')
      e.preventDefault();
      direction = -width
  } else if (e.keyCode === 37) {
      console.log('left pressed')
      e.preventDefault();
      direction = -1
  } else if (e.keyCode === 40) {
      console.log('down pressed')
      e.preventDefault();
      direction = +width
  }
}

// ----------------------------------

document.addEventListener('keydown', control)

startButton.addEventListener('click', startGame)

