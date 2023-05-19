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

/*    */

const items7 = document.querySelectorAll('.containerSlider7 img');
const nbSlide7 = items7.length;
const suivant7 = document.querySelector('.right7');
const precedent7 = document.querySelector('.leftBtn7');
let count7 = 0;

function slideSuivante7(){
    items7[count7].classList.remove('active7');

    if(count7 < nbSlide7 - 1){
        count7++;
    } else {
        count7 = 0;
    }

    items7[count7].classList.add('active7')   
}

suivant7.addEventListener('click', slideSuivante7)

function slidePrecedente7(){
    items7[count7].classList.remove('active7');

    if(count7 > 0){
        count7--;
    } else {
        count7 = nbSlide7 - 1;
    }

    items7[count7].classList.add('active7')  
}
precedent7.addEventListener('click', slidePrecedente7)

function keyPress7(e){
  
    if(e.keyCode === 77){
        slidePrecedente7();
    } else if(e.keyCode === 79){
        slideSuivante7();
    }
}
document.addEventListener('keydown', keyPress7)



/* FENETRE MODALE ECONOCOM */


/* FENETRE MODALE PENTREE */

const modalContainer3 = document.querySelector(".modal3-container3");
const modalTriggers3 = document.querySelectorAll(".modal3-trigger3");

modalTriggers3.forEach(trigger3 => trigger3.addEventListener("click", toggleModal3))

function toggleModal3(){
  modalContainer3.classList.toggle("active3")
}

/*    */

const items6 = document.querySelectorAll('.containerSlider6 img');
const nbSlide6 = items6.length;
const suivant6 = document.querySelector('.right6');
const precedent6 = document.querySelector('.leftBtn6');
let count6 = 0;

function slideSuivante6(){
    items6[count6].classList.remove('active6');

    if(count6 < nbSlide6 - 1){
        count6++;
    } else {
        count6 = 0;
    }

    items6[count6].classList.add('active6')   
}

suivant6.addEventListener('click', slideSuivante6)

function slidePrecedente6(){
    items6[count6].classList.remove('active6');

    if(count6 > 0){
        count6--;
    } else {
        count6 = nbSlide6 - 1;
    }

    items6[count6].classList.add('active6')  
}
precedent6.addEventListener('click', slidePrecedente6)

function keyPress6(e){
  
    if(e.keyCode === 67){
        slidePrecedente6();
    } else if(e.keyCode === 69){
        slideSuivante6();
    }
}
document.addEventListener('keydown', keyPress6)



/* FENETRE MODALE PENTREE */


/* FENETRE MODALE DEBIAN */

const modalContainer4 = document.querySelector(".modal4-container4");
const modalTriggers4 = document.querySelectorAll(".modal4-trigger4");

modalTriggers4.forEach(trigger4 => trigger4.addEventListener("click", toggleModal4))

function toggleModal4(){
  modalContainer4.classList.toggle("active4")
}

/*    */

const items5 = document.querySelectorAll('.containerSlider5 img');
const nbSlide5 = items5.length;
const suivant5 = document.querySelector('.right5');
const precedent5 = document.querySelector('.leftBtn5');
let count5 = 0;

function slideSuivante5(){
    items5[count5].classList.remove('active5');

    if(count5 < nbSlide5 - 1){
        count5++;
    } else {
        count5 = 0;
    }

    items5[count5].classList.add('active5')   
}

suivant5.addEventListener('click', slideSuivante5)

function slidePrecedente5(){
    items5[count5].classList.remove('active5');

    if(count5 > 0){
        count5--;
    } else {
        count5 = nbSlide5 - 1;
    }

    items5[count5].classList.add('active5')  
}
precedent5.addEventListener('click', slidePrecedente5)

function keyPress5(e){
  
    if(e.keyCode === 57){
        slidePrecedente5();
    } else if(e.keyCode === 59){
        slideSuivante5();
    }
}
document.addEventListener('keydown', keyPress5)




/* FENETRE MODALE DEBIAN */




/* FENETRE MODALE DEPECHES */

const modalContainer5 = document.querySelector(".modal5-container5");
const modalTriggers5 = document.querySelectorAll(".modal5-trigger5");

