import menuItem from './menu.json';

//import menuTempate from './templates/tempates.hbs';

import './styles.css';

let menu = document.querySelector('.js-menu');

function createMenu(array) {
    const markup = array.map(post => menuItem(post)).join('');
    menu.insertAdjacentHTML('beforeend', markup);
}
createMenu(menuItem);