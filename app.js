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

const cake = new Dish('Tortas', 4.5, 1, mainMenu);
const iceCream = new Dish('Ledai', 3.8, 1, mainMenu, 'patys skaniausi');
const cafe = new Dish('Kava', 3, 4, mainMenu);
const tea = new Dish('Arbata', 2, 4, mainMenu);
const oml = new Dish('Omletas', 7, 2, mainMenu);
const sum = new Dish('Sumuštinis', 5, 2, mainMenu);
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

    const dishForm = document.getElementById('addDishForm');

    dishForm.addEventListener('submit', (e) =>{
        e.preventDefault();

        const dishName = e.target.dishName.value;
        const dishPrice = e.target.dishPrice.value;
        const categoryId = e.target.categorySelect.value;
        const description = e.target.dishDescription.value;

        // console.log(`patiekalo pavadinimas ${dishName}`)
        // console.log(`patiekalo kaina ${dishPrice}`)
        // console.log(`patiekalo pavadinimas ${category}`)
        // console.log(`patiekalo pavadinimas ${description}`)

        const newDish = new Dish(dishName, dishPrice, categoryId, mainMenu, description)
        console.log(mainMenu)
        e.target.reset();
    })
}

//_____________________________________________________
//__________HTML turinio kurimas_-> PATIEKALU SARASAS___

const showDishList = document.getElementById('showDishList');

showDishList.addEventListener('click', ()=>displayDishList());

function displayDishList() {
    content.innerHTML = mainMenu.generateDishList();
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

