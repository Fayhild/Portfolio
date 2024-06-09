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

/* je devrais ptet faire une boucle un jour*/

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
  
    if(e.keyCode === 37){
        slidePrecedente7();
    } else if(e.keyCode === 39){
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
  
    if(e.keyCode === 37){
        slidePrecedente6();
    } else if(e.keyCode === 39){
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
  
    if(e.keyCode === 37){
        slidePrecedente5();
    } else if(e.keyCode === 39){
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
  
    if(e.keyCode === 37){
        slidePrecedente4();
    } else if(e.keyCode === 39){
        slideSuivante4();
    }
}
document.addEventListener('keydown', keyPress4)


/* FENETRE MODALE ACCIDENTS */

/* FENETRE MODALE RESEAUX */

const modalContainer8 = document.querySelector(".modal8-container8");
const modalTriggers8 = document.querySelectorAll(".modal8-trigger8");

modalTriggers8.forEach(trigger8 => trigger8.addEventListener("click", toggleModal8))

function toggleModal8(){
  modalContainer8.classList.toggle("active8")
}

/*    */

const items8 = document.querySelectorAll('.containerSlider8 img');
const nbSlide8 = items8.length;
const suivant8 = document.querySelector('.right8');
const precedent8 = document.querySelector('.leftBtn8');
let count8 = 0;

function slideSuivante8(){
    items8[count8].classList.remove('active8');

    if(count8 < nbSlide8 - 1){
        count8++;
    } else {
        count8 = 0;
    }

    items8[count8].classList.add('active8')   
}

suivant8.addEventListener('click', slideSuivante8)

function slidePrecedente8(){
    items8[count8].classList.remove('active8');

    if(count8 > 0){
        count8--;
    } else {
        count8 = nbSlide8 - 1;
    }

    items8[count8].classList.add('active8')  
}
precedent8.addEventListener('click', slidePrecedente8)

function keyPress8(e){
  
    if(e.keyCode === 37){
        slidePrecedente8();
    } else if(e.keyCode === 39){
        slideSuivante8();
    }
}
document.addEventListener('keydown', keyPress8)


/* FENETRE MODALE RESEAUX */


/* FENETRE MODALE SUKI */

const modalContainer9 = document.querySelector(".modal9-container9");
const modalTriggers9 = document.querySelectorAll(".modal9-trigger9");

modalTriggers9.forEach(trigger9 => trigger9.addEventListener("click", toggleModal9))

function toggleModal9(){
  modalContainer9.classList.toggle("active9")
}

/*    */

const items9 = document.querySelectorAll('.containerSlider9 img');
const nbSlide9 = items9.length;
const suivant9 = document.querySelector('.right9');
const precedent9 = document.querySelector('.leftBtn9');
let count9 = 0;

function slideSuivante9(){
    items9[count9].classList.remove('active9');

    if(count9 < nbSlide9 - 1){
        count9++;
    } else {
        count9 = 0;
    }

    items9[count9].classList.add('active9')   
}

suivant9.addEventListener('click', slideSuivante9)

function slidePrecedente9(){
    items9[count9].classList.remove('active9');

    if(count9 > 0){
        count9--;
    } else {
        count9 = nbSlide9 - 1;
    }

    items9[count9].classList.add('active9')  
}
precedent9.addEventListener('click', slidePrecedente9)

function keyPress9(e){
  
    if(e.keyCode === 37){
        slidePrecedente9();
    } else if(e.keyCode === 39){
        slideSuivante9();
    }
}
document.addEventListener('keydown', keyPress9)


/* FENETRE MODALE SUKI */

/* FENETRE MODALE GAMEJAM */

const modalContainer10 = document.querySelector(".modal10-container10");
const modalTriggers10 = document.querySelectorAll(".modal10-trigger10");

modalTriggers10.forEach(trigger10 => trigger10.addEventListener("click", toggleModal10))

function toggleModal10(){
  modalContainer10.classList.toggle("active10")
}

/*    */

const items10 = document.querySelectorAll('.containerSlider10 img');
const nbSlide10 = items10.length;
const suivant10 = document.querySelector('.right10');
const precedent10 = document.querySelector('.leftBtn10');
let count10 = 0;

function slideSuivante10(){
    items10[count10].classList.remove('active10');

    if(count10 < nbSlide10 - 1){
        count10++;
    } else {
        count10 = 0;
    }

    items10[count10].classList.add('active10')   
}

suivant10.addEventListener('click', slideSuivante10)

function slidePrecedente10(){
    items10[count10].classList.remove('active10');

    if(count10 > 0){
        count10--;
    } else {
        count10 = nbSlide10 - 1;
    }

    items10[count10].classList.add('active10')  
}
precedent10.addEventListener('click', slidePrecedente10)

function keyPress10(e){
  
    if(e.keyCode === 37){
        slidePrecedente10();
    } else if(e.keyCode === 39){
        slideSuivante10();
    }
}
document.addEventListener('keydown', keyPress10)

/* FENETRE MODALE GAMEJAM */

/* FENETRE MODALE WHATIF */

const modalContainer11 = document.querySelector(".modal11-container11");
const modalTriggers11 = document.querySelectorAll(".modal11-trigger11");

modalTriggers11.forEach(trigger11 => trigger11.addEventListener("click", toggleModal11))

function toggleModal11(){
  modalContainer11.classList.toggle("active11")
}

/*    */

const items11 = document.querySelectorAll('.containerSlider11 img');
const nbSlide11 = items11.length;
const suivant11 = document.querySelector('.right11');
const precedent11 = document.querySelector('.leftBtn11');
let count11 = 0;

function slideSuivante11(){
    items11[count11].classList.remove('active11');

    if(count11 < nbSlide11 - 1){
        count11++;
    } else {
        count11 = 0;
    }

    items11[count11].classList.add('active11')   
}

suivant11.addEventListener('click', slideSuivante11)

function slidePrecedente11(){
    items11[count11].classList.remove('active11');

    if(count11 > 0){
        count11--;
    } else {
        count11 = nbSlide11 - 1;
    }

    items11[count11].classList.add('active11')  
}
precedent11.addEventListener('click', slidePrecedente11)

function keyPress11(e){
  
    if(e.keyCode === 37){
        slidePrecedente11();
    } else if(e.keyCode === 39){
        slideSuivante11();
    }
}
document.addEventListener('keydown', keyPress11)

/* FENETRE MODALE WHATIF */

/* FENETRE MODALE API */

const modalContainer12 = document.querySelector(".modal12-container12");
const modalTriggers12 = document.querySelectorAll(".modal12-trigger12");

modalTriggers12.forEach(trigger12 => trigger12.addEventListener("click", toggleModal12))

function toggleModal12(){
  modalContainer12.classList.toggle("active12")
}

/*    */

const items12 = document.querySelectorAll('.containerSlider12 img');
const nbSlide12 = items12.length;
const suivant12 = document.querySelector('.right12');
const precedent12 = document.querySelector('.leftBtn12');
let count12 = 0;

function slideSuivante12(){
    items12[count12].classList.remove('active12');

    if(count12 < nbSlide12 - 1){
        count12++;
    } else {
        count12 = 0;
    }

    items12[count12].classList.add('active12')   
}

suivant12.addEventListener('click', slideSuivante12)

function slidePrecedente12(){
    items12[count12].classList.remove('active12');

    if(count12 > 0){
        count12--;
    } else {
        count12 = nbSlide12 - 1;
    }

    items12[count12].classList.add('active12')  
}
precedent12.addEventListener('click', slidePrecedente12)

function keyPress12(e){
  
    if(e.keyCode === 37){
        slidePrecedente12();
    } else if(e.keyCode === 39){
        slideSuivante12();
    }
}
document.addEventListener('keydown', keyPress12)

/* FENETRE MODALE API */

/* FENETRE MODALE SAE4 */

const modalContainer13 = document.querySelector(".modal13-container13");
const modalTriggers13 = document.querySelectorAll(".modal13-trigger13");

modalTriggers13.forEach(trigger13 => trigger13.addEventListener("click", toggleModal13))

function toggleModal13(){
  modalContainer13.classList.toggle("active13")
}

/*    */

const items13 = document.querySelectorAll('.containerSlider13 img');
const nbSlide13 = items13.length;
const suivant13 = document.querySelector('.right13');
const precedent13 = document.querySelector('.leftBtn13');
let count13 = 0;

function slideSuivante13(){
    items13[count13].classList.remove('active13');

    if(count13 < nbSlide13 - 1){
        count13++;
    } else {
        count13 = 0;
    }

    items13[count13].classList.add('active13')   
}

suivant13.addEventListener('click', slideSuivante13)

function slidePrecedente13(){
    items13[count13].classList.remove('active13');

    if(count13 > 0){
        count13--;
    } else {
        count13 = nbSlide13 - 1;
    }

    items13[count13].classList.add('active13')  
}
precedent13.addEventListener('click', slidePrecedente13)

function keyPress13(e){
  
    if(e.keyCode === 37){
        slidePrecedente13();
    } else if(e.keyCode === 39){
        slideSuivante13();
    }
}
document.addEventListener('keydown', keyPress13)

/* FENETRE MODALE SAE4 */
