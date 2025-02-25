import Dish from './classes/Dish.js';
import Category from './classes/Category.js';
import Menu from './classes/Menu.js';


// Susikuriam meniu
const mainMenu = new Menu();
console.log(mainMenu);

// prisidedam kategorija
const dessert = new Category('Desertai', mainMenu);
const morning = new Category('Pusryčių meniu', mainMenu);
const dinner = new Category('Karšti Patiekalai', mainMenu);
const drinks = new Category('Gėrimai', mainMenu);

console.log(mainMenu);

const cake = new Dish('Tortas', 4.5, dessert);
const iceCream = new Dish('Ledai', 3.8, dessert, 'patys skaniausi');

console.log(mainMenu);

//________________________________________________
//__________HTML turinio kurimas_-> prideti kategorija________

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

    const categoryForm = document.getElementById('addCategoryForm');
    categoryForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        const categoryName = e.target.CategoryName.value;
        // console.log(`kategorijos pavadinimas ${categoryName}`)

        const newCategory = new Category(categoryName, mainMenu)
        console.log(`kategorijos objektas ${newCategory.getCategoryName()}`)

        e.target.reset();
    })
}

//________________________________________________
//__________HTML turinio kurimas -> parodyti kategorijas______

const showCategoryList = document.getElementById('showCategoryList');

showCategoryList.addEventListener('click', () => displayCategoryList())

function displayCategoryList(){
    content.innerHTML = mainMenu.generateInnerHTML();
}

//________________________________________________
//__________HTML turinio kurimas_-> prideti patiekala________


const showDishForm = document.getElementById('addDishOption');
showDishForm.addEventListener('click', () => displayAddDishForm() )

function displayAddDishForm(){
    content.innerHTML = `
        <h2>Pridėti naują Patiekalą</h2>
        <form id="addDishForm" class="addForm">
            <label for="dishName">Patieklo pavadinimas:</label>
            <input type="text" id="dishName" required>

            <label for="dishPrice">Patieklo kaina:</label>
            <input type="text" id="dishPrice" required>
            
            <label for="dishDescription">Aprašymas:</label>
            <textarea name="description" id="dishDescription" rows="5" cols="30"></textarea>
            
            <label for="categorySelect">Pasirinkite kategoriją:</label>
            <select id="categorySelect" required>
                <option value="">Pasirinkte Kategoriją</option>
                ${mainMenu.getCategories().map((cat) => 
                    `<option value='${cat.getId()}'>${cat.getCategoryName()}</option>`)}
            
            </select>


            <button class="btn" type="submit">Išsaugoti Patiekalą</button>
        </form> 
    `
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

