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

/*Actuellement en première année d'informatique, je manque de connaissances et je n'ai pas vu d'autres alternatives que de dupliquer chaque fenêtre modale, 
      je me doute qu'il existe sûrement un moyen plus optimisé pour le faire*/

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


/* FENETRE MODALE ECONOCOM */


const modalContainer2 = document.querySelector(".modal2-container2");
const modalTriggers2 = document.querySelectorAll(".modal2-trigger2");

modalTriggers2.forEach(trigger2 => trigger2.addEventListener("click", toggleModal2))

function toggleModal2(){
  modalContainer2.classList.toggle("active2")
}

/* FENETRE MODALE ECONOCOM */


/* FENETRE MODALE PENTREE */

const modalContainer3 = document.querySelector(".modal3-container3");
const modalTriggers3 = document.querySelectorAll(".modal3-trigger3");

modalTriggers3.forEach(trigger3 => trigger3.addEventListener("click", toggleModal3))

function toggleModal3(){
  modalContainer3.classList.toggle("active3")
}


/* FENETRE MODALE PENTREE */


/* FENETRE MODALE DEBIAN */

const modalContainer4 = document.querySelector(".modal4-container4");
const modalTriggers4 = document.querySelectorAll(".modal4-trigger4");

modalTriggers4.forEach(trigger4 => trigger4.addEventListener("click", toggleModal4))

function toggleModal4(){
  modalContainer4.classList.toggle("active4")
}


/* FENETRE MODALE DEBIAN */




/* FENETRE MODALE DEPECHES */

const modalContainer5 = document.querySelector(".modal5-container5");
const modalTriggers5 = document.querySelectorAll(".modal5-trigger5");

modalTriggers5.forEach(trigger5 => trigger5.addEventListener("click", toggleModal5))

function toggleModal5(){
  modalContainer5.classList.toggle("active5")
}


/* FENETRE MODALE DEPECHES */



/* FENETRE MODALE TITANIC */


const modalContainer6 = document.querySelector(".modal6-container6");
const modalTriggers6 = document.querySelectorAll(".modal6-trigger6");

modalTriggers6.forEach(trigger6 => trigger6.addEventListener("click", toggleModal6))

function toggleModal6(){
  modalContainer6.classList.toggle("active6")
}

/* FENETRE MODALE TITANIC */


/* FENETRE MODALE ACCIDENTS */

const modalContainer7 = document.querySelector(".modal7-container7");
const modalTriggers7 = document.querySelectorAll(".modal7-trigger7");

modalTriggers7.forEach(trigger7 => trigger7.addEventListener("click", toggleModal7))

function toggleModal7(){
  modalContainer7.classList.toggle("active7")
}



/* FENETRE MODALE ACCIDENTS */
