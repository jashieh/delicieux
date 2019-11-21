import * as APIUtil from '../util/fridge_api_util';

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

export const fetchFridge = (userId) => dispatch => (APIUtil.fetchFridge(userId)
  .then(fridge => dispatch(receiveFridge(fridge)))
);

export const addFridgeIngredient = (userId, ingredient, amount) => dispatch => 
  (APIUtil.addFridgeIngredient(userId, ingredient, amount).then(
    ingredient => dispatch(receiveFridgeIngredient(ingredient)))
);

export const modifyIngredient = (userId, ingredient, amount) => dispatch =>(
  APIUtil.modifyIngredient(userId, ingredient, amount).then(
    res => {
      if(res.data === "") {
        dispatch(removeFridgeIngredient(ingredient.id));
      } else {
        dispatch(receiveFridgeIngredient(res));
      }
    }
));
