
class Dish {
    #id;
    #name;
    #price;
    #description;
    #category;

    static dishCounter = 0;

    //konstruktorius

    constructor(name, price, description = 'nera aprašymo'){
        Dish.dishCounter++;
        this.#id = Dish.dishCounter;
        this.#name = name;
        this.#price = price;
        this.#description = description;
        this.#category = null;
    }

    // Get'eriai

    getId (){
        return this.#id;
    }

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
        return this.#category ? this.#category.getCategoryName() : "Nėra Kategorijos";
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
        this.#category = newCategory;
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