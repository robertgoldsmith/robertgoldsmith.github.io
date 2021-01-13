const die = document.getElementById('dice')
const faces = document.getElementsByClassName('face')

function roll() {
    let num = Math.floor(Math.random() * 6)
    for(let face of faces){
        face.classList.remove('active')
    }
    faces[num].classList.add('active')
}

die.addEventListener('click', roll)