modalTriggers5.forEach(trigger5 => trigger5.addEventListener("click", toggleModal5))

function toggleModal5(){
  modalContainer5.classList.toggle("active5")
}

/*     */

const items2 = document.querySelectorAll('.containerSlider2 img');
const nbSlide2 = items2.length;
const suivant2 = document.querySelector('.right2');
const precedent2 = document.querySelector('.leftBtn2');
let count2 = 0;

function slideSuivante2(){
    items2[count2].classList.remove('active2');

    if(count2 < nbSlide2 - 1){
        count2++;
    } else {
        count2 = 0;
    }

    items2[count2].classList.add('active2')   
}

suivant2.addEventListener('click', slideSuivante2)


function slidePrecedente2(){
    items2[count2].classList.remove('active2');

    if(count2 > 0){
        count2--;
    } else {
        count2 = nbSlide2 - 1;
    }

    items2[count2].classList.add('active2')  
}
precedent2.addEventListener('click', slidePrecedente2)


function keyPress2(e){
  
    if(e.keyCode === 37){
        slidePrecedente2();
    } else if(e.keyCode === 39){
        slideSuivante2();
    }
}
document.addEventListener('keydown', keyPress2)


/* FENETRE MODALE DEPECHES */



/* FENETRE MODALE TITANIC */


const modalContainer6 = document.querySelector(".modal6-container6");
const modalTriggers6 = document.querySelectorAll(".modal6-trigger6");

modalTriggers6.forEach(trigger6 => trigger6.addEventListener("click", toggleModal6))

function toggleModal6(){
  modalContainer6.classList.toggle("active6")
}

/*   */

/*     */

const items3 = document.querySelectorAll('.containerSlider3 img');
const nbSlide3 = items3.length;
const suivant3 = document.querySelector('.right3');
const precedent3 = document.querySelector('.leftBtn3');
let count3 = 0;

function slideSuivante3(){
    items3[count3].classList.remove('active3');

    if(count3 < nbSlide3 - 1){
        count3++;
    } else {
        count3 = 0;
    }

    items3[count3].classList.add('active3')   
}

suivant3.addEventListener('click', slideSuivante3)


function slidePrecedente3(){
    items3[count3].classList.remove('active3');

    if(count3 > 0){
        count3--;
    } else {
        count3 = nbSlide3 - 1;
    }

    items3[count3].classList.add('active3')  
}
precedent3.addEventListener('click', slidePrecedente3)


function keyPress3(e){
  
    if(e.keyCode === 37){
        slidePrecedente3();
    } else if(e.keyCode === 39){
        slideSuivante3();
    }
}
document.addEventListener('keydown', keyPress3)

/* FENETRE MODALE TITANIC */


/* FENETRE MODALE ACCIDENTS */

const modalContainer7 = document.querySelector(".modal7-container7");
const modalTriggers7 = document.querySelectorAll(".modal7-trigger7");

modalTriggers7.forEach(trigger7 => trigger7.addEventListener("click", toggleModal7))

function toggleModal7(){
  modalContainer7.classList.toggle("active7")
}

/*    */

const items4 = document.querySelectorAll('.containerSlider4 img');
const nbSlide4 = items4.length;
const suivant4 = document.querySelector('.right4');
const precedent4 = document.querySelector('.leftBtn4');
let count4 = 0;

function slideSuivante4(){
    items4[count4].classList.remove('active4');

    if(count4 < nbSlide4 - 1){
        count4++;
    } else {
        count4 = 0;
    }

    items4[count4].classList.add('active4')   
}

suivant4.addEventListener('click', slideSuivante4)

function slidePrecedente4(){
    items4[count4].classList.remove('active4');

    if(count4 > 0){
        count4--;
    } else {
        count4 = nbSlide4 - 1;
    }

    items4[count4].classList.add('active4')  
}
precedent4.addEventListener('click', slidePrecedente4)

function keyPress4(e){
  
    if(e.keyCode === 47){
        slidePrecedente4();
    } else if(e.keyCode === 49){
        slideSuivante4();
    }
}
document.addEventListener('keydown', keyPress4)


/* FENETRE MODALE ACCIDENTS */
