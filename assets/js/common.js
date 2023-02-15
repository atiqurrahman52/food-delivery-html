const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


// Image gallery started 
var grid = document.querySelector('.gallery');
  var masonry = new Masonry(grid, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });
  // Image gallery end



  // Highest Selling Courses started
var swiper8 = new Swiper(".itemsSlider", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".itemsSliderPage",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});