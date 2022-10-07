const hamburger = document.querySelector(".hamburguerMenu");
const menu = document.querySelector(".menuActive");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closeBtn");
const headerLinks = document.querySelector(".headerLinks");


hamburger.addEventListener("click", () => {
  menu.classList.toggle("active")
  overlay.classList.toggle("active")
})

overlay.addEventListener("click", () => {
  overlay.classList.remove("active")
  menu.classList.toggle("active")
})

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active")
  menu.classList.toggle("active")
})

headerLinks.addEventListener("click", () => {
  overlay.classList.remove("active")
  menu.classList.toggle("active")
})




const swiper = new Swiper('.swiper', {
    paginationClickable: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        // loop: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 62,
          depth: 100,
          modifier: 2,
          slideShadows: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
  });

  const swiperAvaliacoes = new Swiper('.swiper-avaliacoes', {
    paginationClickable: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        // loop: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 62,
          depth: 100,
          modifier: 2,
          slideShadows: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
  });