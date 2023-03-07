// Step started

$(document).ready(function () {
  var current_fs, next_fs, previous_fs;

  // No BACK button on first screen
  if ($(".show").hasClass("first-screen")) {
    $(".prev").css({
      display: "none",
    });
  }

  // Next button
  $(".next-button").click(function () {
    current_fs = $(this).parent().parent().parent().parent();
    next_fs = $(this).parent().parent().parent().parent().next();

    $(".prev").css({
      display: "block",
    });

    $(current_fs).removeClass("show");
    $(next_fs).addClass("show");

    $("#progressbar li").eq($(".card2").index(next_fs)).addClass("current");
    $("#progressbar li").eq($(".card2").index(current_fs)).addClass("active");

    current_fs.animate(
      {},
      {
        step: function () {
          current_fs.css({
            display: "none",
            position: "relative",
          });

          next_fs.css({
            display: "block",
          });
        },
      }
    );
  });

  // Previous button
  $(".prev").click(function () {
    current_fs = $(".show");
    previous_fs = $(".show").prev();

    $(current_fs).removeClass("show");
    $(previous_fs).addClass("show");

    $(".prev").css({
      display: "block",
    });

    if ($(".show").hasClass("first-screen")) {
      $(".prev").css({
        display: "none",
      });
    }

    $("#progressbar li").eq($(".card2").index(current_fs)).removeClass("current");
    $("#progressbar li").eq($(".card2").index(previous_fs)).removeClass("active");

    current_fs.animate(
      {},
      {
        step: function () {
          current_fs.css({
            display: "none",
            position: "relative",
          });

          previous_fs.css({
            display: "block",
          });
        },
      }
    );
  });
});

// Step end

const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
const closeMenu = document.querySelector("#close-button");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

// cart button started

const cartButton = document.querySelector("#cart-button");
const cartMenu = document.querySelector("#cart-menu");
const cartCloseMenu = document.querySelector("#cart-close-button");
const mobCartButton = document.querySelector("#mob-cart-button");
const mobCartMenu = document.querySelector("#mob-cart-menu");
const mobCartCloseMenu = document.querySelector("#mob-cart-close-button");

if (cartButton) {
  cartButton.addEventListener("click", () => {
    cartMenu.classList.toggle("hidden");
  });
}
if (cartButton) {
  cartCloseMenu.addEventListener("click", () => {
    cartMenu.classList.addClass("hidden");
  });
}

// }for mobile
if (mobCartButton) {
  mobCartButton.addEventListener("click", () => {
    mobCartMenu.classList.toggle("hidden");
  });
}
if (mobCartButton) {
  mobCartCloseMenu.addEventListener("click", () => {
    mobCartMenu.classList.addClass("hidden");
  });
}
// if (cartCloseMenu && cartMenu) {
//   cartCloseMenu.addEventListener("click", () => {
//     console.log("click");
//     cartMenu.classList.add("hidden");
//   });
// }

// cart button end

// Filter started
$(".filter-btn").click(function () {
  $(this).toggleClass("active");
  $(".filter-dropdown").toggleClass("hidden");
});

$(".categories-btn").click(function () {
  $(this).toggleClass("active");
  $(".categories-dropdown").toggleClass("hidden");
});

// Filter end

// Image gallery started
var grid = document.querySelector(".gallery");
if (grid) {
  var masonry = new Masonry(grid, {
    // options
    itemSelector: ".grid-item",
    columnWidth: 200,
  });
}
// Image gallery end

// Swiper Js Started

// hero section started
var swiperHero = new Swiper(".heroSlider", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".heroSliderPage",
    clickable: true,
  },
});
// hero section  end

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
var swiper3 = new Swiper(".ourTeam", {
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

// Related product Recipes started
var swiper4 = new Swiper(".relatedProductRecipes", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".relatedProductRecipesPage",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
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

// Recipes Details Product started
var swiper5 = new Swiper(".recipesDetailsProduct", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".recipesDetailsProductPage",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
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
//Recipes Details Product end

// Swiper Js end

// practice

$(document).ready(function () {
  $(".outlets a").click(function () {
    $(".outlet").hide();
    $(".outlets a.active").removeClass("active");
    $(this).addClass("active");

    var panel = $(this).attr("href");
    $(panel).fadeIn(1000);

    return false; // prevents link action
  }); // end click

  $(".outlets li:first a").click();

  //  search modal started
  // Remove card modal started
  $(".search").click(function () {
    $(".modal").addClass("flex").removeClass("hidden");
    $("body").addClass("overflow-hidden");
    $(".navbar").addClass("border-b border-red-500");
  });
  $(".modal-overlay, .search-cancel").click(function () {
    $(".modal").removeClass("flex").addClass("hidden");
    $("body").removeClass("overflow-hidden");
  });
  //  Remove card modal end
  //  search modal end

  //  shop filter and categories dropdown started
  // $('.filter-btn').click(function(){
  //   $(this).toggleClass('active');
  //   $('.filter-dropdown').toggleClass('hidden');
  // })

  // $('.categories-btn').click(function(){
  //   $(this).toggleClass('active');
  //   $('.categories-dropdown').toggleClass('hidden');
  // })

  //  shop filter and categories dropdown end
}); // end ready

// Custom input design  started

// Custom input design  end
