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

    // Carousel About section

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

    document.querySelector('.about_arrow_left').onclick = function() {
        // сдвиг влево
        position += width * count;
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
    };
  
    document.querySelector('.about_arrow_right').onclick = function() {
        // сдвиг вправо
        position -= width * count;
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    };