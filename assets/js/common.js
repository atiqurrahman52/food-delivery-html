let searchText = document.querySelector('.search-input');
let suggestion = document.querySelector('.search-suggestion')
let items = ['One', 'Two', 'Three','Four','Five', 'Six','Seven','Eight','Nine','Ten', 'Eleven','Twelve','Thirteen','Fourteen','Fifteen'];
let filterItems = []

document.addEventListener('keyup', () => {
  let inputText = searchText.value.toLowerCase();
  let singleItem;
  let para = document.createElement('p')
  if(inputText.length > 0){
    filterItems.push(items.filter(val => val.toLowerCase().match(inputText)));
    for(let i = 0; i < filterItems.length; i++){
      singleItem = filterItems[i]
      para.innerText = singleItem
      suggestion.appendChild(para)
    }
  }

})









// profile started

$(".edit-profile").on("click", function () {
  $(".inputs").removeAttr("readonly");
  $(".f-inputs").focus();
  $(".save-btn").removeClass("hidden").addClass("flex");
  $(this).addClass("hidden");
});

$(".saved").on("click", function () {
  $(".inputs").attr("readonly", "true");

  $(".save-btn").addClass("hidden");
  $(".edit-profile").removeClass("hidden");
});

// profile end

// payment started

$(".add-payment").on("click", function () {
  $(".save-payment").removeClass("hidden");
  $(".payment-option").addClass("hidden");
});

$(".save-pay").on("click", function () {
  $(".save-payment").addClass("hidden");
  $(".payment-option").removeClass("hidden");
});

// // payment end

// billing stared 
$(".edit-billing").on("click", function () {
  $(".billing").removeClass("hidden");
  $(".edit-div").addClass("hidden");
});

$(".save-bill").on("click", function () {
  $(".billing").addClass("hidden");
  $(".edit-div").removeClass("hidden");
});
// billing end 

// Step started
$(".action-btn").click(function () {
  // $(this).parent().find('.action').toggle();
  $(this).parent().find(".action").toggle();
});

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
      display: "flex",
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
            // display: "block",
            display: "flex",
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
      // display: "block",
      display: "flex",
    });

    if ($(".show").hasClass("first-screen")) {
      $(".prev").css({
        display: "none",
      });
    }

    $("#progressbar li")
      .eq($(".card2").index(current_fs))
      .removeClass("current");
    $("#progressbar li")
      .eq($(".card2").index(previous_fs))
      .removeClass("active");

    current_fs.animate(
      {},
      {
        step: function () {
          current_fs.css({
            display: "none",
            position: "relative",
          });

          previous_fs.css({
            // display: "block",
            display: "flex",
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
    menu.classList.add("hidden");
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
if (cartCloseMenu) {
  cartCloseMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    cartMenu.classList.add("hidden");
  });
}

// for mobile

if (mobCartButton) {
  mobCartButton.addEventListener("click", () => {
    mobCartMenu.classList.toggle("hidden");
  });
}
if (mobCartCloseMenu) {
  mobCartCloseMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    mobCartMenu.classList.add("hidden");
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
  // autoplay: {
  //   delay: 5000,
  // },
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

// Gallery started

$(".gallery").isotope({
  itemSelector: ".grid-item",
  masonry: {
    gutter: 24,
  },
});

// Gallery end

// Password visibility start

$(function () {
  $("#eye").click(function () {
    if ($(this).hasClass("ph-eye-slash")) {
      $(this).removeClass("ph-eye-slash");

      $(this).addClass("ph-eye");

      $("#password").attr("type", "text");
    } else {
      $(this).removeClass("ph-eye");

      $(this).addClass("ph-eye-slash");

      $("#password").attr("type", "password");
    }
  });
});
// Password visibility end

// payment option started

// payment option end

// Profile started
