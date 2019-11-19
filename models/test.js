const Fridge = require('./fridge');
const FridgeIngredient = require('./fridge_ingredient');


const fridge = new Fridge({
    userId: "5dd2fbaa8f4fd32cddd8b10c",
});

const ingredient1 = new FridgeIngredient({
    ingredientId: 50,
    ingredientName: "chicken",
    amount: 50
});

const ingredient2 = new FridgeIngredient({
    ingredientId: 70,
    ingredientName: "beef",
    amount: 20
});

let id1 = ingredient1.ingredientId;
let id2 = ingredient2.ingredientId;


fridge.ingredients[id1] = ingredient1;
fridge.ingredients[id2] = ingredient2;


console.log(fridge);