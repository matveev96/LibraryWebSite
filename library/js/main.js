//Header section start

// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav_close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click', ()=> {
        menu.classList.remove('header_nav_active');
    });
}());

// При нажатии на иконку неавторизованного пользователя открывается окно Профиля,
// при повторном нажатии на иконку пользователя или другую область окно Профиля закрывается
(function () {
  const iconItem = document.querySelector('.header_icon_profile');
  const dropMenu = document.querySelector('.header_drop_menu');
  const hideIcon = document.querySelector('.header_icon_profile_hide');

  iconItem.addEventListener('click', ()=> {
    dropMenu.style.display = 'block';
    hideIcon.style.display = 'block';
  });

  hideIcon.addEventListener('click', ()=> {
    dropMenu.style.display = 'none';
    hideIcon.style.display = 'none';
  });

  // document.addEventListener( 'click', (e) => {
  //   const withinBoundaries = e.composedPath().includes(dropMenu);
  //   if ( ! withinBoundaries ) {
  //     dropMenu.style.display = 'none';  // скрываем элемент т к клик был за его пределами
  //     hideIcon.style.display = 'none';
  //   };
  // });
}());


//Header section end

//About section start
// Carousel About section start

/* этот код помечает картинки, для удобства разработки */
let i = 1;
for(let li of document.querySelectorAll('.about_slide')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
};

let width;
// Переменной width присваивается значение в зависимости от разрешения экрана
if(window.innerWidth < 1025){
  width = 614;
} else {
  width = 475;
};
// При resize переменной width присваивается значение в зависимости от разрешения экрана
window.addEventListener('resize', () => {
  if(window.innerWidth < 1025){
    width = 614;
} else {
    width = 475;
};
});

let count = 1; // видимое количество изображений

let position = 0; // положение ленты прокрутки

let list = document.querySelector('.about_list_slides');

let listElems = document.querySelectorAll('.about_slide');

document.querySelector('.dot_shadow1').onclick = function() {
  // сдвиг влево в нулевую точку карусели
  list.style.marginLeft = position + 'px';
};

document.querySelector('.dot_shadow2').onclick = function() {
  // сдвиг в среднюю точку карусели
  list.style.marginLeft = -width + 'px';
};

document.querySelector('.dot_shadow3').onclick = function() {
  // сдвиг в последнюю точку карусели
  list.style.marginLeft = -width * 2 + 'px';
};

// Сдвиг при width = 614 (появляются дополнительные dots)

document.querySelector('.dot_shadow4').onclick = function() {
    list.style.marginLeft = -width * 3 + 'px';
  };

document.querySelector('.dot_shadow5').onclick = function() {
    list.style.marginLeft = -width * 4 + 'px';
};

//Сдвиг стрелками при width = 614

(function (){
  document.querySelector('.about_arrow_left').onclick = function() {
    // сдвиг влево
    position += width * count;
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
    document.querySelector('.about_arrow_right').removeAttribute("disabled", "");
    if (position == 0) this.disabled = true;
  };
  
  document.querySelector('.about_arrow_right').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
      document.querySelector('.about_arrow_left').removeAttribute("disabled", "");
      if (position == -2456) this.disabled = true;
  };
}());

// Carousel About section end

// Scroll to anchors start
(function () {

  const smoothScroll = function (targetEl, duration) {
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top;
      let startPosition = window.scrollY;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}());
// Scroll to anchors end
//About section end


// Favorites section start

(function () {
  const WINTER_BTN = document.querySelector("#winter_season");
  const SPRING_BTN = document.querySelector("#spring_season");
  const SUMMER_BTN = document.querySelector("#summer_season");
  const AUTUMN_BTN = document.querySelector("#autumn_season");

  const WINTER_ITEMS = document.querySelector("#winter_items");
  const SPRING_ITEMS = document.querySelector("#spring_items");
  const SUMMER_ITEMS = document.querySelector("#summer_items");
  const AUTUMN_ITEMS = document.querySelector("#autumn_items");

  let seasons_array = [WINTER_ITEMS, SPRING_ITEMS, SUMMER_ITEMS, AUTUMN_ITEMS];

  SPRING_BTN.addEventListener("click", () => {
    SPRING_ITEMS.classList.remove("season_hidden");
    for (let i = 0; i < seasons_array.length; i++) {
      if (seasons_array[i].classList.contains("season_hidden") || seasons_array[i] == SPRING_ITEMS) {
        continue;
      } else {
        seasons_array[i].classList.add("season_hidden");
      };
    };
  });

  WINTER_BTN.addEventListener("click", () => {
    WINTER_ITEMS.classList.remove("season_hidden");
    for (let i = 0; i < seasons_array.length; i++) {
      if (seasons_array[i].classList.contains("season_hidden") || seasons_array[i] == WINTER_ITEMS) {
        continue;
      } else {
        seasons_array[i].classList.add("season_hidden");
      };
    };
  });

  SUMMER_BTN.addEventListener("click", () => {
    SUMMER_ITEMS.classList.remove("season_hidden");
    for (let i = 0; i < seasons_array.length; i++) {
      if (seasons_array[i].classList.contains("season_hidden") || seasons_array[i] == SUMMER_ITEMS) {
        continue;
      } else {
        seasons_array[i].classList.add("season_hidden");
      };
    };
  });

  AUTUMN_BTN.addEventListener("click", () => {
    AUTUMN_ITEMS.classList.remove("season_hidden");
    for (let i = 0; i < seasons_array.length; i++) {
      if (seasons_array[i].classList.contains("season_hidden") || seasons_array[i] == AUTUMN_ITEMS) {
        continue;
      } else {
        seasons_array[i].classList.add("season_hidden");
      };
    };
  });

}());