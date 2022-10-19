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






  // ACCORDION



const accordion_item = document.querySelectorAll(".accordion_item");

accordion_item.forEach((item) => {
  const accordion_header_item = item.querySelector(".accordion_header");

  accordion_header_item.addEventListener("click", () => {
    const accordion_content_item = item.querySelector(".accordion_content");

    const item_actived = document.querySelector(".active");

    VerifyActive(item, accordion_content_item, item_actived);
  });
});

function VerifyActive(item, content, content_actived) {
  const icon_item = item.querySelector(".icon");
  const icon_item_active = document.querySelectorAll(".icon");

  icon_item_active.forEach((item) => (item.innerHTML = `<img class="logoHeader" src="./assets/images/arrow.svg" alt="Meu Workflow">`));

  if (content_actived) {
    content_actived.style.height = 0;
    content_actived.classList.remove("active");
  }

  if (content !== content_actived) {
    icon_item.innerHTML = "-";
    content.classList.add("active");
    content.style.height = content.scrollHeight + 10 + "px";
  }
}
