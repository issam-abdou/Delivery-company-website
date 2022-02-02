// ========= SEARCH FORM
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn")
searchBtn.addEventListener('click',()=>{
    loginForm.classList.remove('show-login')
    cart.classList.remove('show-cart')
    searchForm.classList.toggle('show-search')
})

// ========= LOGIN FORM
const loginBtn = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login');
loginBtn.addEventListener('click',()=>{
    searchForm.classList.remove('show-search')
    cart.classList.remove('show-cart')
    loginForm.classList.toggle('show-login');  
})

// ========= CART

const cartBtn = document.querySelector('#cart-btn');
const cart = document.querySelector('.cart');
cartBtn.addEventListener('click',()=>{
    searchForm.classList.remove('show-search');
    loginForm.classList.remove('show-login');
    cart.classList.toggle('show-cart');
    
})

// ======================= Side Bar ======================//
const burger = document.querySelector("#menu-btn")
const xBurger = document.querySelector(".nav-mobile-x")
const navMobile = document.querySelector('.nav-mobile')

burger.addEventListener('click',()=>{
  searchForm.classList.remove('show-search');
    loginForm.classList.remove('show-login');
    cart.classList.remove('show-cart')
    navMobile.classList.add('active')
})

xBurger.addEventListener('click',()=>{
    navMobile.classList.remove('active')
})

// ========= ON SCROLL
window.onscroll = ()=>{
  searchForm.classList.remove('show-search');
  loginForm.classList.remove('show-login');
  cart.classList.remove('show-cart')
  navMobile.classList.remove('active')
}

// ========= SLIDER EFFECT ==========

// === Products-slider ===
var swiper = new Swiper(".product-slider", { 
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay:7500,
    disableOnInteraction: false
  },
  centeredSlides: true,
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    768:{
      slidesPerView:2,
    },
    1020: {
      slidesPerView: 3,
    }
  }
});

// === Reviews Slider ===
var swiper = new Swiper(".reviews-slider", {
  slidesPerView: 3, 
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay:3000,
    disableOnInteraction: false
  }
});

