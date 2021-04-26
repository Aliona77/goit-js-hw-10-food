import templateCard from './templates/template.hbs';
import food from './menu.json';
import './styles.css';


///Розмітка 

const menu = document.querySelector('.js-menu');
     console.log(menu);

function createMenu(food) {
    return food.map(templateCard).join('');
}

const markup = createMenu(food);
menu.insertAdjacentHTML('beforeend', markup);


//                               ТЕМА