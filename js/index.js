const burger = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const body = document.body;

burger.addEventListener("click", () => {
  burger.classList.toggle("-active");
  menu.classList.toggle("-active");
  body.classList.toggle("_lock");
});

const filter = document.querySelector(".filter");

if (filter) {
  const items = filter.querySelectorAll(".block-filter");

  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      item.querySelector(".block-filter__dropdown").classList.toggle("_active");
      item.querySelector(".block-filter__icon").classList.toggle("_active");

      if (event.target.classList.contains("block-filter__item")) {
        item.querySelector(".block-filter__value").textContent =
          event.target.textContent;
      }
    });
  });
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  // freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
  1200: {
    slidesPerView: 3
  },
  790 :{
    slidesPerView: 2
  }
}
});


