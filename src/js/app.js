/*
!(i) 
Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
Или когда импортирован весь файл, например import "files/script.js";
Неиспользуемый (не вызванный) код в итоговый файл не попадает.

Если мы хотим добавить модуль следует его расскоментировать
*/
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from './modules'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css 
*/
isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-popup="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
/* Раскомментировать для использования */
togglePopupWindows()
// =======================================================================================================

/*Динамический адаптив ===================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
import { useDynamicAdapt } from './modules/dynamicAdapt.js'
useDynamicAdapt()
// =======================================================================================================




/*Открытие/закрытие блоков spollers =======================================================================
// https://youtu.be/0fg9bZcL1RM
* Чтобы блок sollers открывался и закрывался
* На блок-оболочку спойллера и кнопку/заголовок, которая открывает и закрывает spollers
* Повешай атрибут data-spollers(на блок-оболочку) и data-spoller(на кнопку/заголовок)
* Если нужно что б spollers работал на определенной ширине экрана
* Добавь для атрибута блока значение в виде data-spollers="<ширина экрана, тип медиа запроса (min/max)"
* Для того что бы спойлер по умолчанию был открыть, следует к нужному блоку дописать класс "_active"
// ! Следует писать в HTML блок спойллера после кнопки/заголовки (иначе работать спойллер не будет)
// ! Визуальные атрибуты спойллера добавляются по классу "._init"
*/
/* Раскомментировать для использования */
// spollerInit()

// =======================================================================================================
const swiperRewiews = new Swiper('.swiper-reviews', {
  speed: 600,
  spaceBetween: 400,
  slidesPerView: 1,
  slideToClickedSlide: true,
  modules: [Autoplay, Navigation],
  navigation: {
    nextEl: '.swiper-reviews__button-next',
    prevEl: '.swiper-reviews__button-back',
  },
})
const quisSwiper = new Swiper('.quis__swiper', {
  speed: 600,
  spaceBetween: 400,
  slidesPerView: 1,
  slideToClickedSlide: true,
  modules: [Autoplay, Navigation],
  navigation: {
    nextEl: '.quis__button-next',
    prevEl: '.quis__button-back',
  },
})
const swiperButtonNext = document.querySelectorAll('.swiper-reviews__button-next')
const swiperButtonBack = document.querySelectorAll('.swiper-reviews__button-back')
const allSlidesRewiews = document.querySelectorAll('.swiper-reviews-slide')
let paginatorRewiews =  document.querySelectorAll('.paginator-rewiews__now')
let i = 1;
if (swiperButtonNext.length > 0) {
  swiperButtonNext.forEach(button => {
    button.addEventListener('click', () => {
      if (i < allSlidesRewiews.length) {
        i++
        paginatorRewiews.forEach(paginator => {
          paginator.textContent = i;
        });
      }
    })
  });
}
if (swiperButtonBack.length > 0) {
  swiperButtonBack.forEach(button => {
    button.addEventListener('click', () => {
      if (i > 1) {
        i = i - 1
        paginatorRewiews.forEach(paginator => {
          paginator.textContent = i;
        });
      }
    })
  });
}

const checkboxQuizItem = document.querySelectorAll('.checkbox-quiz__item');
const checkboxQuizLabel = document.querySelectorAll('.checkbox-quiz__label');

if (checkboxQuizLabel.length > 0) {
  checkboxQuizLabel.forEach(item => {
    item.addEventListener('click', () => {
      item.parentNode.classList.toggle('_active');
    });
  });
}



const wrapper = document.querySelector('.wrapper')

window.onscroll = onScroll;
  function onScroll() {
    var top = window.pageYOffset;
    if (top > 60) {
      wrapper.classList.add('hide');
    } else {
      wrapper.classList.remove('hide');
    }
  }
