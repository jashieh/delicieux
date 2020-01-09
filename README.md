# <a href="https://delicieux.herokuapp.com/" target="_blank">Délicieux</a>

![](https://github.com/jashieh/delicieux/blob/master/demo/landing.gif)

## Background and Overview
Délicieux is a dynamically updating grocery management and meal planning application with smart recipe suggestions based on stored ingredients, filter parameters and diet goals. Built on the MERN Stack (MongoDB, Express, React, Node.js), délicieux allows the user to keep track of the ingredients in their fridge, either by selecting quantities from the recipes they select or by manually inputting the data into their digital fridge. The user can also input their personal goals, dietary restrictions, allergies, and cuisine preferences to filter the recipes displayed to them. A weekly summary of the recipes the user choose and its corresponding macro information is also provided.

## Technologies Used
* **MongoDB:** MongoDB was used as the primary database for the project.
* **Express:** Express was used to manage the application's backend interface.
* **Node.js:** Node.js was used to execute JavaScript code outside of a browser.
* **React/Redux:** React and Redux libraries were used to facilitate frontend development.

## Feature Highlights

### Ingredient Tracking

![](https://github.com/jashieh/delicieux/blob/master/demo/ingredients.gif)

Delicieux compiles a weekly shopping list of all the ingredients and amounts needed for the week. By pressing the check mark, the ingredients are automatically added to the user's fridge, allowing them to keep track of their ingredients easily. When a user clicks "made this recipe" on a dish, the subsequent ingredients needed to make that dish are also subtracted from the user's fridge, making ingredient managemenet extremely simple.

### Autocomplete Search

![](https://github.com/jashieh/delicieux/blob/master/demo/auto.gif)

An autocomplete search function was implemented by creating a debounce function, which automatically runs the search function if a keystroke has not be performed within a given amount of time. This allows for related search results to auto-populate the search bar without having the user press enter or click additional buttons on the screen, making for a better overall experience.

```javascript
const debounce = (func, delay) => {
  let inDebounce
    return function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
}
```

### Drag and Drop 

![](https://github.com/jashieh/delicieux/blob/master/demo/drag.gif)

When browsing the recipe index, users may click and drag cards from the menu into their cart using the "drag and drop feature", freeing up space on the UI for other buttons and information to be displayed and making the app feel more intuitive and less cluttered. 

```javascript
// main_index_item.jsx

onDragStart(e) {
    let { recipe } = this.props;
    e.dataTransfer.setData("recipeId", recipe.recipeId);
}

// cart_item.jsx
onDrop(e) {
    let recipeId = e.dataTransfer.getData("recipeId");
    if (recipeId) {
      let { cart, date, time, getRecipeDB, addCartMeal, getCart, recipes } = this.props;
      let recipe = this.recipe();
      addCartMeal(cart.id, {
        date,
        time,
        recipeId: parseInt(recipeId),
      })
   }
}
```

 ### Recipe Filter

We have implemented a recipe filtering feature to improve the quality of recipe search results for the user. The feature displays a conditional filter with pre-determined query parameters such as dietary restriction, nutritional goals, cuisine type, and presence of ingredients that the user can select to refine their search. After the search button function is executed, the resulting search scans the database and only displays results that conform to user-selected preferences.



 ### Recipe Index

Based on the recipe filters previosuly applied, the application will assemble 12 optimized recipe suggestions for the user. By clicking on each recipe, attributes such as nutritional information, macronutrient distributions, and recipe instructions are automatically retrived from the Food and Recipe API known as Spoonacular to facilitate accomplishment of the user's weekly goals. The user is able to develop weekly meal plans with ease by dragging and dropping individual recipes into their weekly meal planner. 
  


