const header = document.getElementById('header');
const bodyTag = document.querySelector('body');

// ------------------------------------------------

console.log(innerHeight); 
console.log(bodyTag.scrollHeight); 
console.log(bodyTag.clientHeight); 
// scrollHeight is the measurement of the element's entire content, whether all the content is visible or not
// clientHeight is the inner height of the visible (onscreen)element, including padding
// scrollTop is the measurement of pixels that have been scrolled (offscreen) 

// ------------------------------------------------
    
// divide page into ten sections
function scrolled() {
  let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
  return Math.floor(dec * 10);
}

window.addEventListener('scroll', () => {
  header.style.setProperty('background', scrolled() > 1 ? "#ecf0f1ff" : "#f1c40fff");
})
