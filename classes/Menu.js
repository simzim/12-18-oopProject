import Category from "./Category.js";
import Dish from "./Dish.js";
class Menu {

    constructor() {
        this.categories = [];
        this.allDishes = [];
    }

    getCategories() {
        return this.categories;
    }

    getAllDishes() {
        return this.allDishes;
    }

    addCategory(name) {
        const category = new Category(name)
        this.categories.push(category);
        return category
    }

    addDish(name, price, categoryId, description) {

        const category = this.categories.find(cat => cat.getId() === parseInt(categoryId))
        if(!category) throw new Error('kategorija nerasta')

        const dish = new Dish(name, price, description);
        dish.setCategory(category);
        category.addDish(dish);
        this.allDishes.push(dish);
    }

    editCategory(categoryId){
        const category = this.categories.find(cat => cat.getId() === parseInt(categoryId));
        return category;
    }
    

    removeCategory(categoryId){
        const categeryIndex = this.categories.findIndex(cat => cat.getId() === parseInt(categoryId))
        if(categeryIndex === -1) throw new Error('Kategorija nerasta');

        const category = this.categories[categeryIndex];

        category.getDishesList().forEach(dish =>{
            dish.setCategory(null);
        })

        this.categories.splice(categeryIndex, 1);
    
    }

}
export default Menu;