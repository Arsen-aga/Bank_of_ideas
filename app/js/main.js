if (document.querySelector("#menu")) {

  const hamb = document.querySelector("#hamb");
  const popup = document.querySelector("#popup");
  const body = document.body;

  // Клонируем меню, чтобы задать свои стили для мобильной версии
  const menu = document.querySelector("#menu").cloneNode(1);

  // При клике на иконку hamb вызываем ф-ию hambHandler
  hamb.addEventListener("click", hambHandler);

  // Выполняем действия при клике ..
  function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
  }

  // Здесь мы рендерим элементы в наш попап
  function renderPopup() {
    popup.appendChild(menu);
  }

  // Код для закрытия меню при нажатии на ссылку
  const links = Array.from(menu.children);

  // Для каждого элемента меню при клике вызываем ф-ию
  links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });

  // Закрытие попапа при клике на меню
  function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
  }
}

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

// swiper

if (document.querySelector('.swiper')) {

  const swiper1 = new Swiper('.swiper1', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: false,
  });
  const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });

  const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      540: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const swiper4 = new Swiper('.swiper4', {
    loop: false,
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

// add image
if (document.querySelector(".add-photo") && document.querySelector(".add-photo__wrapper")) {
  const closeBtn = document.querySelector('.close');
  const defImg = `<img class="add-photo__img" src="img/page_2/photo.svg" alt="">`;

  closeBtn.addEventListener("click", () => {
    preview.innerHTML = defImg
    closeBtn.classList.remove('active');
  });

  const input = document.querySelector(".add-photo");
  const preview = document.querySelector(".add-photo__wrapper");

  input.addEventListener("change", updateImageDisplay);

  function updateImageDisplay() {
    if (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }

    let curFiles = input.files;
    if (preview.childElementCount > 1) {
      preview.removeChild(preview.firstChild);
    }
    else if (validFileType(curFiles[0])) {
      closeBtn.classList.add('active');
      let image = document.createElement("img");
      image.src = window.URL.createObjectURL(curFiles[0]);
      image.classList.add('add-photo__img');
      preview.appendChild(image);
    } else {
      preview.innerHTML = defImg
      closeBtn.classList.remove('active');
    }
  }

  const fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];

  function validFileType(file) {
    for (var i = 0; i < fileTypes.length; i++) {
      if (file.type === fileTypes[i]) {
        return true;
      }
    }

    return false;
  }
}