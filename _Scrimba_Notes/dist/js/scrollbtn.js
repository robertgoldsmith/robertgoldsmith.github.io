const scrollBtn = document.getElementById('scroll-btn');
                   
function scrollJump() {
  if (document.documentElement.scrollTop > 0) {
    window.scrollTo({
      top: 0, 
      left: 0, 
      behavior: 'smooth'});
  }
}

scrollBtn.addEventListener('click', scrollJump);
                    


                    
function toggleBtnVis() {
  if (document.documentElement.scrollTop > 300) {
    scrollBtn.className = 'btn-visible';
  } else {
    scrollBtn.className = 'btn-hidden';
  }
} 

window.addEventListener('scroll', toggleBtnVis);
                    
                

            

