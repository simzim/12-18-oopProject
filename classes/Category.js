import Menu from './Menu.js';

class Category {

    #id;
    #categoryName;
    #dishesList;
   
    static categoryCounter = 0;

    constructor(name){
        Category.categoryCounter++;
        this.#id = Category.categoryCounter;
        this.#categoryName = name;
        this.#dishesList = [];

        // if(menu instanceof Menu){
        //     menu.addCategory(this);
        // } else {
        //     throw new Error('pateiktas parametras nepriklauso Menu klasei');
        // }
    }

    getId(){
        return this.#id;
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