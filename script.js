const hamburger = document.querySelector(".hamburguerMenu");
const menu = document.querySelector(".menuActive");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closeBtn");


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


const headerLinks = document.querySelectorAll(".headerLinks").forEach(e => e.addEventListener('click',() => {
  overlay.classList.remove("active")
  menu.classList.toggle("active")
}));
  
  
  

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

  const swiperDesktop = new Swiper('.swiper-desktop', {
    paginationClickable: true,
    spaceBetween: 180,
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
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 0,
      slideShadows: false,          
    },
    pagination: {
      el: ".swiper-pagination"
    }
  });
