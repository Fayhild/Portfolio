function menuOnClick() {
  document.getElementById("nav-liens").classList.toggle("menu-mobile");
}
/* lorsque le menu-mobile a été déployé par l'utilisatuer et que ce dernier sroll vers le bas, le menu-mobile perds sa clase menu-mobile, ainsi il se retracte*/
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 0) {
    document.getElementById("nav-liens").classList.remove("menu-mobile");
  }
});

  window.onload = function() {
    setTimeout(function() {
        document.querySelector('.fade-in-img').classList.add('show');
    }, 200);
}



/* permet de faire apparaître la navabar lors du scroll vers le haut */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nava").style.top = "0";
  } else {
    document.getElementById("nava").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
} 

/* ______________________________________________________________________________________*/
/* FENETRES MODALES */ 

/* FENETRE MODALE STI2D */

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  modalContainer.classList.toggle("active")
}

/* */

const items = document.querySelectorAll('.containerSlider img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.leftBtn');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)

/* FENETRE MODALE STI2D */

