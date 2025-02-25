class Menu {
    constructor(){
        this.categories = [];
    }

    getCategories(){
        return this.categories;
    }

    addCategory(category){
        this.categories.push(category);
    }

}
export default Menu;