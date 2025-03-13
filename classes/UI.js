import Category from "./Category.js";
class UI {

    // Kategorijos koregavimo ir pridejimo funkcija  

    static displayCategoryForm(menu, contentElement, category = null){
        console.log('esam UI')
        let categoryName = '';
        let title = '';
        let btnText = '';

        if (category){
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
        categoryForm.addEventListener('submit', (e) =>{
            e.preventDefault();
            const categoryName = e.target.CategoryName.value;
            // console.log(`kategorijos pavadinimas ${categoryName}`)
    
            if(category){
                category.setCategoryName(categoryName);
                UI.displayCategoryList(menu, contentElement )
            }else {
                const newCategory = new Category(categoryName, menu)
            }
            // const newCategory = new Category(categoryName, mainMenu)
            // console.log(`kategorijos objektas ${newCategory.getCategoryName()}`)
    
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

    static attachEditListeners(menu, contentElement){
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
        }, 0);
    }





}
export default UI