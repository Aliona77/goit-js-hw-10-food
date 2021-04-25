import menuItem from './menu.json';

import menuTempate from './templates/tempates.hbs';

console.log(menuTempate);

import './styles.css';


///Розмітка 
let menu = document.querySelector('.js-menu');

function createMenu(food) {
    const markup = food.map(create => menuItem(create)).join('');
    menu.insertAdjacentHTML('beforeend', markup);
}
createMenu(menuItem);

////Зміна теми