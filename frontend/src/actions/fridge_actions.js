import * as FridgeAPIUtil from '../util/fridge_api_util';
import * as IngredientAPIUtil from '../util/ingredient_api_util';
import { getIngredientById } from '../util/ingredient_api_util';


export const RECEIVE_FRIDGE = 'RECIEVE_FRIDGE';
export const RECEIVE_FRIDGE_INGREDIENT = 'RECEIVE_FRIDGE_INGREDIENT';
export const REMOVE_FRIDGE_INGREDIENT = 'REMOVE_FRIDGE_INGREDIENT';

const receiveFridge = fridge => ({
  type: RECEIVE_FRIDGE,
  fridge
});

const receiveFridgeIngredient = ingredient => ({
  type: RECEIVE_FRIDGE_INGREDIENT,
  ingredient: ingredient.data
});

const removeFridgeIngredient = id => ({
  type: REMOVE_FRIDGE_INGREDIENT,
  id
});

// Add a condition where if there is an ingredient with just an amount but no
// information, then fetch the ingredient information. Such entries can happen 
// when unmaking items. 
export const fetchFridge = (userId) => dispatch => (
  FridgeAPIUtil
    .fetchFridge(userId)
    .then(({ data }) => {
      let ids = Object.keys(data.ingredients);
      dispatch(receiveFridge(data));
      for (let i = 0; i < ids.length; i++) {
        let id = ids[i];
        if (data.ingredients[id].amount && !data.ingredients[id].id) {
          IngredientAPIUtil
            .getIngredientById(id)
            .then(ingredient => {
              FridgeAPIUtil
              .addFridgeIngredient(userId, ingredient.data, data.ingredients[id].amount)
              .then(() => {
                // results--;
                dispatch(receiveFridgeIngredient(ingredient));
                data[ingredient.data.id] = ingredient.data;
              })
            })
        }
      }
    })
);

export const addFridgeIngredient = (userId, ingredient, amount) => dispatch => {
  return getIngredientById(ingredient.id).then(res => {
    let aisle = res.data.aisle;
    ingredient.aisle = aisle;
    FridgeAPIUtil
      .addFridgeIngredient(userId, ingredient, amount)
      .then(ingredient => dispatch(receiveFridgeIngredient(ingredient)))
  });
};

export const modifyIngredient = (userId, ingredient, amount) => dispatch =>(
  FridgeAPIUtil
    .modifyIngredient(userId, ingredient, amount)
    .then(res => {
      if(res.data === "") {
        dispatch(removeFridgeIngredient(ingredient.id));
      } else {
        dispatch(receiveFridgeIngredient(res));
      }
    }
));
