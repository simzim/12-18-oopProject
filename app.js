import Dish from './classes/Dish.js';
import Category from './classes/Category.js';
import Menu from './classes/Menu.js';


// Susikuriam meniu
const mainMenu = new Menu();
console.log(mainMenu);

// prisidedam kategorija
const dessert = new Category('Desertai', mainMenu);
console.log(mainMenu);

const cake = new Dish('Tortas', 4.5, dessert);
const iceCream = new Dish('Ledai', 3.8, dessert, 'patys skaniausi');

console.log(mainMenu);

//________________________________________________
//________________________________________________

const content = document.getElementById('content');
const showCategoryForm = document.getElementById('addCategoryOption');


showCategoryForm.addEventListener('click', () => displayAddCategoryForm() )


function displayAddCategoryForm(){
    
    content.innerHTML = `
        <h2>Pridėti naują Kategoriją</h2>
        <form id="addCategoryForm" class="addForm">
            <label for="CategoryName">Kategorijos pavadinimas</label>
            <input type="text" id="CategoryName" required>

            <button class="btn" type="submit">Išsaugoti Kategoriją</button>

        </form>
    
    `;
}



// console.log(dessert.getCategoryName());

// const cake = new Dish('Tortas', 4.5, dessert);
// const iceCream = new Dish('Ledai', 3.8, dessert, 'patys skaniausi');

// console.log(cake.getInfo());
// console.log(dessert);
// console.log(`viso sukurta ${Dish.dishCounter}`);

// dessert.getDishesList().forEach(dish =>{
//     console.log(dish.getInfo());
// })

