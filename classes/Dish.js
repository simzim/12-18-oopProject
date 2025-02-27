import Menu from './Menu.js';

class Dish {
    #name;
    #price;
    #description;
    #category;

    static dishCounter = 0;
    static allDishes = [];

    //konstruktorius

    constructor(name, price, categoryId, menu, description = 'nera aprašymo'){
        Dish.dishCounter++;
        this.#name = name;
        this.#price = price;
        this.#description = description;
        // this.#category = category;
        // category.addDish(this);

        if(menu instanceof Menu){
            const kategorija = menu.getCategories().find(c => c.getId() == categoryId);

            if (kategorija){
                this.#category = kategorija;
                kategorija.addDish(this);
                console.log(`patiekalas ipusintas ${Dish.dishCounter} , ${kategorija.getCategoryName()}`)
           } else {
                throw new Error('Kategorija nerasta.')
           }

        } else {
            throw new Error('pateiktas parametras nepriklauso Menu klasei');
        }

        Dish.allDishes.push(this);

    }

    // Get'eriai
    getName(){
        return this.#name;
    }    
    
    getPrice(){
        return this.#price;
    }

    getDescription(){
        return this.#description;
    }    
    
    getCategory(){
        return this.#category.getCategoryName();
    }

    // Set'eriai

    setName(newName){
        this.#name = newName;
    }

    setPrice(newPrice){
        if (newPrice >=0){
            this.#price = newPrice;
        } else {
            throw new Error('kaina negali būti mažesnė už 0')
        }
    }

    setDescription(newDescription){
        this.#description = newDescription;
    }

    setCategory(newCategory){
        this.#category.setCategoryName(newCategory);
    }

    getInfo(){
        return `Patiekalas: ${this.#name}, 
                kaina: ${this.#price}, 
                aprašymas: ${this.#description},
                kategorija: ${this.#category.getCategoryName()} `;
    }

    static getAllDishes(){
        return Dish.allDishes;
    }
}
export default Dish;