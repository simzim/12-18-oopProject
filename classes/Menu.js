class Menu {
    constructor() {
        this.categories = [];
    }

    getCategories() {
        return this.categories;
    }

    addCategory(category) {
        this.categories.push(category);
    }

    editCategory(categoryId){
        const category = this.categories.find(cat => cat.getId() === parseInt(categoryId));
        return category;
    }
    // generateCategoryHTML() {
    //     let htmlContent = `<table>
    //     <tr>
    //         <th>Eil. nr.</th>
    //         <th>Pavadinimas</th>
    //         <th>Veiksmai</th>
    //     </tr>
    //     `;
    //     let counter = 0;
    //     this.categories.forEach(cat => {
    //         htmlContent += 
    //         `
    //          <tr>
    //             <td>${++counter}</td>
    //             <td>${cat.getCategoryName()}</td>
    //             <td>
    //                 <button data-category-id="${cat.getId()}" class="action-btn edit-button" >
    //                     <img src="../assets/img/edit.png" width='25' >
    //                 </button>
    //                 <button data-category-id="${cat.getId()}" class="action-btn delete-button" >
    //                     <img src="../assets/img/delete.png" width='25' >
    //                 </button>
                
    //             </td>
    //         </tr>
    //     `
    //     });
    //     htmlContent += `</table>`;

    //     this.attachEditListeners();
    //     return htmlContent;
    // }

    // attachEditListeners(){
    //     setTimeout(() => {
    //             const editButtons = document.querySelectorAll('.edit-button');
    //             editButtons.forEach(button => {
    //             button.addEventListener('click', (e) => {
    //                 const categoryId = e.target.closest('button').dataset.categoryId;
    //                 // console.log(categoryId);
    //                 this.editCategory(categoryId);
    //             });
    //         });
    //     }, 0);
    // }

    // editCategory(categoryId){

    //     const category = this.categories.find(cat => cat.getId() === parseInt(categoryId));

    //     if(category){
    //         const content = document.getElementById('content');
    //         content.innerHTML = this.getEditFormHTML(category);

    //         const editForm = document.getElementById('editCategoryForm');
    //         editForm.addEventListener('submit', (e) =>{
    //             e.preventDefault();
    //             const newCategoryName = e.target.editCategoryName.value;
    //             category.setCategoryName(newCategoryName);

    //             content.innerHTML = this.generateCategoryHTML();

    //         })


    //     }
    // }


    // getEditFormHTML(category){
    //     return `
    //         <h2>Redaguoti Kategoriją</h2>
    //     <form id="editCategoryForm" class="addForm">
    //         <label for="editCategoryName">Kategorijos pavadinimas</label>
    //         <input type="text" id="editCategoryName" value="${category.getCategoryName()}" required>
    //         <button class="btn" type="submit">Išsaugoti Kategoriją</button>
    //     </form>
    //     `
    // }


    generateDishList() {
        let htmlContent = `<table>`
        this.categories.forEach(cat => {
            htmlContent += `
                <tr>
                    <th>Kategorija:</th>
                    <th colspan='2'>${cat.getCategoryName()}</th>
                </tr>
   
            `;
            cat.getDishesList().forEach(dish => {
                htmlContent += `
                <tr>
                    <td>${dish.getName()}</td>
                    <td>${dish.getPrice()} eur</td>
                    <td>${dish.getDescription()}</td>
                </tr>
                `;
            });
        });
        htmlContent += `</table>`

        return htmlContent;
    }

}
export default Menu;