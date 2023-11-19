// Меню выбора автомобилей

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');


tabItem.forEach(function(element){
  element.addEventListener('click', open);
})

function open(evt) {
  // Отслеживаем по IP кнопку на которую кликнули
  const tabTarget = evt.currentTarget;
  // Запоминаем что записано в дата атрибуте
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item){
    // Удалим у кнопки класс tabs__btn-item--active
    item.classList.remove('tabs__btn-item--active');
  });

  // Добавим к кнопке на которую кликнули класс tabs__btn-item--active
  tabTarget.classList.add('tabs__btn-item--active');

  tabContent.forEach(function(item){
    // Удаляем у блока класс tabs__content-item--active
    item.classList.remove('tabs__content-item--active');
  });

  // Показываем только тот блок который содержит соответствующее значение в дата атрибуте и id
  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

// Кнопка вверх

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // Удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // Добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // При прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // Определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // Если страница прокручена больше чем на 200px, то делаем кнопку видимой, иначе скрываем
      scrollY > 200 ? this.show() : this.hide();
    });
    // При нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // Переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();