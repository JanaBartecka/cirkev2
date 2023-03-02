/* Menu */
const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".header__nav-menu");
hamburger.addEventListener("click",function (){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", function (){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

   /* Reveal */
  window.addEventListener("scroll", function(){
    const reveals  = document.querySelectorAll(".reveal", ".reveal__welcome")
        reveals.forEach(function(oneBlok){
            let windowHeight = window.innerHeight
            let revealTop = oneBlok.getBoundingClientRect().top
            const revealPoint = 50
     
            if (revealTop < windowHeight - revealPoint) {
                oneBlok.classList.add("active")
            } else {
                oneBlok.classList.remove("active")
            }
    
       
    })
  
  })
  
  
  function scrollWin(x, y) {
    window.scrollBy(x, y);
  }
  $(function(){
    $(".wednesday__time").show(2000);
  
  
  }
  )
  
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
  }




function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}


  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }


