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

    generateInnerHTML() {
        let htmlContent = `<ul>`;
        this.categories.forEach(cat => {
            htmlContent += `<li> ${cat.getCategoryName()}</li>`
        });
        htmlContent += `</ul>`;

        return htmlContent;
    }

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