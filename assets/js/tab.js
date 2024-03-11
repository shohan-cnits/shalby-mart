
var swiper = new Swiper('.selling-slider', {
  slidesPerView: 4,
  spaceBetween: 20,
  direction: getDirection("horizonta"),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
});

function getDirection() {
  var windowHeight = window.innerHeight;
  var direction = window.innerHeight <= 3520 ? 'vertical' : 'horizonta';

  return direction;
}

