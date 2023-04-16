// toggle searchBox 
let searchBox = document.querySelector(".searchBox");
let search = document.querySelector(".search");
search.onclick = () =>{
    searchBox.classList.toggle("active");
};

// show moviesInfo popUp 
let popUp = document.querySelectorAll(".popUp");
let closeInfo = document.querySelector(".closeInfo");
let moviesInfo = document.querySelector(".moviesInfo");
let moviePic = document.querySelector(".moviePic");
let myMovie = document.querySelector(".myMovie");
let movieName = document.querySelector(".movieName");
popUp.forEach(info => {
info.onclick = () =>{
  let image = document.querySelector(".movieImg");
  moviePic.src = image.src;
  moviesInfo.classList.add("active");
  movieName.innerHTML = myMovie.textContent;
}
});

// close moviesInfo popUp 
closeInfo.onclick = () =>{
  moviesInfo.classList.remove("active")
};

// if menu onclick view navbar 
let closeImg = document.querySelector(".closeMenu");
let navbar = document.querySelector(".navbar");
let menu = document.querySelector(".menuImg");
menu.onclick = () =>{
  navbar.classList.toggle("active");
}
closeImg.onclick = () =>{
  navbar.classList.remove("active");
}
window.onscroll = () =>{
  navbar.classList.remove("active");
}
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(navLink).forEach((item) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
  }
});
// swiper slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });

   // movies slide 
   var swiper = new Swiper(".mySlide", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
},
breakpoints: {

200: {
  slidesPerView: 2,
},

567: {
  slidesPerView: 3,
},
 992: {
  slidesPerView: 6,
},

},
  });
