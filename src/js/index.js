import '../style/style.scss';

/** Функция (Удаляет / Добавляет) класс 'not-selected' для `select` в зависимости от выбранного `option` */
function checkSelectValue(element) {
    element.classList.toggle('not-selected', parseInt(element.value, 10) === 0);
}

/** После загрузки сайта ищем все `select` и добавляем к ним класс `not-selected` */
window.addEventListener('load', function () {
    [...document.getElementsByTagName('select')].forEach(item => {
        checkSelectValue(item);
    })
})

/**
 * При изменении значения в `select` вызываем функцию которая (Удаляет / Добавляет) класс 'not-selected'
 * для `select` в зависимости от выбранного `option`
 * */
window.addEventListener('change', function (event) {
    checkSelectValue(event.target);
})

/**
 * Слушаем чекбокс и при его изменении Прячем / Показываем DIV
 * */
document.getElementById('temperature-container__trigger')
    .addEventListener('change', function (event) {
        document.getElementById('temperature-container').classList.toggle('hidden', !event.target.checked);
    })