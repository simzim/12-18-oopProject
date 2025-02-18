class Category {
    #categoryName;
    #dishesList;
    aprasymas = 'tuscias';

    constructor(name){
        this.#categoryName = name;
        this.#dishesList = [];
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