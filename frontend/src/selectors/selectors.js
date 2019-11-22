// Changes recipe array to , and also add a recipeId field 
export const recipeArrayToObject = (recipes) => {
  let obj = {};
  for (let i = 0; i < recipes.length; i++) {
    if (!recipes[i]["recipeId"])
      recipes[i]["recipeId"] = recipes[i].id;
    obj[recipes[i].recipeId] = recipes[i];
  }
  return obj;
}

