function menuOnClick() {
    document.getElementById("nav-liens").classList.toggle("menu-mobile");
   
  }

  window.onload = function() {
    setTimeout(function() {
        document.querySelector('.fade-in-img').classList.add('show');
    }, 200);
}

/* permet de faire apparaître la navabr lors du scroll vers le haut
*/
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
