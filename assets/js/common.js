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


// Swiper Js Started 

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



  // Related product started
  var swiper2 = new Swiper(".relatedProduct", {
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
  // Related product end


  // Our Team started 
  var swiper2 = new Swiper(".ourTeam", {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".ourTeamPage",
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
  // Our Team end 


// Swiper Js end    


// practice 


$(document).ready(function() {
    
  //alert('here');

$('.outlets a').click(function(){

   $('.outlet').hide();
   $('.outlets a.active').removeClass('active');
   $(this).addClass('active');
   
   var panel = $(this).attr('href');
   $(panel).fadeIn(1000);
   
   return false;  // prevents link action
  
});  // end click 

   $('.outlets li:first a').click();
   
}); // end ready

