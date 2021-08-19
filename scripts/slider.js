new Swiper('.highlights-slider', {
    speed: 3000,
    // longSwipesMs: 10000,
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    },
    effect: 'fade', 
    fadeEffect: {
      crossFade: false
    }
    
    
  });

    
            
