(function ($) {
  "use strict";

  /*****************************
   * Commons Variables
   *****************************/
  var $window = $(window),
    $body = $("body");

  /****************************
   * Sticky Menu
   *****************************/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".sticky-header").removeClass("sticky");
    } else {
      $(".sticky-header").addClass("sticky");
    }
  });

  /*****************************
   * Off Canvas Function
   *****************************/
  (function () {
    var $offCanvasToggle = $(".offcanvas-toggle"),
      $offCanvas = $(".offcanvas"),
      $offCanvasOverlay = $(".offcanvas-overlay"),
      $mobileMenuToggle = $(".mobile-menu-toggle");
    $offCanvasToggle.on("click", function (e) {
      e.preventDefault();
      var $this = $(this),
        $target = $this.attr("href");
      $body.addClass("offcanvas-open");
      $($target).addClass("offcanvas-open");
      $offCanvasOverlay.fadeIn();
      if ($this.parent().hasClass("mobile-menu-toggle")) {
        $this.addClass("close");
      }
    });
    $(".offcanvas-close, .offcanvas-overlay").on("click", function (e) {
      e.preventDefault();
      $body.removeClass("offcanvas-open");
      $offCanvas.removeClass("offcanvas-open");
      $offCanvasOverlay.fadeOut();
      $mobileMenuToggle.find("a").removeClass("close");
    });
  })();

  /**************************
   * Offcanvas: Menu Content
   **************************/
  function mobileOffCanvasMenu() {
    var $offCanvasNav = $(".offcanvas-menu"),
      $offCanvasNavSubMenu = $offCanvasNav.find(".mobile-sub-menu");

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu
      .parent()
      .prepend('<div class="offcanvas-menu-expand"></div>');

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on("click", "li a, .offcanvas-menu-expand", function (e) {
      var $this = $(this);
      if (
        $this.attr("href") === "#" ||
        $this.hasClass("offcanvas-menu-expand")
      ) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active");
          $this.siblings("ul").slideUp();
          $this.parent("li").find("li").removeClass("active");
          $this.parent("li").find("ul:visible").slideUp();
        } else {
          $this.parent("li").addClass("active");
          $this
            .closest("li")
            .siblings("li")
            .removeClass("active")
            .find("li")
            .removeClass("active");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.siblings("ul").slideDown();
        }
      }
    });
  }
  mobileOffCanvasMenu();

  /****************************************
   *   Service Slider
   *****************************************/
  var service_display_slider = new Swiper(
    ".service-display-slider .swiper-container",
    {
      slidesPerView: 3,
      speed: 1500,
      loop: true,
      spaceBetween: 45,
      pagination: {
        el: ".service-display-dots .swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    }
  );

  /****************************************
   *  Project Slider
   *****************************************/
  var project_display_slider = new Swiper(
    ".project-display-slider .swiper-container",
    {
      spaceBetween: 50,
      effect: "slide",
      speed: 1500,
      // Navigation arrows
      navigation: {
        nextEl: ".project-display-box .button-next",
        prevEl: ".project-display-box .button-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1800: {
          centeredSlides: true,
          slidesPerView: 3,
        },
      },
    }
  );

  /****************************************
   *  Testimonial Slider
   *****************************************/
  var testimonial_display_slider = new Swiper(
    ".testimonial-display-slider .swiper-container",
    {
      slidesPerView: 2,
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: ".testimonial-display-box .button-next",
        prevEl: ".testimonial-display-box .button-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        992: {
          spaceBetween: 80,
          slidesPerView: 2,
        },
        1200: {
          spaceBetween: 100,
        },
        1400: {
          spaceBetween: 150,
        },
        1800: {
          spaceBetween: 175,
        },
      },
    }
  );

  /****************************************
   *  Company Logo Slider
   *****************************************/
  var company_logo_display_slider = new Swiper(
    ".company-logo-display-slider .swiper-container",
    {
      slidesPerView: 4,
      loop: true,

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 85,
        },
      },
    }
  );

  /************************************************
   * Counter Up
   ***********************************************/
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  /************************************************
   * Video  Popup
   ***********************************************/
  $(".wave-btn").venobox();

  /************************************************
   * Project Filter
   ***********************************************/
  $(".projects-wrapper-gallery-content").imagesLoaded(function () {
    $(".projects-gallery-filter-nav").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });

      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
    });

    var $grid = $(".projects-wrapper-gallery-content").isotope({
      itemSelector: ".filter-item",
      percentPosition: true,
    });
  });

  /************************************************
   * Progressbar
   ***********************************************/
  if ($(".progress-line").length) {
    $(".progress-line").appear(
      function () {
        var el = $(this);
        var percent = el.data("width");
        $(el).css("width", percent + "%");
      },
      { accY: 0 }
    );
  }

  /************************************************
   * Scroll Top
   ***********************************************/
  $("body").materialScrollTop();
})(jQuery);

class Slider {
  constructor(slider) {
    this.slider = slider;
    this.display = slider.querySelector(".image-display");
    this.navButtons = Array.from(slider.querySelectorAll(".nav-button"));
    this.prevButton = slider.querySelector(".prev-button");
    this.nextButton = slider.querySelector(".next-button");
    this.sliderNavigation = slider.querySelector(".slider-navigation");
    this.currentSlideIndex = 0;
    this.preloadedImages = {};

    this.initialize();
  }

  initialize() {
    this.setupSlider();
    this.preloadImages();
    this.eventListeners();
  }

  setupSlider() {
    this.showSlide(this.currentSlideIndex);
  }

  showSlide(index) {
    this.currentSlideIndex = index;
    const navButtonImg =
      this.navButtons[this.currentSlideIndex].querySelector("img");
    if (navButtonImg) {
      const imgClone = navButtonImg.cloneNode();
      this.display.replaceChildren(imgClone);
    }
    this.updateNavButtons();
  }

  updateNavButtons() {
    this.navButtons.forEach((button, buttonIndex) => {
      const isSelected = buttonIndex === this.currentSlideIndex;
      button.setAttribute("aria-selected", isSelected);
      if (isSelected) button.focus();
    });
  }

  preloadImages() {
    this.navButtons.forEach((button) => {
      const imgElement = button.querySelector("img");
      if (imgElement) {
        const imgSrc = imgElement.src;
        if (!this.preloadedImages[imgSrc]) {
          this.preloadedImages[imgSrc] = new Image();
          this.preloadedImages[imgSrc].src = imgSrc;
        }
      }
    });
  }

  eventListeners() {
    document.addEventListener("keydown", (event) => {
      this.handleAction(event.key);
    });

    this.sliderNavigation.addEventListener("click", (event) => {
      const targetButton = event.target.closest(".nav-button");
      const index = targetButton ? this.navButtons.indexOf(targetButton) : -1;
      if (index !== -1) {
        this.showSlide(index);
      }
    });

    this.prevButton.addEventListener("click", () => this.handleAction("prev"));
    this.nextButton.addEventListener("click", () => this.handleAction("next"));
  }

  handleAction(action) {
    if (action === "Home") {
      this.currentSlideIndex = 0;
    } else if (action === "End") {
      this.currentSlideIndex = this.navButtons.length - 1;
    } else if (action === "ArrowRight" || action === "next") {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.navButtons.length;
    } else if (action === "ArrowLeft" || action === "prev") {
      this.currentSlideIndex =
        (this.currentSlideIndex - 1 + this.navButtons.length) %
        this.navButtons.length;
    }

    this.showSlide(this.currentSlideIndex);
  }
}

const ImageSlider = new Slider(document.querySelector(".image-slider"));
