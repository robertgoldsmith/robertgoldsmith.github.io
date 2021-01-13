//-----------------
// document object
//-----------------
// var hello = document.getElementById("hello")
// console.log(hello)
// console.dir(hello)

//-----------------
// power rangers Create elements from looped object
//-----------------
var powerRangers = [
  {name: "Jason Lee Scott", color: "Red"}, 
  {name: "Kimberly Hart", color: "Pink"}, 
  {name: "Zack Taylor", color: "Black"}, 
  {name: "Trini Kwan", color: "Yellow"}, 
  {name: "Billy Cranston", color: "Blue"},
  {name: "Tommy Oliver", color: "Green"}
]

var rangersList = document.getElementById("rangers")

for (let i = 0; i < powerRangers.length; i++){
  let newListItem = document.createElement('li')
  newListItem.style.color = powerRangers[i].color
  newListItem.textContent = powerRangers[i].name + " - " + powerRangers[i].color
  rangersList.append(newListItem)
}

//-----------------
// Create element from input value
//-----------------

let btn = document.getElementById('btn')
let inputBox = document.getElementById('input-box')
let inputHolder = document.getElementById('input-holder')

function handleBtnClick() {
    console.log(inputBox.value)
    
    let para = document.createElement('p')
    para.textContent = inputBox.value
    inputHolder.append(para)
}

btn.addEventListener('click', handleBtnClick)


//-----------------
// myEmojis
//-----------------

const myEmojis = ["🖖", "🎲", "🎮", "🎞", "✏️", "🦑"]

function renderEmojis() {
  const emojiContainer = document.getElementById("emoji-container")
  emojiContainer.innerHTML = ""
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
  }
}

renderEmojis() //reset array

// Add
const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
  const emojiInput = document.getElementById("emoji-input")
  if (emojiInput.value) { // if true, 
    myEmojis.push(emojiInput.value)
    emojiInput.value = "" // reset input value
    renderEmojis()
  }
})

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
  const emojiInput = document.getElementById("emoji-input")
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = ""
    renderEmojis()
  }
})

// Remove
const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
  myEmojis.pop()
  renderEmojis()
})

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function(){
  myEmojis.shift()
  renderEmojis()
})

//-----------------
// diary App
//-----------------

const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');

let count = 1; // button numbering

function addEntryToDom(event) {
  
    // Create entry div
    event.preventDefault(); // stop page refresh
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry'; // assign class
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none'; // hide div
    entriesSection.appendChild(entryDiv);
    entryTextbox.value = ''; // reset textarea
    
    // Create Buttons
    const displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count;
    entriesNav.appendChild(displayEntryButton);
    
    // Add Listeners to Buttons
    displayEntryButton.addEventListener('click', function() {
      // Grab all just created entries
      const allEntries = document.querySelectorAll('.single-entry');
      // cycle through and hide all entries
      for (let i= 0; i < allEntries.length; i++) {
        allEntries[i].style.display = 'none';
      }
      // Show individual entry
      entryDiv.style.display = 'block';  
    })
    count++ // Increment to button two etc.
}

entryForm.addEventListener('submit', addEntryToDom)