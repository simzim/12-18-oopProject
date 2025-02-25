import Menu from './Menu.js';

class Category {
    #categoryName;
    #dishesList;
    // aprasymas = 'tuscias';

    constructor(name, menu){
        this.#categoryName = name;
        this.#dishesList = [];

        if(menu instanceof Menu){
            menu.addCategory(this);
        } else {
            throw new Error('pateiktas parametras nepriklauso Menu klasei');
        }
    }

    getCategoryName(){
        return this.#categoryName;
    }

    getDishesList() {  
        return this.#dishesList;  
    }  

    setCategoryName(newName){
        this.#categoryName = newName;
    }

    addDish(dish) {
        this.#dishesList.push(dish);
    }
}

export default Category;