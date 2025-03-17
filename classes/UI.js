import Category from "./Category.js";
class UI {

    // Kategorijos koregavimo ir pridejimo funkcija  

    static displayCategoryForm(menu, contentElement, category = null) {
        console.log('esam UI')
        let categoryName = '';
        let title = '';
        let btnText = '';

        if (category) {
            categoryName = category.getCategoryName();
            title = 'Redaguoti kategoriją';
            btnText = 'Atnaujinti Kategoriją';
        } else {
            title = 'Pridėti naują kategoriją';
            btnText = 'Išsaugoti Kategoriją';
        }

        contentElement.innerHTML = `
            <h2>${title}</h2>
            <form id="addCategoryForm" class="addForm">
                <label for="CategoryName">Kategorijos pavadinimas</label>
                <input type="text" id="CategoryName" required value='${categoryName}'>
                <button class="btn" type="submit">${btnText}</button>
            </form>
        `;

        const categoryForm = document.getElementById('addCategoryForm');
        categoryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const categoryName = e.target.CategoryName.value;
            // console.log(`kategorijos pavadinimas ${categoryName}`)

            if (category) {
                category.setCategoryName(categoryName);
                UI.displayCategoryList(menu, contentElement)
            } else {

                menu.addCategory(categoryName);
            }

            e.target.reset();
        })
    }

    // Kategorijų atvaizdavimas

    static displayCategoryList(menu, contentElement) {

        let htmlContent = `<table>
        <tr>
            <th>Eil. nr.</th>
            <th>Pavadinimas</th>
            <th>Veiksmai</th>
        </tr>
        `;
        let counter = 0;
        menu.getCategories().forEach(cat => {
            htmlContent +=
                `
             <tr>
                <td>${++counter}</td>
                <td>${cat.getCategoryName()}</td>
                <td>
                    <button data-category-id="${cat.getId()}" class="action-btn edit-button" >
                        <img src="../assets/img/edit.png" width='25' >
                    </button>
                    <button data-category-id="${cat.getId()}" class="action-btn delete-button" >
                        <img src="../assets/img/delete.png" width='25' >
                    </button>
                
                </td>
            </tr>
        `
        });
        htmlContent += `</table>`;
        contentElement.innerHTML = htmlContent;

        UI.attachEditListeners(menu, contentElement);


        // return htmlContent;
    }

    static attachEditListeners(menu, contentElement) {
        setTimeout(() => {
            const editButtons = document.querySelectorAll('.edit-button');
            editButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const categoryId = e.target.closest('button').dataset.categoryId;
                    const category = menu.editCategory(categoryId)
                    // console.log(categoryId);
                    UI.displayCategoryForm(menu, contentElement, category)
                });
            });

            const deleteButtons = document.querySelectorAll('.delete-button');
            deleteButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const categoryId = e.target.closest('button').dataset.categoryId;

                    if (confirm('Ar tikrai norite ištrinti kategoriją?')) {
                        menu.removeCategory(categoryId);
                        UI.displayCategoryList(menu, contentElement)
                    }

                });
            })

        }, 0);
    }

    // rodyti patiekalų sąrašą

    static displayDishList(menu, contentElement) {

        let htmlContent = `<table>`
        menu.categories.forEach(cat => {
            htmlContent += `
                <tr>
                    <th>Kategorija:</th>
                    <th colspan='3'>${cat.getCategoryName()}</th>
                </tr>
   
            `;
            cat.getDishesList().forEach(dish => {
                htmlContent += `
                <tr>
                    <td>${dish.getName()}</td>
                    <td>${dish.getPrice()} eur</td>
                    <td>${dish.getDescription()}</td>
                    <td>
                    <button data-dish-id="${dish.getId()}" class="action-btn edit-button" >
                        <img src="../assets/img/edit.png" width='25' >
                    </button>
                    <button data-dish-id="${dish.getId()}" class="action-btn delete-button" >
                        <img src="../assets/img/delete.png" width='25' >
                    </button>
                
                </td>
                </tr>
                `;
            });
        });

        const uncategorizedDishes = menu.getAllDishes().filter(dish => dish.getCategory() === "Nėra Kategorijos")

        if (uncategorizedDishes.length > 0) {
            htmlContent += `
                <tr>
                    <th>Kategorija:</th>
                    <th colspan='3'>Be Kategorijos</th>
                </tr>
                `;
            uncategorizedDishes.forEach(dish => {
                htmlContent += `
                    <tr>
                        <td>${dish.getName()}</td>
                        <td>${dish.getPrice()} eur</td>
                        <td>${dish.getDescription()}</td>
                        <td>
                        <button data-dish-id="${dish.getId()}" class="action-btn edit-button" >
                            <img src="../assets/img/edit.png" width='25' >
                        </button>
                        <button data-dish-id="${dish.getId()}" class="action-btn delete-button" >
                            <img src="../assets/img/delete.png" width='25' >
                        </button>
                
                </td>
                    </tr>
                    `;
            });
        } else {
            htmlContent += ` 
             <tr>
                    <th colspan='4'>Nėra patiekalų be kategorijos</th>
            </tr>`
        }

        htmlContent += `</table>`
        contentElement.innerHTML = htmlContent;
    }


    // DISH forma

    static displayDishForm(menu, contentElement){
        contentElement.innerHTML = `
            <h2>Pridėti naują Patiekalą</h2>
            <form id="dishForm" class="addForm">
                <label for="dishName">Patieklo pavadinimas:</label>
                <input type="text" id="dishName" required>
    
                <label for="dishPrice">Patieklo kaina:</label>
                <input type="text" id="dishPrice" required>
                
                <label for="dishDescription">Aprašymas:</label>
                <textarea name="description" id="dishDescription" rows="5" cols="30"></textarea>
                
                <label for="categorySelect">Pasirinkite kategoriją:</label>
                <select id="categorySelect" required>
                    <option value="">Pasirinkte Kategoriją</option>
                    ${menu.getCategories().map((cat) => 
                        `<option value='${cat.getId()}'>${cat.getCategoryName()}</option>`)}
                </select>
                <button class="btn" type="submit">Išsaugoti Patiekalą</button>
            </form> 
        `
        const dishForm = document.getElementById('dishForm');
    
        dishForm.addEventListener('submit', (e) =>{
            e.preventDefault();
    
            const dishName = e.target.dishName.value;
            const dishPrice = e.target.dishPrice.value;
            const categoryId = e.target.categorySelect.value;
            const description = e.target.dishDescription.value;
    
            // console.log(`patiekalo pavadinimas ${dishName}`)
            // console.log(`patiekalo kaina ${dishPrice}`)
            // console.log(`patiekalo kategorijos id ${categoryId}`)
            // console.log(`patiekalo aprašymas ${description}`)
    
            menu.addDish(dishName, dishPrice, categoryId, description)
    
            e.target.reset();
        })
    }
}
export default UI