
$(document).ready(() => {
    $('#header').load('header.html');
    $('#footer').load('footer.html');
})




/*
    Carrousel con swiper.js
*/

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        700:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 2,
        },
        1200:{
            slidesPerView: 3,
        },


    },
  });

/*
  Cookies
*/

const Cookies = document.querySelector("#cookie");
const cerrarCookiesbtn = document.getElementById("cerrar");
Cookies.style.top = ((window.innerHeight/2.5) - (Cookies.offsetHeight/2))+'px';
Cookies.style.left = ((window.innerWidth/3.2) - (Cookies.offsetWidth/2))+'px';




setTimeout(function(){
    Cookies.showModal()
}, 3000);

cerrarCookiesbtn.addEventListener("click", () => {
    Cookies.close();
});