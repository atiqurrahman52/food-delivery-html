//  Mobile Menu Start 
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
//  Mobile Menu End


// OTP Generator start
const OTPInputFunction = () => {
  const inputs = document.querySelectorAll("#otp > *[id]");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keydown", function (event) {
      if (event.key === "Backspace") {
        inputs[i].value = "";
        if (i !== 0) inputs[i - 1].focus();
      } else {
        if (i === inputs.length - 1 && inputs[i].value !== "") {
          return true;
        } else if (event.keyCode > 47 && event.keyCode < 58) {
          inputs[i].value = event.key;
          if (i !== inputs.length - 1) inputs[i + 1].focus();
          event.preventDefault();
        } else if (event.keyCode > 64 && event.keyCode < 91) {
          inputs[i].value = String.fromCharCode(event.keyCode);
          if (i !== inputs.length - 1) inputs[i + 1].focus();
          event.preventDefault();
        }
      }
    });
  }
};
OTPInputFunction();

// OTP Generator End

// Quantity started
var incrementPlus;
var incrementMinus;

var buttonPlus = $(".cart-qty-plus");
var buttonMinus = $(".cart-qty-minus");

var incrementPlus = buttonPlus.click(function () {
  var $n = $(this)
    .parent(".button-container")
    .parent(".container-quantity")
    .find(".qty");
  $n.val(Number($n.val()) + 1);
});

var incrementMinus = buttonMinus.click(function () {
  var $n = $(this)
    .parent(".button-container")
    .parent(".container-quantity")
    .find(".qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount - 1);
  }
});
// Quantity end

// cart button started

const cartButton = document.querySelector("#cart-button");
const cartMenu = document.querySelector("#cart-menu");
const cartCloseMenu = document.querySelector("#cart-close-button");

const mobCartButton = document.querySelector("#mob-cart-button");
const mobCartMenu = document.querySelector("#mob-cart-menu");
const mobCartCloseMenu = document.querySelector("#mob-cart-close-button");

console.log(cartButton);

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

// cart button end


$(document).ready(function () {
  //  Password show/hide start 
  $(".eye-btn").on("click", function () {
    if ($(".input-psswd").attr("psswd-shown") == "false") {
      $(".input-psswd").removeAttr("type");
      $(".input-psswd").attr("type", "text");

      $(".input-psswd").removeAttr("psswd-shown");
      $(".input-psswd").attr("psswd-shown", "true");

      $(".eye-off").addClass("hidden");
      $(".eye-on").removeClass("hidden");
    } else {
      $(".input-psswd").removeAttr("type");
      $(".input-psswd").attr("type", "password");

      $(".input-psswd").removeAttr("psswd-shown");
      $(".input-psswd").attr("psswd-shown", "false");

      $(".eye-on").addClass("hidden");
      $(".eye-off").removeClass("hidden");
    }
  });

    //  Password show/hide end

    // Gallery started

$(".gallery").isotope({
  itemSelector: ".grid-item",
  masonry: {
    gutter: 24,
  },
});

// Gallery end



  
});




// let dateInit = document.querySelector(".dateInputInitial");
// $(function () {
//   $("#datepicker").datepicker();
// });
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


