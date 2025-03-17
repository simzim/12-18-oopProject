import Dish from './classes/Dish.js';
import Category from './classes/Category.js';
import Menu from './classes/Menu.js';
import UI from './classes/UI.js';

const content = document.getElementById('content');
// Susikuriam meniu
const mainMenu = new Menu();
console.log(mainMenu);


// prisidedam kategorija
mainMenu.addCategory('Desertai');
mainMenu.addCategory('Pusryčių meniu');
mainMenu.addCategory('Karšti Patiekalai');
mainMenu.addCategory('Gėrimai');

console.log(mainMenu);

mainMenu.addDish('Tortas', 4.5, 1);
mainMenu.addDish('Ledai', 3.8, 1, 'patys skaniausi');
mainMenu.addDish('Kava', 3, 4);
mainMenu.addDish('Arbata', 2, 4);
mainMenu.addDish('Omletas', 7, 2);
mainMenu.addDish('Sumuštinis', 5, 2);
console.log(mainMenu);

//________________________________________________
//__________HTML turinio kurimas_-> Show / add / update category________

const showCategoryForm = document.getElementById('addCategoryOption');
showCategoryForm.addEventListener('click', () => UI.displayCategoryForm(mainMenu, content))

const showCategoryList = document.getElementById('showCategoryList');
showCategoryList.addEventListener('click', () => UI.displayCategoryList(mainMenu, content))

//________________________________________________
//__________HTML turinio kurimas_-> prideti patiekala________

const showDishList = document.getElementById('showDishList');
showDishList.addEventListener('click', ()=>UI.displayDishList(mainMenu, content));

const showDishForm = document.getElementById('addDishOption');
showDishForm.addEventListener('click', () => UI.displayDishForm(mainMenu, content) )

//______________________________________________________________















