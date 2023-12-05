// const menuBtn = document.querySelector('.menu-btn');
// const menuBtnLink = document.querySelectorAll('.menu a');
// const menu = [menuBtn, ...menuBtnLink];


// menu.forEach(e => {
//   e.addEventListener('click', () => {
//     document.querySelector('.menu ul').classList.toggle('active');
//     if (menuBtn) {
//       document.querySelector('body').classList.toggle('scroll-none');
//       menuBtn.classList.toggle('menu-btn--active');
//     }
//   });
// });

// document.querySelectorAll('.menu a, .logo').forEach(link => {

//   link.addEventListener('click', function (e) {
//     e.preventDefault();

//     let href = this.getAttribute('href').substring(1);

//     const scrollTarget = document.getElementById(href);

//     const topOffset = 60;
//     // const topOffset = 0; // если не нужен отступ сверху 
//     const elementPosition = scrollTarget.getBoundingClientRect().top;
//     const offsetPosition = elementPosition - topOffset;

//     window.scrollBy({
//       top: offsetPosition,
//       behavior: 'smooth'
//     });
//   });
// });

//lazyload

let images = document.querySelectorAll('img[data-src]');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

function handleImg(myImg, observer) {
  myImg.forEach(myImgSingle => {
    if (myImgSingle.intersectionRatio > 0) {
      loadImage(myImgSingle.target);
    }
  });
};

function loadImage(image) {
  image.src = image.getAttribute('data-src');
};

const observer = new IntersectionObserver(handleImg, options);

images.forEach(img => {
  observer.observe(img);
})

const swiper1 = new Swiper('.swiper1', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper3 = new Swiper('.swiper3', {
  spaceBetween: 30,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper3,
  },
});


const swiper4 = new Swiper('.swiper4', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});