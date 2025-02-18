class Dish {
    #name;
    #price;
    #description;
    #category;

    //konstruktorius

    constructor(name, price, category, description = 'nera aprašymo'){
        this.#name = name;
        this.#price = price;
        this.#category = category;
        category.addDish(this);

        this.#description = description;
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


}
export default Dish;