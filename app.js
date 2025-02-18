import Dish from './classes/Dish.js';
import Category from './classes/Category.js';

const dessert = new Category('Desertai');

console.log(dessert.getCategoryName());

const cake = new Dish('Tortas', 4.5, dessert);
const iceCream = new Dish('Ledai', 3.8, dessert, 'patys skaniausi');

console.log(cake.getInfo());
console.log(dessert);

dessert.getDishesList().forEach(dish =>{
    console.log(dish.getInfo());
})

