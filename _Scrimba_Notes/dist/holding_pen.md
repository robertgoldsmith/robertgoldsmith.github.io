const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelector('.previous')
const gallery = document.querySelector('.gallery')
let position = 0

// -220 -440 -660 -880 -1100
const moveNextSlide = () => {
    if(position === -880){
        position = 0
    } else {
        position -= 220
    }
    gallery.style.transform = `translateX(${position}px)`
}

const movePreviousSlide = () => {
    if(position === 0){
        position = -880
    } else {
        position += 220
    }
    gallery.style.transform = `translateX(${position}px)`
}

nextBtn.addEventListener('click', moveNextSlide)
previousBtn.addEventListener('click', movePreviousSlide)



<!-- css -->

/*
Thanks to these fine individuals from Unsplash:
https://unsplash.com/photos/AmzKuEnr1VY
https://unsplash.com/photos/eDnJQL21amc
https://unsplash.com/photos/LXy2DOOxESQ
https://unsplash.com/photos/KBKHXjhVQVM
https://unsplash.com/photos/PxM8aeJbzvk
*/

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');

html, body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: 'Playfair Display';
    display: grid;
    justify-content: center;
}

img {
    width: 200px;
}

.previous, .next {
    width: 35px;
}
.previous {
    opacity: .3;
}

.container {
    display: grid;
    grid-template-columns: 20% 200px 20%;
    place-content: center;
}

.gallery-wrapper {
    overflow: hidden;
    width: 100%;
}
.previous, .next {
    justify-self: center;
    align-self: center;
    cursor: pointer;
}

.gallery {
    transform-style: preserve-3d;
    display: grid;
    grid-template-columns: repeat(5, auto);
    transform: translateX(0px);
    transition: transform 250ms
}


.card {
    margin-right: 20px;
    align-self: center;
}


//-----------------------------------------------21
const sumOfTwo = (nums1, nums2, value) => {
  let diffs = {};
  nums1.forEach((el) => (diffs[value - el] = true));
  console.log(diffs)
  return nums2.some((el) => diffs[el]);
};

console.log(sumOfTwo([1, 2, 3],[10, 20, 30, 40],42))




// correct shortcut.
function control(e) {
    squares[pacmanCurrentIndex].classList.remove('pacman')
    switch(e.keyCode) {
        case 40:
        console.log('pressed down')
        if (
            !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') &&
            !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
            pacmanCurrentIndex + width < width * width
            ) 
            pacmanCurrentIndex += width
        break
        case 38:
        console.log('pressed up')
        if (
            !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair') &&
            !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
            pacmanCurrentIndex - width >=0
            ) 
            pacmanCurrentIndex -= width
        break
        case 37: 
        console.log('pressed left')
        if (pacmanCurrentIndex === 364) {
                pacmanCurrentIndex = 391
            }
        else if( 
            !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair') &&
            !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
            pacmanCurrentIndex % width !==0
            ) 
            pacmanCurrentIndex -=1
            
        break
        case 39:
        console.log('pressed right')
        if(pacmanCurrentIndex === 391) {
            pacmanCurrentIndex = 364
            }
        else if(
            !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair') &&
            !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
            pacmanCurrentIndex % width < width -1
            ) 
            pacmanCurrentIndex +=1
            
        break
    }
    squares[pacmanCurrentIndex].classList.add('pacman')
}
document.addEventListener('keyup', control)