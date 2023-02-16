const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


// Image gallery started 
var grid = document.querySelector('.gallery');
if(grid){

  var masonry = new Masonry(grid, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });
}
  // Image gallery end




// babyPotato started
var swiper1 = new Swiper(".babyPotato", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".babyPotatoPage",
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
// babyPotato end



  // Highest Selling Courses started
  var swiper8 = new Swiper(".relatedProduct", {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".relatedProductPage",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });